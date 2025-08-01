// models/user.js
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    bio: DataTypes.TEXT,
    role: DataTypes.ENUM('freelancer', 'empresa'),
    rate_per_hour: DataTypes.DECIMAL,
    is_available: DataTypes.BOOLEAN,
  });

  User.associate = (models) => {
    User.belongsToMany(models.Skill, { through: 'UserSkill' });
  };

  return User;
};
