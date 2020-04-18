from unittest import TestCase
from unittest.mock import Mock

from models import Upload

from ..upload_file import UploadFile

#Extension the only real interesting worth testing in UploadFile
class test_extension(TestCase):

    def test_with_no_extension(self):
        """A file name with no extension should return an empty string"""
        upload = Upload()
        mockfileStorage = Mock(filename='test_file')
        uploadFile = UploadFile(upload, mockfileStorage)
        result = uploadFile.extension
        self.assertEqual(result, '')

    def test_with_multiple_periods(self):
        """Regardless of the number of periods, the extension should be correct """
        EXPECTED_EXTENSION = 'pdf'

        upload = Upload()
        mockfileStorage = Mock(filename=f'test.file.with.a.weird.name.{EXPECTED_EXTENSION}')
        uploadFile = UploadFile(upload, mockfileStorage)
        result = uploadFile.extension
        self.assertEqual(result, EXPECTED_EXTENSION)

    def test_with_a_normal_name(self):
        """Given a 'normal' filename, the extension should be correct"""
        EXPECTED_EXTENSION = 'pdf'

        upload = Upload()
        mockfileStorage = Mock(filename=f'test_file.{EXPECTED_EXTENSION}')
        uploadFile = UploadFile(upload, mockfileStorage)
        result = uploadFile.extension
        self.assertEqual(result, EXPECTED_EXTENSION)