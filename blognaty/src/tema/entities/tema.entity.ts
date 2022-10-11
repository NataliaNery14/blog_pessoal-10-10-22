import { IsNotEmpty } from "class-validator";
import { Postagem } from "src/postagem/entidade/postagem.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity({name:"tb_temas"})
export class Tema {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({length: 1000, nullable :false})
    texto: string
    

    @UpdateDateColumn()
    data: Date;

    @OneToMany(() => Postagem )

}
