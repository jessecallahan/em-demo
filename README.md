# MikroORM Entity Manager Demo
This is a demo of how to use Entity Manager (em) within a seeder and common pitfalls you might run into

[Accompanying Document](https://docs.google.com/document/d/1YhG1iwKnK0aA5LAJ-MlGaN_gJGYkuWq90ENjZAArOLc/edit?tab=t.0)

## Entity Constructor

* What is the difference between instantiation and create()?

create() is persisted by default.

* What is the difference between instantiation and POJO?

The entity constructor enforces required parameters. Instantiation needs to be persisted manually.

POJO uses create() and is then persisted automatically or uses other em functions (like assign()).

## Relationships
An entity is managed if it’s fetched from the database (via em.find(), em.findOne() or via other managed entity)
or registered as new through em.persist()

* How to add data to relational tables (both one-to-many and many-to-one)?

One-to-many can be set in the entity constructor or with create() and POJO. 

Many-to-many set through add() or through pivot table constructor.

* What is a reference?
  https://mikro-orm.io/docs/entity-manager#entity-references

A way to reference entities without querying the db, also used for serialization

* What is initialization? 

Reference entities are initialized until using wrap(entity).isInitialized() and data is populated

* How to use find correctly when adding to relational table?

An entity is managed if it’s fetched from the database (via em.find(), em.findOne() or via other managed entity) so any objects
you attach will automatically be persisted

## Collections

* How to use add() correctly?
* What is the best way to add a collection?

## Common Pitfalls/Answers to "in the wild" problems

* Why are MSAs adding duplicate data to manual pivot tables?

* Why is upsert not working with MSAs?
Upserts do not handle relational entities: https://github.com/mikro-orm/mikro-orm/discussions/4708

* What is the difference between adding, updating, and upserting?

Adding a record is an insert statement, update as an update statement, and update is an insert statement with on conflict 

on conflict statement example usage:

INSERT INTO products (id, name, price)
VALUES (101, 'Laptop', 999.99)
ON CONFLICT (id)
DO UPDATE SET
name = EXCLUDED.name,
price = EXCLUDED.price;




