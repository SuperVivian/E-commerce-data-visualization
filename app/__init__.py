from flask import Flask
from flask_bootstrap import Bootstrap

bootstrap = Bootstrap()


def create_app(config_name):
    app = Flask(__name__)

    bootstrap.init_app(app)
  

    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    from .item import item as item_blueprint
    app.register_blueprint(item_blueprint, url_prefix='/item')


    from .user import user as user_blueprint
    app.register_blueprint(user_blueprint, url_prefix='/user')

    return app
