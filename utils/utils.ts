import { HttpService } from '@nestjs/axios';
import { InternalServerErrorException } from '@nestjs/common';
// import { createAuthorizationHeader } from 'apps/bpp/src/utils/authBuilder';
import { Response } from 'express';
import { lastValueFrom } from 'rxjs';

const requestForwarder = async (
  url: string,
  reqData: any,
  httpService: HttpService,
) => {
  try {
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        random_header: 'hey there',
      },
      withCredentials: true,
      mode: 'cors',
    };
    console.log('calling request forwarder');
    return await lastValueFrom(httpService.post(url, reqData, requestOptions));
  } catch (err) {
    console.log('error in request forwarder: ', err);
    return new InternalServerErrorException(err);
  }
};

const sendAcknowledgement = (res: Response, ack: string) => {
  res.status(200).json({
    message: {
      ack: {
        status: 'ACK',
      },
    },
  });
};

export { requestForwarder, sendAcknowledgement };
