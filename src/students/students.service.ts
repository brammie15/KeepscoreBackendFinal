import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { StandardResponse, StandardResponseMessage, StatusResponse } from 'src/response';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { HandlePostError } from 'src/ErrorHandler';

@Injectable()
export class StudentsService {
  constructor(private prisma : PrismaService) {}
  
  async create(createStudentDto: CreateStudentDto) {
    // const klas = await this.prisma.klas.findUnique({where: {id: createStudentDto.klasId}});
    // if(!klas) {
    //   return StandardResponseMessage(StatusResponse.ERROR, "Klas not found");
    // }else{
    //   const student = await this.prisma.student.create({data: createStudentDto});
    //   return StandardResponse(StatusResponse.SUCCESS, student); 
    // }
    try{
      const student = await this.prisma.student.create({data: createStudentDto});
      return StandardResponse(StatusResponse.SUCCESS, student);
    }catch(e : any){
      return HandlePostError(e);      
    }
  }

  async findAll() {
    return await this.prisma.student.findMany();
  }

  async findOne(id: number) {
    const student = await this.prisma.student.findUnique({where: {id : id}});
    if(!student) {
      return StandardResponseMessage(StatusResponse.ERROR, "Student not found");
    }else{
      return StandardResponse(StatusResponse.SUCCESS, student);
    }
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
