const Sequelize = require('sequelize');

module.exports = class Class extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            className: {
                type: Sequelize.STRING(45),
                allowNull: false
            },
            subtitle:{
                type: Sequelize.STRING(100)
            },
            goalCount:{
                type: Sequelize.INTEGER,
                allowNull: false
            },
            cheerCount:{
                type: Sequelize.INTEGER,
                allowNull: false
            },
            desc:{
                type: Sequelize.STRING(100)
            },
            isAchieve: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            manager: {
                type: Sequelize.STRING(10)
            },
            isActive:{
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 1
            },
        }, {
            sequelize,
            timestamps: false,
            underscored: false, // camel case
            modelName: 'Class',
            tableName:'classes',
            paranoid: false,
            charset: 'utf8',
            collate:'utf8_general_ci'
        });
    }
    // associate() - 다른 모델과의 관계
    static associate(db){
        db.Class.hasMany(db.Thumbnail, {foreignKey: 't_class_id', sourceKey : 'id'}),
        db.Class.hasMany(db.Comment, {foreignKey: 'class_id', sourceKey : 'id'})
    }
}