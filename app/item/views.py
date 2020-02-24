from flask import render_template
from . import item
from ..models import Model
@item.route('/', methods=['GET'])
def index():
    model=Model()
    data=model.get_behavior_count()
    return render_template('item.html',data=data)

