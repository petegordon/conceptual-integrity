## Suit Up and generate Sqlite User Interface Toolkit.
![](keep-call-and-suit-up.png)          <a href="https://www.youtube.com/watch?v=x1gZBfsHqAk" /><img src="https://img.youtube.com/vi/x1gZBfsHqAk/0.jpg" width="335"></a>

## What you need
You need a SQLite CREATE sql script or an existing SQLite database from which you would like to create JavaScript Object sweetness.

[sqlite3](https://www.npmjs.com/package/sqlite3) for SQLite database connection to read metadata
[htmling](https://www.npmjs.com/package/htmling) Template Engine using Polymer syntax was used to create the JavaScript file templates.
[deasync](https://www.npmjs.com/package/deasync) for deasync calls that make the API easier; but you can use async by just passing a callback parameter.

		npm install -g petegordon/suit-up

## How to use?
  Start with a create tables SQL script or an existing SQLite3 database. Run one of these commands.

#### SQL create script
		$ suit-up my.sql

#### SQLite database
		$ suit-up -db my.db

## What do you get?
  You will get a Javascript Object File and a CRUD (Create, Read Update, Delete) UI for each table.  Each object will use underscore (_) to create capital letters for Object name, Function (method) names, and variables in CamelCase/camelCase format.  Each object will also have related prototype functions and static functions to get[MyObject]s, and queryByPrimaryKey, queryByForeignKey.

Here's an example create sql script to start with...

```sql
CREATE TABLE my_object(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  is_something TEXT
);
CREATE TABLE object_desire(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  object_id INTEGER NOT NULL,
  desire_id INTEGER NOT NULL,
  FOREIGN KEY(object_id) REFERENCES my_object(id),
  FOREIGN KEY(desire_id) REFERENCES my_desire(id)
);
CREATE TABLE my_desire(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  wants_something TEXT
);
```
See the complete [generated code](example/desire/)

## Why I did this?

* I love Fred Brooks idea of **conceptual integrity** in *The Mythical Man Month*.  Whether you call it **conceptual integrity**, **ubiquitious language** in domain driven design, or a **data dictionary**, I think it is a sorely missed, major component to developing software. I wanted to bring that conceptual integrity from SQL to Javascript.
* I had used code generation tools previously ([MyGeneration](http://mygeneration.sourceforge.net/) and [CodeSmith](http://www.codesmithtools.com/product/generator)) to generate the object/classes from a RDBMS.  And, I wanted one for Javascript.
* Planning on doing more with Javscript on the server (node.js) in addition to the client browsers.
* [Software takes TACT](https://docs.google.com/presentation/d/1OjGUMsmfERoSfa1BMWRQks1P-HefGxaaha_9ASyFhp4/edit?usp=sharing); and [Communication](https://www.youtube.com/watch?v=nwDAXIfgZ20) is a huge part of TACT.
* Hoping others also find it useful.
