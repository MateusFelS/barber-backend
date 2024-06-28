import { Module } from "@nestjs/common";
import { AppointmentController } from "./appointment.controller";
import { AppointmentService } from "./appointment.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers: [AppointmentController],
    providers: [AppointmentService],
    imports: [PrismaModule],
})
export class AppointmentModule{}