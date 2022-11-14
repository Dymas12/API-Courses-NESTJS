import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(){
      return this.usersService.findAll()
  }
  @Get(':id')
  findOne(
      @Param('id') id : string ){
     return this.usersService.findOne(id);
  }
    @Post()
  create(@Body() body){
      return this.usersService.create(body);
  }
  @Patch(':id')
  update(@Param('id')id : string, @Body() body){
      return this.usersService.update(id , body);
  }
  @Delete(':id')
  delete(@Param('id') id : string, @Body() body){
      return this.usersService.remove(id)
  }
}

