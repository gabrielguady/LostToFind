from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models


class MyAccountManager(BaseUserManager):
    def create_user(self, email, cellphone, username, password=None):
        if not email:
            raise ValueError('Users must have an email address')
        if not username:
            raise ValueError('Users must have an username')
        user =  self.model(email=self.normalize_email(email), username=username, cellphone=cellphone)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, cellphone, password):
        user = self.create_user(
            email = self.normalize_email(email),
            username=username,
            cellphone=cellphone,
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


class Account(AbstractBaseUser):
    username = models.CharField(
        db_column='username',
        null=False,
        max_length=20,
        unique=True,
    )
    cellphone = models.IntegerField(
        db_column='cellphone',
        null=False,
        default=000000000,
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
    hide_email = models.BooleanField(
        default=True,
        db_column='hide_email',
    )

    objects = MyAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return True


    class Meta:
        db_table = 'accounts'
        managed = True
