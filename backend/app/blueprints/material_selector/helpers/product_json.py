from material_selector import MaterialController


# TODO unit test for this
class ProductJson:
    def __init__(self, productRes):
        self.productRes = productRes
    
    def __call__(self):
        """Return this object in json structure"""
        return {
            'id': self.id,
            'name': self.name,
            'storeUrl': self.store_url,
            'imageUrl': self.image_url,
            'price': self.price,
            'currency': self.currency,
            'unit': self.unit
        }

    @classmethod
    def from_material(cls, material):
        """Returns an instance of this class from a project Material record"""
        # TODO api would be nice to have a multi id get call. Or i could persist the data in my database, but that seems redudnant
        res = MaterialController().get_product(material.api_id)
        return cls(res)

    @classmethod
    def get_products(cls, categoryName=''):
        controller = MaterialController()
        productResponse = controller.get_products(categoryName)
        return [cls(p)() for p in productResponse]

    @property
    def id(self):
        """The actual id for the product"""
        idKey = '@id'
        fullId = self.productRes[idKey]
        return fullId.split('/')[-1]

    @property
    def name(self):
        nameKey = 'productName'
        return self._get_by_key(nameKey)

    @property
    def store_url(self):
        storeUrlKey = 'storeUrl'
        return self._get_by_key(storeUrlKey)

    @property
    def image_url(self):
        imageUrlKey = 'productImageUrl'
        return self._get_by_key(imageUrlKey)

    @property
    def price(self):
        priceKey = 'price'
        return self._get_by_key(priceKey)
    
    @property
    def currency(self):
        currencyKey = 'currency'
        return self._get_by_key(currencyKey)


    @property
    def unit(self):
        unitKey = 'productUnit'
        return self._get_by_key(unitKey)

    def _get_by_key(self, key):
        """Return the value if it exists"""
        # Learned not all products look the same... 
        return self.productRes[key] if key in self.productRes else ''