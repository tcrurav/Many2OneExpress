const db = require("../models");
const Bicycle = db.bicycles;
const Shop = db.shops;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.brand) {
    res.status(400).send({
      message: "Brand can not be empty"
    })
  }

  const bicycle = {
    brand: req.body.brand,
    model: req.body.model,
    shopId: req.body.shopId
  }

  Bicycle.create(bicycle).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Error creating Bicycle"
    })
  })
}

exports.findAll = (req, res) => {
  Bicycle.findAll({ include: Shop }).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Error retrieving bicycles."
    })
  })
}

exports.findOne = (req, res) => {

}

exports.update = (req, res) => {
  const id = req.params.id;

  const bicycle = {
    brand: req.body.brand,
    model: req.body.model,
    shopId: req.body.shopId
  }

  Bicycle.update(bicycle, {
    where: { id: id }
  }).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Error updating Bicycle"
    })
  })

}

exports.delete = (req, res) => {
  const id = req.params.id;

  Bicycle.destroy({ where: { id: id } }).then(result => {
    res.status(200).send({
      message: "row deleted"
    })
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Error deleting the bicycle."
    })
  })

}