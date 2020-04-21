from datetime import datetime
from flask import url_for
from unittest import TestCase

from models import Project

from .. import ProjectJson


class test_call(TestCase):
    """Test cases of the __call__ method"""

    def test_with_non_flushed(self):
        """A non flushed project should return a dictionary with empty values"""
        project = Project(id=None, ts_created=None)
        projectJson = ProjectJson(project)
        self.assertEqual(projectJson(), {})

    def test_with_flushed_id(self):
        """A flushed and available project should return a proper json"""

        #This test will fail if not run w/ run_app_tests.py
        #As it uses url_for which requires an app context        

        id = 1
        ts = datetime.now()

        projectNameStub = 'Name'
        project = Project(id=id, ts_created=ts, name=projectNameStub)
        projectJson = ProjectJson(project)

        projectJsonData = projectJson()

        expectedResult = {
            'id': id,
            'tsCreated': ts.isoformat(),
            'name': projectNameStub,
            'description': '',
            'location': '',
            'links': {
                'delete': url_for('construction_projects.delete_project', projectId=id, _external=True),
                'save': url_for('construction_projects.save_project', projectId=id, _external=True),
                'saveCart': url_for('construction_projects.save_project_materials', projectId=id, _external=True) 
            },
            'cart': []
        }
        self.assertEqual(projectJsonData, expectedResult)