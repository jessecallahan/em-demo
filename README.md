# MikroORM Entity Manager Demo
This is a demo of how to use Entity Manager (em) within a seeder and common pitfalls you might run into

[Accompanying Document](https://docs.google.com/document/d/1YhG1iwKnK0aA5LAJ-MlGaN_gJGYkuWq90ENjZAArOLc/edit?tab=t.0)

## Entity Constructor

* What is the difference between instantiation and create()?

create() is persisted by default.

* What is the difference between instantiation and POJO?

The entity constructor enforces required parameters. They both need to be persisted manually.

## Relationships
An entity is managed if it’s fetched from the database (via em.find(), em.findOne() or via other managed entity)
or registered as new through em.persist()
* How to add data to relational tables (both one-to-many and many-to-one)?
* What is a reference?
* What is initialization? 
* How to use find correctly when adding to relational table?

## Collections

* How to use add() correctly? 
* What is the best way to add a collection?

## Common Pitfalls/Answers to "in the wild" problems

* Why are MSAs adding duplicate data to manual pivot tables?
* Why is upsert not working with MSAs? 
* What is the difference between adding, updating, and upserting?




