from sqlalchemy.orm import load_only
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


def get_all_names():
    return set(p.name for p in Product.query.options(load_only('name')))


def get_all_measurements():
    return set(
        p.measurement for p in Product.query.options(load_only('measurement'))
        if p.measurement
    )
