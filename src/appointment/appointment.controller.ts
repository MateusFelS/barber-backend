import { Controller, Get, Post, Body, Param, Delete, Put } from "@nestjs/common";
import { AppointmentService } from "./appointment.service";
import { Appointment } from "@prisma/client";

@Controller('appointments')
export class AppointmentController{
    constructor(private readonly appointmentService: AppointmentService){}

    @Get()
    async getAllAppointments(){
        return this.appointmentService.getAllAppointments();
    }

    @Post()
    async createAppointment(@Body() data: Appointment){
        return this.appointmentService.createAppointment(data);
    }

    @Get(':id')
    async getAppointmentsById(@Param('id') id: string){
        return this.appointmentService.getAppointmentById(Number(id));
    }
    
    @Put(':id')
    async updateAppointment(@Param('id') id: string, @Body() data: Appointment){
        return this.appointmentService.updateAppointment(Number(id), data);
    }

    @Delete(':id')
    async deleteAppointment(@Param('id') id: string){
        return this.appointmentService.deleteAppointment(Number(id));
    }
}