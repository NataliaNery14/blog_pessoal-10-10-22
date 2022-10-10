import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Postagem } from "../entidade/postagem.entity";

@Injectable()
export class PostagemServices {
    constructor(
        @InjectRepository(Postagem)
        private PostegemRepository: Repository<Postagem>
    ) {}

    async FindAll (): Promise<Postagem[]>{
    return await this.PostegemRepository.find()
    }
}