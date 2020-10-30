from rest_framework import generics
from forum.models import Post
from .serializers import PostSerializer
from rest_framework.response import Response


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