from sqlalchemy import Column, Integer, String, DateTime, func

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
    ts_created = Column(DateTime, nullable=False, default=func.now())