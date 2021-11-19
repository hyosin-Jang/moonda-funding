const Sequelize = require('sequelize');

module.exports = class Class extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            nickname: {
                type: Sequelize.STRING(45),
                allowNull: false
            },
            comment:{
                type: Sequelize.STRING(100),
                allowNull: false
            },
            phoneNum:{
                type: Sequelize.STRING(12),
                allowNull: false
            },
            class_id:{
                type: Sequelize.INTEGER,
                allowNull: false
            },
            date:{
                type: Sequelize.DATE,
                allowNull: true,
                defaultValue: Sequelize.NOW
            }
        }, {
            sequelize,
            timestamps: false,
            underscored: false, // camel case
            modelName: 'Comment',
            tableName:'comments',
            paranoid: false,
            charset: 'utf8',
            collate:'utf8_general_ci'
        });
    }
    // associate() - 다른 모델과의 관계
    static associate(db){
        db.Comment.belongsTo(db.Class, {foreignKey: 'class_id', targetKey : 'id'})
    }
}