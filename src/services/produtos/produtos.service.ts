import { Injectable } from '@nestjs/common';
import { Produto } from 'src/models/produto.model';

/**
 * Serviço de produtos
 */
@Injectable()
export class ProdutosService {
    /**
     * Retorna a lista dos produtos
     */
    async obterTodos(): Promise<Produto[]> {
        const produtos = await Produto.findAll({});
        return produtos;
    }

    /**
     * Recupera o produto pela PK
     * @param id id do produto
     */
    async obterPorPk(id: number): Promise<Produto> {
        const produto = await Produto.findByPk(id);
        if(produto) {
            return produto;
        } else {
            return null;
        }
    }

    /**
     * Novo Produto 
     * @param produto produto para cadastrar
     */
    async criar(produto: Produto): Promise<Produto> {
        return await Produto.create(produto);
    }

    /**
     * Atualizar produto
     * @param produto produto para atualizar
     */
    async atualizar(produto: Produto){
        await Produto.update(produto, {
            where: { id: produto.id }
        });
    }

    /**
     * Excluir um produto
     * @param produto produto para excluir
     */
    async deletar(produto: Produto) {
        await Produto.destroy({
            where: { id: produto.id }
        });
    }
}
