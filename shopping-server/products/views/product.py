from flask import Blueprint, jsonify

from ..bl import product

blueprint = Blueprint('product', __name__)


def _serialize_product(p):
    return {'name': p.name, 'measurement': p.measurement}


@blueprint.route('/product/autocomplete', methods=('GET', ))
def autocomplete():
    return jsonify(product.get_autocomplete())
