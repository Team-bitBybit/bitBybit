const { Sequelize } = require("sequelize");
const { applyExtraSetup } = require("./extra-setup");

const pgURL =
  process.env.POSTGRESQL_URI || "postgres://user:pass@example.com:5432/dbname";
const sequelize = new Sequelize(pgURL);

const modelDefiners = [
  require("./user"),
  // Add more models here...
  // require('./models/item'),
];

// define all models according to their files.
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

// execute any extra setup after the models are defined, such as adding associations.
applyExtraSetup(sequelize);

async function testConnection(sequelize) {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync({ force: true });
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testConnection(sequelize);

module.exports = sequelize;
