import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosController } from './controllers/produtos/produtos.controller';
import { Produto } from './models/produto.model';
import { ProdutosService } from './services/produtos/produtos.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.server_banco_dados,
      port: 3306,
      username: process.env.usuario_banco_dados,
      password: process.env.usuario_senha_banco,
      database: 'curso_nestjs',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Produto])
  ],
  controllers: [AppController, ProdutosController],
  providers: [AppService, ProdutosService],
})
export class AppModule {}
