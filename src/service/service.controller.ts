import { Controller, Get, Param } from "@nestjs/common";
import { ServiceService } from "./service.service";


@Controller('services')
export class ServiceController{
    constructor(private readonly serviceService: ServiceService){}

    @Get()
    async getAllServices(){
        return this.serviceService.getAllServices();
    }

    @Get(':id')
    async getServiceById(@Param('id') id: string){
        return this.serviceService.getServiceById(Number(id));
    }
}