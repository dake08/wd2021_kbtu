from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()


from django.db import models


class Company(models.Model):
    name = models.CharField('название категории', max_length=100)
    description = models.TextField('описание компании')
    city = models.CharField(max_length=200)
    address = models.TextField()

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }

    class Meta:
        verbose_name = 'Компания'
        verbose_name_plural = 'Компании'

    def __str__(self):
        return self.name


class Vacancy(models.Model):
    name = models.CharField('название вакансии', max_length=250)
    description = models.TextField('описание вакансии')
    salary = models.FloatField('зарплата вакансии')
    company = models.ForeignKey(Company, on_delete=models.CASCADE)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'salary': self.salary
        }

    class Meta:
        verbose_name = 'Вакансия'
        verbose_name_plural = 'Вакансии'

    def __str__(self):
        return self.name
