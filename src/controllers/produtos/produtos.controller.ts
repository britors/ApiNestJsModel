import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { Response } from 'express'
import { ProdutosService } from 'src/services/produtos/produtos.service';
import { Produto } from '../../models/produto.model'

/**
 * Controller de produtos
 */
@Controller('produtos')
export class ProdutosController {

    constructor(private produtosService: ProdutosService) { }

    @Get()
    async obterTodos(): Promise<Produto[]> {
        return await this.produtosService.obterTodos();
    }
    @Get(':id')
    async obterPorPk(@Param('id') id: number): Promise<Produto> {
        return await this.obterPorPk(id);
    }

    @Post()
    async novo(@Body() produto: Produto, @Res() res: Response) {
        await this.produtosService.criar(produto);
        res.status(200).send('Produto criado com sucesso');
    }

    @Put()
    async atualiza(@Body() produto: Produto, @Res() res: Response) {
        await this.produtosService.atualizar(produto)
        res.status(200).send('Produto Atualizado com sucesso');
    }

    @Delete()
    async exluir(@Body() produto: Produto, @Res() res: Response) {
        await this.produtosService.deletar(produto)
        res.status(200).send('Produto Excluido com sucesso');
    }
}
