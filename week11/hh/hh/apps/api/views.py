from django.http.response import JsonResponse

from .models import Vacancy, Company

from django.shortcuts import redirect


def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    return JsonResponse(vacancy.to_json())


def vacancies_list_top_ten(request):
    vacancies = Vacancy.objects.filter().order_by('-salary')[:10]
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json,safe=False)


def company_list(request):
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]
    return JsonResponse(companies_json, safe=False)


def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    company_json = company.to_json()
    vacancies_list = company.vacancy_set.order_by('-id')[:20]
    vacancies_list_json = [vacancy.to_json() for vacancy in vacancies_list]
    return JsonResponse(company_json)


def company_vacancies_list(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    vacancies_list = company.vacancy_set.all()
    vacancies_list_json = [vacancy.to_json() for vacancy in vacancies_list]
    return JsonResponse({
        "name": company.name,
        'products': vacancies_list_json
    })


def redirect_view(request):
    response = redirect('api/vacancies/')
    return response
