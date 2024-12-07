
from django.db import models


class ModelBase(models.Model):
    id = models.BigAutoField(
        primary_key=True,
        null=False,
        db_column='id',

    )
    date_created = models.DateTimeField(
        db_column='dt_created',
        auto_now_add=True,
        null=False,
    )
    date_modified = models.DateTimeField(
        db_column='dt_modified',
        auto_now=True,
        null=False,
    )

    class Meta:
        abstract = True
        managed = True


class Category(ModelBase):
    name=models.CharField(
        null=False,
        db_column='category_name'
    )

class ItemImage(ModelBase):
    image = models.ImageField(
        upload_to='media/items_pictures',
        null=True,
        db_column='image',
        blank=True,
        )

    class Meta:
        db_table = 'item_image'
        managed = True


class LostItem(ModelBase):
    title = models.CharField(
        db_column='tx_title',
        null=False,
        max_length=100,
    )
    last_seen_details = models.TextField(
        db_column='tx_description',
        null=False,
        max_length=250,
    )
    reward = models.FloatField(
        db_column='nb_price',
        null=False,
    )
    date_lost = models.DateTimeField(
        db_column='dt_lost',
        null=False,
    )
    is_resolved = models.BooleanField(
        db_column='cs_resolved',
        default=False,
        null=False,
    )
    Category = models.ForeignKey(
        Category,
        on_delete=models.PROTECT,
        db_column='category_id',
        null=False,
        default=1,
    )

    class Meta:
        db_table = 'item_lost'
        managed = True


class FoundItem(ModelBase):
    title = models.CharField(
        db_column='tx_title',
        null=False,
        max_length=100,
    )
    description = models.TextField(
        db_column='tx_description',
        null=False,
        max_length=250,
    )
    date_found = models.DateTimeField(
        db_column='dt_found',
        null=False,
    )
    is_resolved = models.BooleanField(
        db_column='cs_resolved',
        default=False,
        null=False,
    )
    Category = models.ForeignKey(
        Category,
        on_delete=models.PROTECT,
        db_column='category_id',
        null=False,
        default=1,
    )

    class Meta:
        db_table = 'item_found'
        managed = True
