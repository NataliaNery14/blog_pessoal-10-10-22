import {Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe} from "@nestjs/common";
import { Body, Delete, Post, Put } from "@nestjs/common/decorators";
import { Postagem } from "../entidade/postagem.entity";
import { PostagemServices } from "../services/postagem.servicees";

@Controller('/postagens')
export class PostagemController {
 constructor (private readonly postagemService: PostagemServices){}

 @Get()
 @HttpCode(HttpStatus.OK)
 findAll(): Promise<Postagem[]> { 
    return this.postagemService.FindAll()
 }

 @Get('/:id')
 @HttpCode(HttpStatus.OK)
 findById(@Param('id',ParseIntPipe)id: number): Promise<Postagem> {
    return this.postagemService.findById(id);
 }

 @Get('/titulo/:titulo')
 @HttpCode(HttpStatus.OK)
 findByTitulo(
    @Param('titulo')
    titulo:string
 ): Promise<Postagem[]> {
    return this.postagemService.findByTitulo(titulo);
 }

 @Post()
 @HttpCode(HttpStatus.CREATED)
 create (@Body()Postagem: Postagem): Promise<Postagem> {
    return this.postagemService.create(Postagem);
 }

 @Put()
 @HttpCode(HttpStatus.OK)
 update (
    @Body()
    postagem : Postagem
 ): Promise<Postagem> {
    return this.postagemService.update(postagem);
 }

 @Delete('/:id')
 @HttpCode(HttpStatus.NO_CONTENT)
 delete (
    @Param('id', ParseIntPipe)
    id: number
 ) {
    return this.postagemService.delete(id);
 }
}