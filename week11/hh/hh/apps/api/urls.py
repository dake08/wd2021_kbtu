from django.urls import path

from . import views

app_name = 'api'

urlpatterns = [
    path('', views.redirect_view, name='main'),
    path('vacancies/', views.vacancy_list, name='vacancies'),
    path('vacancies/<int:vacancy_id>/', views.vacancy_detail, name='vacancy'),
    path('vacancies/top_ten', views.vacancies_list_top_ten, name='top_ten'),
    path('companies/', views.company_list, name='companies'),
    path('companies/<int:company_id>/', views.company_detail, name='company'),
    path('companies/<int:company_id>/vacancies/', views.company_vacancies_list, name='company_vacancies')
]
