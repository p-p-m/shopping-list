from flask import Flask, send_from_directory
from flask_cors import CORS
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

from .config import get_config

db = SQLAlchemy()
migrate = Migrate()


def create_app():
    app = Flask(__name__, static_folder='../dist', instance_relative_config=True)
    app.config.from_object(get_config())

    register_extensions(app)
    register_views(app)

    return app


def register_extensions(app):
    CORS(app)  # TODO: disable this in production
    db.init_app(app)
    migrate.init_app(app, db)
    # To register all models even if they are not used in views.
    from . import database  # noqa


def register_views(app):
    from .views import shopping_list
    app.register_blueprint(shopping_list.blueprint)

    @app.route('/')
    def index():
        return send_from_directory(app.static_folder, 'index.html')
