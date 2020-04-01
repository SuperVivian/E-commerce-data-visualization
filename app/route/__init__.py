from flask import Blueprint

route = Blueprint('route', __name__)

from . import views
