from flask import render_template
from . import user

@user.route('/', methods=['GET'])
def index():
    return render_template('user.html')

