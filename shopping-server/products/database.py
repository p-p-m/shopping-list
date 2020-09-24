"""
Shopping list <--- M2M via ShoppingItem ---> Product
Recipe        <--- M2M via RecipeItem   ---> Product
"""

from sqlalchemy import func

from . import db


class Base(db.Model):
    __abstract__ = True
    id = db.Column(db.Integer, primary_key=True)
    created = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated = db.Column(db.DateTime(timezone=True), onupdate=func.now())


class Product(Base):
    name = db.Column(db.String(512))
    measurement = db.Column(db.String(64), nullable=True)
    shopping_items = db.relationship('ShoppingItem', back_populates='product')


class ShoppingItem(Base):
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'))
    product = db.relationship('Product', back_populates='shopping_items')
    shopping_list_id = db.Column(db.Integer, db.ForeignKey('shopping_list.id'))
    shopping_list = db.relationship('ShoppingList',
                                    back_populates='shopping_items')
    quantity = db.Column(db.Float(precision=5, asdecimal=True))


class ShoppingList(Base):
    shopping_items = db.relationship('ShoppingItem',
                                     back_populates='shopping_list')


class RecipeItem(Base):
    recipe_id = db.Column(db.Integer, db.ForeignKey('recipe.id'))
    recipe = db.relationship('Recipe', back_populates='recipe_items')
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'))
    product = db.relationship('Product')
    quantity = db.Column(db.Float(precision=5, asdecimal=True))


class Recipe(Base):
    name = db.Column(db.String(128))
    description = db.Column(db.Text)
    recipe_items = db.relationship('RecipeItem', back_populates='recipe')
