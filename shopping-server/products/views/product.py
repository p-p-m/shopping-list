from flask import Blueprint, jsonify

from ..bl import product

blueprint = Blueprint('product', __name__)


def _serialize_shopping_item(shopping_item):
    return {
        'id': shopping_item.id,
        'name': shopping_item.product.name,
        'measurement': shopping_item.product.measurement,
        'quantity': str(shopping_item.quantity),
    }


@blueprint.route('/product/all_names', methods=('GET', ))
def list_all_names():
    return jsonify(list(product.get_all_names()))


@blueprint.route('/product/all_measurements', methods=('GET', ))
def list_all_measurements():
    return jsonify(list(product.get_all_measurements()))
