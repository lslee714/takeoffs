from alembic.operations import Operations, MigrateOperation

@Operations.register_operation("create_schema")
class CreateSchema(MigrateOperation):
    """Create a schema."""

    def __init__(self, schema):
        self.schema = schema

    @classmethod
    def create_schema(cls, operations, schema):
        """Issue a "CREATE SCHEMA" instruction."""

        op = CreateSchema(schema)
        return operations.invoke(op)


@Operations.implementation_for(CreateSchema)
def create_sequence(operations, operation):
    operations.execute(f"CREATE SCHEMA  {operation.schema}")


@Operations.register_operation("drop_schema")
class DropSchema(MigrateOperation):
    """Drop a schema."""

    def __init__(self, schema, cascade=False):
        self.schema = schema
        self.cascade = cascade

    @classmethod
    def drop_schema(cls, operations, schema, cascade=False):
        """Issue a "DROP SEQUENCE" instruction."""

        op = DropSchema(schema, cascade=cascade)
        return operations.invoke(op)


@Operations.implementation_for(DropSchema)
def drop_sequence(operations, operation):
    operations.execute(f"DROP SCHEMA {operation.schema} {'CASCADE' if operation.cascade else ''}")
