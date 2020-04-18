from datetime import datetime
from unittest import TestCase
from unittest.mock import Mock

from models import Upload

from ..upload_path_manager import UploadPathManager
from ..wrappers import UploadFile


TEST_BASE_PATH = '/test/path'

class test_get_abs_path(TestCase):
    """Test cases for the get_abs_path method"""

    def test_without_id(self):
        """Attempting to get a path without an ID should raise an error"""
        pathManager = UploadPathManager(TEST_BASE_PATH)
        uploadWithNoId = Upload()
        mockfileStorage = Mock()
        uploadFile = UploadFile(uploadWithNoId, mockfileStorage)
        with self.assertRaises(ValueError):
            result = pathManager.get_abs_path(uploadFile)

    def test_without_ts(self):
        """Attempting to get a path without a timestamp should raise an error"""
        pathManager = UploadPathManager(TEST_BASE_PATH)
        uploadWithNoTs = Upload(id='test', ts_uploaded=None)
        mockfileStorage = Mock()
        uploadFile = UploadFile(uploadWithNoTs, mockfileStorage)
        with self.assertRaises(ValueError):
            result = pathManager.get_abs_path(uploadFile)

    def test_valid_upload(self):
        """Given a valid upload record, should return the expected filename"""
        testUploadTs = datetime.now()
        validUpload = Upload(id=1, ts_uploaded=testUploadTs)
        extension = 'pdf'
        mockfileStorage = Mock(filename=f'test.{extension}')
        uploadFile = UploadFile(validUpload, mockfileStorage)
        expectedResult = f"{TEST_BASE_PATH}/{testUploadTs.year}/{testUploadTs.month}/{testUploadTs.day}/" + \
            f"{testUploadTs.strftime(UploadPathManager.FILENAME_FORMAT)}_{validUpload.id}.{extension}"

        result = UploadPathManager(TEST_BASE_PATH).get_abs_path(uploadFile)
        self.assertEqual(str(result), expectedResult)
