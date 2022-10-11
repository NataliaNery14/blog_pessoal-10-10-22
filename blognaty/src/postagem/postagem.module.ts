import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TemaModule } from "src/tema/entities/tema.module";
import { TemaService } from "src/tema/entities/tema.service.ts/tema.service";
import { PostagemController } from "./controllers/postagem.controllers";
import { Postagem } from "./entidade/postagem.entity";
import { PostagemServices } from "./services/postagem.servicees";

@Module({
    imports: [TypeOrmModule.forFeature([Postagem]),TemaModule],
    providers:[PostagemServices, TemaService],
    controllers:[PostagemController],
    exports: [TypeOrmModule]
})
export class PostagemModule {}
