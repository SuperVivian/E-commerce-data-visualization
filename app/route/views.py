from flask import render_template
from . import route
@route.route('/', methods=['GET'])
def index():
    return render_template('route.html')