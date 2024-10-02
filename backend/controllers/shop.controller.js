const db = require("../models");
const Shop = db.shops;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if(!req.body.name){
    res.status(400).send({
      message: "Name can not be empty"
    })
  }

  const shop = {
    name: req.body.name,
    address: req.body.address
  }

  Shop.create(shop).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Error creating Shop"
    })
  })
}

exports.findAll = (req, res) => {
  Shop.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Error retrieving shops."
    })
  })
}

exports.findOne = (req, res) => {
  
}

exports.update = (req, res) => {
  
}

exports.delete = (req, res) => {
  const id = req.params.id;
  
  Shop.destroy({ where: {id : id}}).then(result => {
    res.status(200).send({
      message: "row deleted"
    })
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Error deleting the shop."
    })
  })

}