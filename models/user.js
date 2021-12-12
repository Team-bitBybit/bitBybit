const { Model, DataTypes } = require("sequelize");
const bcrypt = require('bcrypt')

module.exports = (sequelize) => {
  class User extends Model {}

  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      monoId: {
        type: DataTypes.STRING,
        defaultValue:''
      },
      monoCode: {
        type: DataTypes.STRING,
        defaultValue:''
      },
      monoStatus: {
        type: DataTypes.BOOLEAN,
        defaultValue:false
      },
      monoReauthToken: {
        type: DataTypes.STRING,
        defaultValue:''
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      // Other model options go here
      sequelize,
      modelName: "User",
      tableName: "users",
    }
  );

  User.beforeCreate(async (user, options) => {
    try {
      const hashed = await bcrypt.hash(user.password, 10)
      user.password = hashed
    } catch (err) {
      throw err
    }
  })

  User.prototype.checkPassword = async function(password) {
    return await bcrypt.compare(password, this.password)
  }

  return User;
};