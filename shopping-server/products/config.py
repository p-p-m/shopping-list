from environs import Env

env = Env()
env.read_env()


class Base():
    SECRET_KEY = env.str('SECRET_KEY', 'dev')
    # SQL alchemy
    SQLALCHEMY_DATABASE_URI = env.str('SQLALCHEMY_DATABASE_URI')
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class Dev(Base):
    SECRET_KEY = env.str('SECRET_KEY', 'dev')


class Test(Dev):
    pass


def get_config():
    testing = env.bool('TESTING', False)
    flask_env = env.str('FLASK_ENV')
    if testing:
        return Test
    if flask_env == 'development':
        return Dev
    return Base
