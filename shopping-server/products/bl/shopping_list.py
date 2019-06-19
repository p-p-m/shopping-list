from sqlalchemy.orm.exc import NoResultFound

from . import product
from .. import db
from ..database import ShoppingList, ShoppingItem


def create():
    shopping_list = ShoppingList()
    db.session.add(shopping_list)
    db.session.commit()
    return shopping_list


def get_or_create():
    try:
        return ShoppingList.query.one()
    except NoResultFound:
        return create()


def add_item(shopping_list_id, name, quantity, measurement=None):
    _product = product.get_or_create(name, measurement)
    shopping_item = ShoppingItem(shopping_list_id=shopping_list_id,
                                 product_id=_product.id,
                                 quantity=quantity)
    db.session.add(shopping_item)
    db.session.commit()
    return shopping_item


def remove_item(shopping_item_id):
    db.session.query(ShoppingItem).filter(
        ShoppingItem.id.in_(shopping_item_id)).delete(synchronize_session='fetch')
    db.session.commit()


def get_items(shopping_list_id):
    return ShoppingItem.query.filter(
        ShoppingItem.shopping_list_id == shopping_list_id).all()
