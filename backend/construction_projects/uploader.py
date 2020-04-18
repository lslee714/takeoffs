from .exc import InvalidExtension
from .upload_path_manager import UploadPathManager


class Uploader:
    """Uploads construction projects"""
    SUPPORTED_EXTENSIONS = frozenset({'pdf'})

    def __init__(self, basePath):
        self.pathManager = UploadPathManager(basePath)

    def upload(self, uploadFile):
        """Create, upload and set the file path"""
        if not self.can_upload(uploadFile):
            raise InvalidExtension("Cannot upload this file extension")
        uploadFilePath = self.pathManager.get_abs_path(uploadFile)
        uploadFilePath.parent.mkdir(parents=True, exist_ok=True)
        with open(uploadFilePath, 'wb') as uploadWriteFile:
            uploadFile.fileStorage.save(uploadWriteFile)
        uploadFile.upload.source_filename = uploadFile.filename
        uploadFile.upload.filepath = str(uploadFilePath)

    @staticmethod
    def can_upload(uploadFile):
        """Return if this uploadFile can be uploaded or not"""
        return uploadFile.extension in Uploader.SUPPORTED_EXTENSIONS