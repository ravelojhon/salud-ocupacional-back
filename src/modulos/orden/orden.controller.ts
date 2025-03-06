import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrdenService } from './orden.service';
import { CreateOrderDTO } from './dto/orden.dto';

@ApiTags('orden')
@Controller('orden')
export class OrderController {
  constructor(private readonly ordenService: OrdenService) {}

  @Get()
  findAll() {
    return this.ordenService.getOrdenes();
  }

  @Post()
  async createOrder(@Body() createOrderDTO: CreateOrderDTO) {
    return this.ordenService.CreateOrden(createOrderDTO);
  }
}
