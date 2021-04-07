from django.db import models


class Category(models.Model):
    name = models.CharField('название категории', max_length=100)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
        }

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'


class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    name = models.CharField('название продукта', max_length=250)
    price = models.FloatField('цена товара', default=0)
    description = models.TextField('описание продукта')
    count = models.IntegerField('количество продуктов', default=0)
    is_active = models.BooleanField('наличие продукта')

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price
        }

    class Meta:
        verbose_name = 'Продукт'
        verbose_name_plural = 'Продукты'
