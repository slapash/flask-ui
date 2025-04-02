# app/routes.py
from flask import Blueprint, render_template

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return render_template('pages/index.html')

@main.route('/showcase')
def showcase():
    return render_template('pages/showcase.html')