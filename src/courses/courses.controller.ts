import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  @Post('create-course')
  async getDocument(@Body() requestBody: any) {
    const { docNo } = requestBody;
    console.log(requestBody.json);
    return await this.coursesService.getDocument(docNo);
  }
}
