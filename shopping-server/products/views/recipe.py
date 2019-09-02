import json

from flask import Blueprint, jsonify, request

from ..bl import recipe

blueprint = Blueprint('recipe', __name__)


def _serialize_recipe(recipe):
    return {
        'name': recipe.name,
        'description': recipe.description,
        'items': [
            {
                'name': item.product.name,
                'quantity': item.quantity,
            }
            for item in recipe.recipe_items
        ]
    }


@blueprint.route('/recipe/add_item', methods=('POST', ))
def add_recipe():
    data = json.loads(request.data)
    _recipe = recipe.create(
        name=data['name'],
        description=data['description'],
        items=data['items'],
    )
    return jsonify(_serialize_recipe(_recipe))
