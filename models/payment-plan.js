const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class PaymentPlan extends Model {}

  PaymentPlan.init(
    {
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      link: {
          type: DataTypes.STRING,
          allowNull: false
      },
      image: {
        type: DataTypes.STRING,
      },
      sellerID: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      totalAmount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
    },
    {
      // Other model options go here
      sequelize,
      tableName: "payment_plans",
    }
  );

  return PaymentPlan;
};