from pathlib import Path

class UploadFile:
    """Wraps an Upload record with its file obj"""
    def __init__(self, upload, fileStorage):
        self.upload = upload
        self.fileStorage = fileStorage

    @property
    def filename(self):
        """Return the filename associated w/ the file object"""
        return self.fileStorage.filename

    @property
    def extension(self):
        """Return the extension associated w/ the file object"""
        return Path(self.filename).suffix.lstrip('.')