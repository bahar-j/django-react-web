from rest_framework import generics
from forum.models import Post
from .serializers import PostSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
import uuid
import os
from django.core.files.storage import default_storage

# def home(request):
#     if True:
#         auth.login()
#         return request.session.session_key

# post 목록/생성
class PostList(generics.ListCreateAPIView):
    queryset = Post.postobjects.all()
    serializer_class = PostSerializer

# post 조회/수정/삭제
class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.postobjects.all()
    serializer_class = PostSerializer

    # detail-retrieve일 때만 조회수 1씩 증가
    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.n_hit = instance.n_hit + 1
        instance.save()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

# 사진 목록/생성
class PhotoURLCreateAPIView(APIView):
    def post(self, request):
        file = request.FILES["image"]
        result = ''
        if file.name == '':
            result = 'error'
            filename = 'error'
        else:
            if file:
                if os.path.exists('summernote' + "/" + file.name): # if image with same name exists
                    _dot = file.name.find(".")
                    file.name = file.name[:_dot] + str(uuid.uuid4()) + file.name[_dot:]
                filename = file.name
                file_name = default_storage.save((os.path.join('summernote/', filename)), file)
                result = file_name
                # print(os.path.join('summernote/', filename))
        return Response({'url' : result, 'filename' : filename})


# class ThumbnailCreateAPIView(APIView):
#     def put(self, request):
#         file = request.FILES["image"]
#         post = Post()
#         post.thumbnail = 