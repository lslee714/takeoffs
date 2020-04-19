import os
import requests

class MaterialController:
    API_URL = os.environ.get('MATERIAL_API_URL')

    def get_categories(self, page=1, itemsPerPage=30):
        queryParams = {
            'page': page,
            'itemsPerPage': itemsPerPage
        }
        url = f'{self.API_URL}/categories'
        responseJson = requests.get(url, queryParams).json()
        categoryKey = 'hydra:member'
        return responseJson[categoryKey]
    