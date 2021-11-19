const Sequelize = require('sequelize');

const Class = require('./class');
const Comment = require('./comment');
const Thumbnail = require('./thumbnail');


const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db= {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;

db.Class = Class;
db.Comment = Comment;
db.Thumbnail = Thumbnail;

Class.init(sequelize);
Comment.init(sequelize);
Thumbnail.init(sequelize);

Class.associate(db);
Comment.associate(db);
Thumbnail.associate(db);

module.exports = db;