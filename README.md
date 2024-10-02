# Many-to-One example with Express + Sequelize + MySQL

It's just that: Many-to-One example with Express + Sequelize + MySQL

## Getting Started

These instructions will give you a copy of the project up and running on
your local machine for development and testing purposes.

### Prerequisites

You need a working environment with:
* [Git](https://git-scm.com) - You can install it from https://git-scm.com/downloads.
* [MySQL](https://www.mysql.com) - You can install it from https://www.mysql.com/downloads/.
* [Node.js](https://nodejs.org) - Install node.js from https://nodejs.org/es/download/. It's advisable to install the LTS version.

## General Installation instructions

The best option to start with this project is cloning it in your PC:

```
git clone https://github.com/tcrurav/Many2OneExpress.git
```

You need a node.js working environment. The LTS is recommended: https://nodejs.org/es/

Once you have cloned the project install all dependencies.

```
cd Many2OneExpress/backend
npm install
```

1. You need a Bicycles/backend/db.config.js file with the data for the connection to your MySQL Server:

```
module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "your password",
  DB: "db_bicycles",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}
```

2. You need a mysql server working.

3. Create the mysql database, that in our case is "db_bicycles".

Finally to start enjoying this project.

```
cd Many2OneExpress/backend
node index.js
```

You can now test the API with the following end-points available here:
https://documenter.getpostman.com/view/3446841/2sAXxJiab6

Enjoy!!!

## Built With

* [Visual Studio Code](https://code.visualstudio.com/) - The Editor used in this project
* [Node.js](https://nodejs.org/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [sequelize](https://sequelize.org/) - Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.
* [express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
* [MySQL Workbench](https://www.mysql.com/products/workbench/) - MySQL Workbench is a unified visual tool for database architects, developers, and DBAs.

## Acknowledgments

* https://gist.github.com/PurpleBooth/109311bb0361f32d87a2. A very complete template for README.md files.