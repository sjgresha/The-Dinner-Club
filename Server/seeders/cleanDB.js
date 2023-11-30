const models = require('../models');
const db = require('../config/connections');

module.exports = async (modelName, collectionName) => {
  try {
    if (models[modelName]) {
      console.log(models);
      await models[modelName].deleteMany();
    } else {
      console.error(`Model ${modelName} not found.`);
    }
  } catch (err) {
    throw err;
  }
}