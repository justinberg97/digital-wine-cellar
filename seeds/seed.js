const sequelize = require('../config/connection');
const { User, Bottle } = require('../models');

const userData = require('./userData.json');
const bottleData = require('.bottleData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const bottle of bottleData) {
    await Bottle.create({
      ...bottle,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();