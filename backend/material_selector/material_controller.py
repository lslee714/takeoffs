import os
import requests

class MaterialController:
    API_URL = os.environ.get('MATERIAL_API_URL')

    def call_categories(self, page=1, itemsPerPage=10):
        queryParams = {
            'page': page,
            'itemsPerPage': itemsPerPage
        }
        url = f'{self.API_URL}/categories'
        responseJson = requests.get(url, queryParams).json()
        return responseJson

    def get_categories(self, page=1, itemsPerPage=10):
        responseJson = self.call_categories(page, itemsPerPage)
        categoryKey = 'hydra:member'
        return responseJson[categoryKey]

    def get_total(self): 
        responseJson = self.call_categories()
        totalKey = 'hydra:totalItems'
        return responseJson[totalKey]
    
    def get_products(self, categoryName=''):
        url = f'{self.API_URL}/products'
        queryParams = {}
        if(categoryName):
            queryParams['categoryName'] = categoryName
        responseJson = requests.get(url, queryParams).json()
        productsKey = 'hydra:member'
        return responseJson[productsKey]