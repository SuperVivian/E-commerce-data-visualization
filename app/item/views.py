from flask import render_template
from . import item
@item.route('/', methods=['GET'])
def index():
    return render_template('item.html')

