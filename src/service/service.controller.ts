import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ServiceService } from "./service.service";
import { Service } from "@prisma/client";


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
    
    @Post()
    async createService(@Body() data: Service){
        return this.serviceService.createService(data);
    }
}
