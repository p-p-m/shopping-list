import json

from flask import Blueprint, jsonify, request, send_from_directory, send_file

from ..bl import shopping_list

blueprint = Blueprint('shopping_list', __name__)


def _format_quantity(quantity):
    return format(quantity, '.2f')


def _serialize_shopping_item(shopping_item):
    quantity = _format_quantity(shopping_item.quantity)
    name = f'{shopping_item.product.name} - {quantity}'
    measurement = shopping_item.product.measurement
    if measurement:
        name += f' {measurement}'
    return {
        'id': shopping_item.id,
        'name': name,
    }


@blueprint.route('/shopping_list', methods=('GET', ))
def list():
    _shopping_list = shopping_list.get_or_create()
    shopping_items = shopping_list.get_items(_shopping_list.id)
    return jsonify([
        _serialize_shopping_item(shopping_item)
        for shopping_item in shopping_items
    ])


@blueprint.route('/shopping_list/add_item', methods=('POST', ))
def add_item():
    data = json.loads(request.data)
    shopping_item = shopping_list.add_item(
        shopping_list_id=shopping_list.get_or_create().id,
        name=data['name'],
        quantity=data['quantity'],
        measurement=data.get('measurement')
    )
    return jsonify(_serialize_shopping_item(shopping_item))


@blueprint.route('/shopping_list/remove_item', methods=('POST', ))
def remove_item():
    data = json.loads(request.data)
    shopping_list.remove_item([data['shopping_item_id']])
    return ('', 204)
