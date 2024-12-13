from django.db.models import Q
from django_filters import rest_framework as filters
from item import models

LIKE = 'unaccent__icontains'
ICONTAINS = 'icontains'
EQUALS = 'exact'
STARTS_WITH = 'startswith'
GT = 'gt'
GTE = 'gte'

class ItemLostFilter(filters.FilterSet):
    title = filters.CharFilter(lookup_expr=LIKE)
    last_seen_details = filters.CharFilter(lookup_expr=LIKE)
    city = filters.CharFilter(lookup_expr=LIKE)
    category_name = filters.CharFilter(field_name='category__name',lookup_expr=LIKE)

    class Meta:
        model = models.LostItem
        fields = ['last_seen_details', 'title', 'category_name', 'city']


class ItemFoundFilter(filters.FilterSet):
    search_all = filters.CharFilter(method='filter_search')
    title = filters.CharFilter(lookup_expr=LIKE)
    description = filters.CharFilter(lookup_expr=LIKE)
    category_name = filters.CharFilter(field_name='category__name', lookup_expr=LIKE)
    city = filters.CharFilter(lookup_expr=LIKE)

    class Meta:
        model = models.FoundItem
        fields = ['search_all', 'title', 'description', 'category_name', 'city']

    def filter_search(self, queryset, name, value):
        search_terms = value.split()

        filtro = Q()
        for term in search_terms:
            filtro &= (
                    Q(title__icontains=term) |
                    Q(description__icontains=term) |
                    Q(city__icontains=term)
            )

        return queryset.filter(filtro)

class ItemCategoryFilter(filters.FilterSet):
    items = filters.CharFilter(lookup_expr='icontains')
    class Meta:
        model = models.Category
        fields = ['items']