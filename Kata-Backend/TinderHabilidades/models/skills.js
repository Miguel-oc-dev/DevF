// models/skill.js
module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define('Skill', {
    name: DataTypes.STRING,
  });

  Skill.associate = (models) => {
    Skill.belongsToMany(models.User, { through: 'UserSkill' });
  };

  return Skill;
};
