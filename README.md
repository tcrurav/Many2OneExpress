# Many-to-One example with Express + Sequelize + MySQL

It's just that: Many-to-One example with Express + Sequelize + MySQL

In the file models/index.js you can find the key concept of this example. In this example a ```Shop``` can have many ```Bicycles```, and a ```Bicycle``` can only be in a ```Shop```:

```
db.shops.hasMany(db.bicycles, { foreignKey: 'shopId' });
db.bicycles.belongsTo(db.shops, { foreignKey: 'shopId' });
```

It's also interesting to note that adding ````{ include: Shop }```` in line 29 in controllers/bicycle.controller.js shows the following result in the end-point GET http://localhost:8080/api/bicycles

```
[
    {
        "id": 1,
        "brand": "BH",
        "model": "Sky",
        "createdAt": "2024-10-02T00:01:21.000Z",
        "updatedAt": "2024-10-02T00:01:21.000Z",
        "shopId": 1,
        "shop": {
            "id": 1,
            "name": "Burbujita",
            "address": "c/ león y castillo, 3",
            "createdAt": "2024-10-02T00:01:17.000Z",
            "updatedAt": "2024-10-02T00:01:17.000Z"
        }
    }
]
```

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