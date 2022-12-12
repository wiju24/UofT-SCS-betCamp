const User = require('./User');

User.hasOne(Account, {
    PrimeryKey: 'id',
    onDelete: 'CASCADE',
})
module.exports = { User };