from .. import db
from ..database import Recipe, RecipeItem, Product


def create(name, description, items):
    recipe = Recipe(name=name, description=description)
    db.session.add(recipe)
    for item in items:
        _add_items(recipe.id, items)
    db.session.commit()
    return recipe


def _add_items(recipe_id, items):
    for item in items:
        try:
            product = Product.query.filter(name=item['name']).all()[0]
        except IndexError:
            product = Product(
                name=item['name'],
                measurement=item.get('measurement')
            )
            db.session.add(product)
        recipe_item = RecipeItem(
            product_id=product.id,
            recipe_id=recipe_id,
            quantity=item['quantity']
        )
        db.session.add(recipe_item)
