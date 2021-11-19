const Sequelize = require('sequelize');

module.exports = class Class extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            photo: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            t_class_id:{
                type: Sequelize.STRING(12),
                allowNull: false
            },

        }, {
            sequelize,
            timestamps: false,
            underscored: false, // camel case
            modelName: 'Thumbnail',
            tableName:'thumbnails',
            paranoid: false,
            charset: 'utf8',
            collate:'utf8_general_ci'
        });
    }
    // associate() - 다른 모델과의 관계
    static associate(db){
        db.Thumbnail.belongsTo(db.Class, {foreignKey: 't_class_id', sourceKey : 'id'})
    }
}