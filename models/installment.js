const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Installment extends Model {}

  Installment.init(
    {
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      paymentPlan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      nextInstallment: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      dueDate: {
        type: DataTypes.TIME,
        allowNull: false
      },
      buyerID: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      sellerID: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      totalAmount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      installmentCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 0,
      },
    },
    {
      // Other model options go here
      sequelize,
      tableName: "installments",
    }
  );

  return Installment;
};