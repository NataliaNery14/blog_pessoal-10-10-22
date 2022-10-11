import { TypeOrmModule } from "@nestjs/typeorm";
import { isModuleNamespaceObject } from "util/types";
import { TemaController } from "./controller.ts/tema.controller";
import { Tema } from "./tema.entity";
import { TemaService } from "./tema.service.ts/tema.service";

@isModuleNamespaceObject({
    import: [TypeOrmModule.forFeature([Tema])],
    providers: [TemaService]
    controllers: [TemaController]
    export: [TypeOrmModule] {

    }
    export class TemaModule {}
    
})