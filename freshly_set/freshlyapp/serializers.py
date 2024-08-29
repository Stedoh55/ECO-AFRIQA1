from rest_framework import serializers
from .models import Blog, Product, Garden, Comment, Like, Share, Poll, Vote, IDVerification
from django.contrib.auth import get_user_model, authenticate
from rest_framework.validators import ValidationError
from django.contrib.auth.models import User

UserModel = get_user_model()

class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ['email', 'username', 'password']

    def create(self, validated_data):
        user = UserModel.objects.create_user(
            email=validated_data['email'],
            username=validated_data['username'],
            password=validated_data['password']
        )
        return user

class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        user = authenticate(username=data['email'], password=data['password'])
        if not user:
            raise ValidationError('Invalid credentials')
        return user

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'username']
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class GardenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Garden
        fields = ['id', 'name', 'location', 'size', 'description']

class BlogSerializer(serializers.ModelSerializer):
    #comments = serializers.StringRelatedField(many=True)
    #likes = serializers.StringRelatedField(many=True)
    #shares = serializers.StringRelatedField(many=True)

    class Meta:
        model = Blog
        fields = ['id', 'user', 'title', 'content','image' ,'comments', 'likes', 'shares']
        read_only_fields = ['id', 'comments', 'likes', 'shares']  # These fields are typically read-only

# Created serializers for Blog, Comment, Like, and Share.
class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'blog', 'user', 'content', 'created_at', 'updated_at']

class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = ['id', 'blog', 'user']

class ShareSerializer(serializers.ModelSerializer):
    class Meta:
        model = Share
        fields = ['id', 'blog', 'user', 'shared_at']

# Polls serializer
class VoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vote
        fields = ['id', 'user', 'choice', 'created_at']

class PollSerializer(serializers.ModelSerializer):
    votes = VoteSerializer(many=True, read_only=True)
    vote_counts = serializers.SerializerMethodField()

    class Meta:
        model = Poll
        fields = ['id', 'title', 'description', 'created_at', 'created_by', 'votes', 'vote_counts']

    def get_vote_counts(self, obj):
        return obj.vote_counts()
    
# IDverification 

class IDVerificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = IDVerification
        fields = ['id_document_type', 'id_document_number', 'document_image', 'photo_image']