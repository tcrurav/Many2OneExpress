const express = require("express");

const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8101"
}

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true}));

const db =  require("./models");

// db.sequelize.sync();

db.sequelize.sync({ force: true}).then(() => {
  console.log("Drop and re-sync db");
})

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bycicles application"})
})

require("./routes/bicycle.routes.js")(app);
require("./routes/shop.routes.js")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})