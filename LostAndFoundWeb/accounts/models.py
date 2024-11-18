from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models

def get_uploaded_profile_pic_path(self):
    return f'profile'

def get_default_profile_pic():
    return 'images/default-profile-pic.png'

class Account(AbstractBaseUser):
    username = models.CharField(
        db_column='username',
        null=False,
        max_length=20,
        unique=True,
    )
    email = models.EmailField(
        db_column='email',
        null=False,
        unique=True,
    )
    password = models.CharField(
        db_column='password',
        null=False,
    )

    date_joined = models.DateTimeField(
        db_column='date_joined',
        verbose_name='date joined',
        null=False,
        auto_now_add=True,
    )
    last_login = models.DateTimeField(
        db_column='last_login',
        verbose_name='last login',
        null=False,
        auto_now=True,
    )

    profile_picture = models.ImageField(
        upload_to=get_uploaded_profile_pic_path,
        null=True,
        blank=True,
        default=get_default_profile_pic,
    )
    is_admin = models.BooleanField(
        default=False,
        db_column='is_admin',
        null=False,
    )
    is_active = models.BooleanField(
        default=True,
        db_column='is_active',
        null=False,
    )
    is_staff = models.BooleanField(
        default=False,
        db_column='is_staff',
        null=False,
    )
    is_superuser = models.BooleanField(
        default=False,
        db_column='is_superuser',
        null=False,
    )


    class Meta:
        db_table = 'users'
        managed = True
