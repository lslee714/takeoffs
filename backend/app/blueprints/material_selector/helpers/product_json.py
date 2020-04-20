from material_selector import MaterialController


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
            'currency': self.currency
        }

    @property
    def id(self):
        """The actual id for the product"""
        idKey = '@id'
        fullId = self.productRes[idKey]
        return fullId.split('/')[-1]

    @property
    def name(self):
        nameKey = 'productName'
        return self.productRes[nameKey]

    @property
    def store_url(self):
        storeUrlKey = 'storeUrl'
        return self.productRes[storeUrlKey]

    @property
    def image_url(self):
        imageUrlKey = 'productImageUrl'
        return self.productRes[imageUrlKey]

    @property
    def price(self):
        priceKey = 'price'
        return self.productRes[priceKey]
    
    @property
    def currency(self):
        currencyKey = 'currency'
        return self.productRes[currencyKey]

    @classmethod
    def get_products(cls, categoryName=''):
        controller = MaterialController()
        productResponse = controller.get_products(categoryName)
        return list(map(lambda p: cls(p)(), productResponse))

