module.exports = (sequelize, dataTypes) => {
    const Verdura = sequelize.define ("Verdura", {
        IDverdura: {
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Nombre: {
            type: dataTypes.STRING
        },
        Preciokilo: {
            type: dataTypes.STRING
        }
    },
        { tableName: "verduras", timestamps: false}
    )
}

return Verdura