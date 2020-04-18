from sqlalchemy import Column, Integer, String

from models.base import Base

class Project(Base):
    """Represents the Project table"""
    #Purposefully commented out for sqlite development
    # __table_args__ = {
    #     'schema': 'construction_projects'
    # }
    __tablename__ = 'project'
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(String)
    location = Column(String)