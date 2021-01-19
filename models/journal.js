module.exports = (sequelize, DataTypes) => {
    const Journal = sequelize.define('journal', {
        title: {
            type: DataTypes.STRING,
            allownNull: false
        },
        date: {
            type: DataTypes.STRING,
            allownNull: false
        },
        entry: { 
            type: DataTypes.STRING,
            allownNull: false
        },
        owner: {
            type: DataTypes.INTEGER
        }
    })
    return Journal;
};