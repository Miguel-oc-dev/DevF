// models/jobpost.js
module.exports = (sequelize, DataTypes) => {
  const JobPost = sequelize.define('JobPost', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    hours_required: DataTypes.INTEGER,
  });

  JobPost.associate = (models) => {
    JobPost.belongsTo(models.User, { as: 'company', foreignKey: 'company_id' });
    JobPost.belongsToMany(models.Skill, { through: 'JobPostSkill' });
  };

  return JobPost;
};
