from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models


class MyAccountManager(BaseUserManager):
    def create_user(self, email, username, password=None):
        if not email:
            raise ValueError('Users must have an email address')
        if not username:
            raise ValueError('Users must have an username')
        user =  self.model(email=self.normalize_email(email), username=username)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password):
        user = self.create_user(
            email = self.normalize_email(email),
            username=username,
            password=password,
        )
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user

    class Meta:
        db_table = 'managerAccounts'
        managed = True



def get_uploaded_profile_pic_path(self):
    return f'profile_pictures/{self.pk}/{"profile_image.png"}'

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
    profile_picture = models.ImageField(
        upload_to=get_uploaded_profile_pic_path,
        null=True,
        blank=True,
        default=get_default_profile_pic,
    )
    hide_email = models.BooleanField(
        default=True,
        db_column='hide_email',
    )

    objects = MyAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.username

    def get_profile_image(self):
        return str(self.profile_picture)[str(self.profile_picture).index(f'profile_pictures/{self.pk}/'):]

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True


    class Meta:
        db_table = 'accounts'
        managed = True
