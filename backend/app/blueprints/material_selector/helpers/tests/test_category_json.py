from unittest import TestCase

from ..category_json import CategoryJson

class test_call(TestCase):
    
    def test_correct_return_value(self):
        """Should return the id and name as expected"""
        fakeId = 42
        fakeCategory = 'Adamantium Metals'
        responseStub = {'@id': f'/categories/{fakeId}', '@type': 'categories', 'category': fakeCategory}
        testCase = CategoryJson(responseStub)()
        expectedResult = {
            'id': fakeId,
            'name': fakeCategory
        }
        self.assertEqual(testCase, expectedResult)

