import { HttpException, Injectable } from '@nestjs/common';
import { COURSES } from './courses.mock';
import axios, { AxiosRequestConfig } from 'axios';
import * as https from "https";

@Injectable()
export class CoursesService {
  courses = COURSES;

  async getDocument(docNo: string) {
    console.log('Add new sourse');
    try {
      const axiosConfig: {
        rejectUnauthorized: boolean;
        headers: { ThamDinhGiaHeader: string };
        httpsAgent: https.Agent;
      } = {
        rejectUnauthorized: false,
        headers: {
          ThamDinhGiaHeader:
            '8Orj5cUZp!=nSdTjNPf706oxYJUKFm93OoGgMcdQEclACXxsn0gNxjrNEbp71vBWSa1NAloJ?9Q0qtDNagT6Q0ZzLmIpaYv0ydC?oLue3yuXryZgU4Aptr0jn4tCkvV/XKR4ggS2XRT6S1!uYd3gtrGdCPlIv=ZGmjcdfASYyFk!6qVm3x4iG?uN8YWOMHDyS61Xqxx5eM4S6SF!=JSxX?q-owi3Nf/6Z8G0nx5VL0E1uEfHxWqtc4exx2683zW8',
        },
        httpsAgent: new https.Agent({ rejectUnauthorized: false }),
      };
      const response = await axios.post(
        'https://10.1.45.106/ApiService.aspx/GetDocument',
        { docNo: docNo },
        axiosConfig,
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
