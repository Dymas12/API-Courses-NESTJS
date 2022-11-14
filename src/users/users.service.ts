import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {User} from './entities/user.entity';

@Injectable()
export class UsersService {
    private users:User[]=[{
        id:1,
        name:"Ruan Gonçalves Nunes",
        email:"ruannunes1999@gmail.com",
        password:"12345567"
    }]
findAll(){
    return this.users;
}
findOne(id:string){
    const user = this.users.find((user:User)=> user.id ===Number(id));

    if(!user){
        throw new HttpException(`O userID:${id} não foi encontrado`, HttpStatus.NO_CONTENT)
    }else{
        return user;
    }
}

create(createUserDto:any){
     this.users.push(createUserDto);
     return createUserDto
    }
update(id:string, updateUserDto:any){
const indexUsers = this.users.findIndex(user => user.id === Number(id));
this.users[indexUsers] = updateUserDto
}
remove(id:string){
    const indexUsers = this.users.findIndex(user => user.id ===Number(id));

    if(indexUsers >= 0){
        this.users.splice(indexUsers);
        return `O userId ${id} foi deletado`
    }else{
        return `O userId:${id} não foi encontrado`
    }

}
}
