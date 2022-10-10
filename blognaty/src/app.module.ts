import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagem/entidade/postagem.entity';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username:'root',
    password:'root',
    database:'db_blognaty',
    entities: [Postagem],
    synchronize: true
  })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
