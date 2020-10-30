from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from django.template.defaultfilters import slugify

class Board(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

# Create your models here.
class Post(models.Model):

    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='published')

    options = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )

    # 어떤 게시판에 속하는지
    board = models.ForeignKey(
        Board, on_delete=models.PROTECT, default=1
    )
    title = models.CharField(max_length=250) # 제목
    content = models.TextField(null=True) # 내용
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='board_posts'
    )
    published = models.DateTimeField(default=timezone.now) # 작성일시

    status = models.CharField(
        max_length=10, choices=options, default='published'
    ) # 상태 - 임시 저장 / 발행됨
    thumbnail = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    document = models.FileField(upload_to='doc/%Y/%m/%d/', blank=True)
    document_name = models.CharField(max_length=250, blank=True)
    isNotice = models.BooleanField(default=False) # 공지글 여부

    # slug = models.SlugField() # 제목으로부터 유효한 url 만들 때 필요

    n_hit = models.PositiveIntegerField(default=0, editable=False)
    edit_password = models.CharField(max_length=50, blank=True, default='')

    objects = models.Manager() # default manager
    postobjects = PostObjects() # custom manager - published된 것만 filter해줌

    class Meta:
        ordering = ('-published',)

    def __str__(self):
        return self.title


class Comment(models.Model):
    post = models.ForeignKey(
        Post, on_delete=models.CASCADE, related_name='comments'
        )
    nickname = models.CharField(max_length=50) # 작성자 닉네임
    content = models.TextField() 
    edit_password = models.CharField(max_length=50)
    published = models.DateTimeField(default=timezone.now) # 작성일시

    def __str__(self):
        return self.content