from sqlalchemy.orm.exc import NoResultFound

from .. import db
from ..database import Product


def create(name, measurement=None):
    product = Product(name=name, measurement=measurement)
    db.session.add(product)
    db.session.commit()
    return product


def delete(ids):
    db.session.query(Product).filter(
        Product.id.in_(ids)).delete(synchronize_session=True)
    db.session.commit()


def get_or_create(name, measurement=None):
    try:
        product = Product.query.filter(Product.name == name).one()
    except NoResultFound:
        return create(name, measurement)
    if product.measurement != measurement and measurement:
        product.measurement = measurement
        db.session.add(product)
        db.session.commit()
    return product
