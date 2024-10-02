module.exports = (sequelize, Sequelize) => {
  const Shop = sequelize.define("shop", {
    name: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    }
  })

  return Shop;
}