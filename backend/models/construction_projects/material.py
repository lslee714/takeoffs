from sqlalchemy import Column, Integer, String, DateTime, func, ForeignKey
from sqlalchemy.orm import relationship, backref

from models.base import Base

from .project import Project

class Material(Base):
    """Represents the material table"""
    #Purposefully commented out for sqlite development
    # __table_args__ = {
    #     'schema': 'construction_projects'
    # }
    __tablename__ = 'material'
    id = Column(Integer, primary_key=True)
    api_id = Column(String, unique=True)
    id_project = Column(String, ForeignKey(Project.id), nullable=False)
    quantity = Column(Integer, nullable=False)
    ts_created = Column(DateTime, nullable=False, default=func.now())
    
    project = relationship(Project, backref=backref('materials', cascade='all, delete-orphan'))