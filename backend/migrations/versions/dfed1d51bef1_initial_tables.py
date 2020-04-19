"""initial_tables

Revision ID: dfed1d51bef1
Revises: 
Create Date: 2020-04-18 16:55:14.563049

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'dfed1d51bef1'
down_revision = None
branch_labels = None
depends_on = None

from alembic import context


def check_is_sqlite(): 
    """Returns if the alembic context is being run in for a sqlite db""" 
    databaseUri = context.config.get_main_option('sqlalchemy.url') 
    return databaseUri.startswith('sqlite')

schemaKey = 'schema'
ADDITIONAL_PROJECT_ARGS = { schemaKey: 'construction_projects' }



def upgrade():
    if check_is_sqlite(): 
        ADDITIONAL_PROJECT_ARGS.pop(schemaKey)
        ADDITIONAL_MATERIAL_SELECTOR_ARGS.pop(schemaKey)
    else: 
        op.create_schema(ADDITIONAL_PROJECT_ARGS[schemaKey])
        op.create_schema(ADDITIONAL_MATERIAL_SELECTOR_ARGS[schemaKey])
        
    op.create_table('project',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('description', sa.String(), nullable=True),
    sa.Column('location', sa.String(), nullable=True),
    sa.Column('ts_created', sa.DateTime(), server_default=sa.text('CURRENT_TIMESTAMP'), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    **ADDITIONAL_PROJECT_ARGS
    )

    op.create_table('upload',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('filepath', sa.String(), nullable=True),
    sa.Column('source_filename', sa.String(), nullable=False),
    sa.Column('ts_uploaded', sa.DateTime(), server_default=sa.text('CURRENT_TIMESTAMP'), nullable=False),
    sa.Column('id_project', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['id_project'], ['project.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('filepath'),
    **ADDITIONAL_PROJECT_ARGS
    )


def downgrade():
    op.drop_table('upload')
    op.drop_table('project')
    if not check_is_sqlite():
        op.drop_schema(ADDITIONAL_MATERIAL_SELECTOR_ARGS[schemaKey])
        op.drop_schema(ADDITIONAL_PROJECT_ARGS[schemaKey])
