import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { requestForwarder } from 'utils/utils';
import { SelectDTO } from './dto/select.dto';
// import { CreateSelectDto } from './dto/create-select.dto';
// import { UpdateSelectDto } from './dto/update-select.dto';

@Injectable()
export class SelectService {
  constructor(private readonly httpService: HttpService) {}

  async handleSelect(selectDto: SelectDTO) {
    // TODO: validate the select request
    // TODO: map out the provider's URL from the selectDto provider.descriptor.name

    const providerURLMap = {};

    const selectResponse = await requestForwarder(
      providerURLMap[selectDto.message.order.provider.descriptor.name],
      selectDto,
      this.httpService,
    );

    // forward the response back to BAP /on-select
    return await requestForwarder(
      selectDto.context.bap_uri + '/on-select',
      selectResponse,
      this.httpService,
    );
  }

  // async handleSelect(selectDto: SelectDTO) {
  //   // const { context, message } = selectDto;
  //   const requestOptions = {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: selectDto,
  //     redirect: 'follow',
  //   };
  //   try {
  //     const responseData = await lastValueFrom(
  //       this.httpService
  //         .post('http://localhost:5003/', selectDto, requestOptions)
  //         .pipe(
  //           map((response) => {
  //             return response.data;
  //           }),
  //         ),
  //     );

  //     return responseData;
  //   } catch (e) {
  //     console.log(e);
  //     throw new InternalServerErrorException();
  //   }
  // }
}
