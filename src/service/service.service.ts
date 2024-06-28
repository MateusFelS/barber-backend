import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Service } from "@prisma/client";

@Injectable()
export class ServiceService{
    constructor(private prisma: PrismaService){}

    async getAllServices(): Promise<Service[]>{
        return this.prisma.service.findMany();
    }

    async getServiceById(id: number): Promise<Service>{
        return this.prisma.service.findUnique({
            where: {
                id
            }
        });
    }

    async createService(data: Service): Promise<Service>{
        return this.prisma.service.create({
            data
        });
    }
}
