from django_filters import rest_framework as filters

LIKE = 'unaccent__icontains'
ICONTAINS = 'icontains'
EQUALS = 'exact'
STARTS_WITH = 'startswith'
GT = 'gt'
GTE = 'gte'

class LostItemFilter(filters.FilterSet):
    last_seen_details= filters.CharFilter(field_name='last_seen_details', lookup_expr=ICONTAINS)

