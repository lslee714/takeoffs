from flask import url_for

from material_selector import MaterialController


class CategoryJson:

    def __init__(self, categoryResponse):
        self.categoryResponse = categoryResponse
    
    def __call__(self):
        """Return the response formatted into frontend desired JSON"""
        return {
            'id': self.id,
            'name': self.name,
        }
    
    @property
    def id(self):
        """The Id for the category parsed from the response"""
        idKey = '@id'
        idRes = self.categoryResponse[idKey]
        #Response returns the id with additional paths for it
        return int(idRes.split('/')[-1])

    @property
    def name(self):
        """The name for the category parsed from the response"""
        nameKey = 'category'
        return self.categoryResponse[nameKey]

    @classmethod
    def get_categories(cls, page=1, itemsPerPage=10):
        """Call controller, return response prewrapped with the class"""
        controller = MaterialController()
        response = controller.get_categories(page, itemsPerPage)
        return list(map(lambda c: cls(c)(), response))

