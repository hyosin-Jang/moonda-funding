const Sequelize = require('sequelize');

module.exports = class Class extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            id: {

            }
        })
    }
}