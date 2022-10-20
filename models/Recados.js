
module.exports = (sequelize, DataType) => {
    const Recado = sequelize.define(
        "Recado",{
            id: {
                type: DataType.INTEGER,
                allowNull:false,
                autoIncrement: true,
                primaryKey:true
            },
        
            nome: { 
                type: DataType.STRING,
                allowNull: false
            },
        
        
            descricao: { 
                type: DataType.TEXT,
                allowNull: false
            },
        },{
            tableName:"recados",
            timestamps: false
        }
    );
    return Recado;
}