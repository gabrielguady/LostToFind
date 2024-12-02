# Generated by Django 5.1.3 on 2024-12-02 17:39

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FoundItem',
            fields=[
                ('id', models.BigAutoField(db_column='id', primary_key=True, serialize=False)),
                ('date_created', models.DateTimeField(auto_now_add=True, db_column='dt_created')),
                ('date_modified', models.DateTimeField(auto_now=True, db_column='dt_modified')),
                ('title', models.CharField(db_column='tx_title', max_length=100)),
                ('description', models.TextField(db_column='tx_description', max_length=250)),
                ('date_found', models.DateTimeField(db_column='dt_found')),
                ('is_resolved', models.BooleanField(db_column='cs_resolved', default=False)),
            ],
            options={
                'db_table': 'item_found',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='ItemImage',
            fields=[
                ('id', models.BigAutoField(db_column='id', primary_key=True, serialize=False)),
                ('date_created', models.DateTimeField(auto_now_add=True, db_column='dt_created')),
                ('date_modified', models.DateTimeField(auto_now=True, db_column='dt_modified')),
                ('image', models.ImageField(blank=True, db_column='image', null=True, upload_to='media/items_pictures')),
            ],
            options={
                'db_table': 'item_image',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='LostItem',
            fields=[
                ('id', models.BigAutoField(db_column='id', primary_key=True, serialize=False)),
                ('date_created', models.DateTimeField(auto_now_add=True, db_column='dt_created')),
                ('date_modified', models.DateTimeField(auto_now=True, db_column='dt_modified')),
                ('title', models.CharField(db_column='tx_title', max_length=100)),
                ('last_seen_details', models.TextField(db_column='tx_description', max_length=250)),
                ('reward', models.FloatField(db_column='nb_price')),
                ('date_lost', models.DateTimeField(db_column='dt_lost')),
                ('is_resolved', models.BooleanField(db_column='cs_resolved', default=False)),
            ],
            options={
                'db_table': 'item_lost',
                'managed': True,
            },
        ),
    ]
