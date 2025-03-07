import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrdenService } from './orden.service';
import { AprovedOrderDTO, CreateOrderDTO } from './dto/orden.dto';

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

  @Post('aproved')
  async aprovedOrder(@Body() aprovedOrderDTO: AprovedOrderDTO) {
    return this.ordenService.aprovedOrden(aprovedOrderDTO);
  }
}
