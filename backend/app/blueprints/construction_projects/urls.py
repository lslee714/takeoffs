def register(blueprint):
    """Register the routes for the blueprint"""
    @blueprint.route('/')
    def index():
        """Root for the constructionProjects blueprint"""
        return "Hello another world"
        