import { Table, Model, Column, DataType } from "sequelize-typescript";

/**
 * Classe Produto
 */
@Table
export class Produto extends Model<Produto> {
    
    @Column({
        type: DataType.STRING(60),
        allowNull: false
    })
    cod: string;

    @Column({
        type: DataType.STRING(60),
        allowNull:false
    })
    nome: string;

    @Column({
        type: DataType.DECIMAL(10,2),
        allowNull: false
    })
    preco: number;

}
