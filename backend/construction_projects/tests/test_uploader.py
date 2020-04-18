from datetime import datetime
from pathlib import Path
from unittest import TestCase
from unittest.mock import Mock, patch

from models import Upload

from ..exc import InvalidExtension
from ..uploader import Uploader
from ..wrappers import UploadFile

class test_upload(TestCase):
    """Tests for the upload method"""

    #No/unsupported extension redundant tests for can_upload also

    def test_with_no_extension(self):
        """A file object with no extension is not allowed"""
        testPath = '/test/path'
        testCase = Uploader(testPath)

        upload = Upload()
        mockfileStorage = Mock(filename='test')

        uploadFile = UploadFile(upload, mockfileStorage)
        with self.assertRaises(InvalidExtension):
            testCase.upload(uploadFile)

    def test_with_unsupported_extension(self):
        """A file object with an unsupported extension is not allowed"""
        testPath = '/test/path'
        testCase = Uploader(testPath)

        upload = Upload()
        mockfileStorage = Mock(filename='test')

        uploadFile = UploadFile(upload, mockfileStorage)

        with self.assertRaises(InvalidExtension):
            testCase.upload(uploadFile)

    def test_with_valid_file(self):
        """An uploadable file should be written out to disk"""
        testPath = '/test/path'
        validUpload = Upload(id=1, ts_uploaded=datetime.now())
        uploadableMockfileStorage = Mock(filename='test.pdf')
        uploadFile = UploadFile(validUpload, uploadableMockfileStorage)
        writeBinaryMode = 'wb'

        with patch('construction_projects.uploader.UploadPathManager') as pathManagerMock:
            pathStub = Mock(return_value=f'{testPath}/{uploadableMockfileStorage.filename}')
            pathManagerMock.return_value.get_abs_path.return_value = pathStub
            with patch('construction_projects.uploader.open') as openMock:
                enterMethodMock = Mock()
                openMock.return_value.__enter__ = enterMethodMock
                uploader = Uploader(testPath)
                uploader.upload(uploadFile)
                pathStub.parent.mkdir.assert_called_with(exist_ok=True, parents=True)
                openMock.assert_called_with(pathStub, writeBinaryMode)
                uploadFile.fileStorage.save.assert_called_with(enterMethodMock.return_value)
                self.assertEqual(uploadFile.upload.filepath, str(pathStub))
                self.assertEqual(uploadFile.upload.source_filename, uploadableMockfileStorage.filename)