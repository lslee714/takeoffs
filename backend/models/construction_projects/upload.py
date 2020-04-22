from sqlalchemy import Column, Integer, String, DateTime, func, ForeignKey
from sqlalchemy.orm import relationship

from models.base import Base

from .project import Project


class Upload(Base):
    """Represents the upload table"""
    __table_args__ = {
        'schema': 'construction_project'
    }
    __tablename__ = 'upload'
    id = Column(Integer, primary_key=True)
    filepath = Column(String, unique=True)
    source_filename = Column(String, nullable=False)
    ts_uploaded = Column(DateTime, nullable=False, server_default=func.now())
    id_project = Column(Integer, ForeignKey(Project.id, ondelete='CASCADE'), nullable=False)

    project = relationship(Project, backref="uploads")