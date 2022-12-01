const User = require('./User');
const Bottle = require('./Bottle');

User.hasMany(Bottle, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Bottle.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Bottle };