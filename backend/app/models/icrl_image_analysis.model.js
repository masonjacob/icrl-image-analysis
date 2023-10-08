module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("icrl_image_analysis", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Tutorial;
};
