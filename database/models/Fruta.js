module.exports = (sequelize, dataTypes) => {
    const Fruta = sequelize.define ("Fruta", {
        IDfruta: {
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
        { tableName: "frutas", timestamps: false}
    )
}

return Fruta