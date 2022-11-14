import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseService {
    private courses:Course[] = [
        {
            id:1,
            name:'Fundamentos do frameword',
            description:"Fundamentos do curso 2",
            tags:["node.js","nest.js","javascript"]
        },
        {
            id:2,
            name:'Fundamentos 2',
            description:'vamos iniciar o curso 2',
            tags:["react2 , nest2js"]
        }
    ];

    findAll(){
        return this.courses;
    }
    findOne(id:string){
      const course =  this.courses.find((course:Course)=> course.id === Number(id));
      if(!course){
         throw new HttpException(`O couse id ${id} not found` ,HttpStatus.NOT_FOUND)
      }else{
        return course
      }
    }
    create(createCourseDto:any){
         this.courses.push(createCourseDto);
         return createCourseDto
    }
    update(id:string , updateCourseDto:any){
        const indexCourses = this.courses.findIndex(course => course.id === Number(id));
        this.courses[indexCourses] = updateCourseDto;
    }

    remove(id:string){
        const indexCourses = this.courses.findIndex(course => course.id === Number(id));

        if(indexCourses >= 0){
            this.courses.splice(indexCourses);
        }else{
            return `O id ${id} não foi encontrado`
        }
    }
}
