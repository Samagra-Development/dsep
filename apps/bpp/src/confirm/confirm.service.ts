import { HttpService } from '@nestjs/axios';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';
import { createAuthorizationHeader } from '../utils/authBuilder';
import { ConfirmDTO } from './dto/confirm.dto';

@Injectable()
export class ConfirmService {
  constructor(private readonly httpService: HttpService) {}
  async handleConfirm(confirmDto: ConfirmDTO) {
    console.log('confirmDto------------confirm service--:', confirmDto);
    // TODO: validate the confirm request
    if (!confirmDto.context.bap_uri)
      throw new BadRequestException(
        'Invalid context: No BAP_URI not found in context',
      );

    // forward the request to provider
    // const confirmResponse = await lastValueFrom(
    //   this.httpService
    //     .post(process.env.MOCK_API_URI + '/confirm', confirmDto)
    //     .pipe(map((item) => item.data)),
    // );
    const confirmResponse = {
      context: {
        domain: 'onest:learning-experiences',
        action: 'confirm',
        version: '1.1.0',
        bap_uri: process.env.bap_uri,
        bap_id: process.env.bap_id,
        bpp_uri: confirmDto.context.bpp_uri,
        bpp_id: confirmDto.context.bpp_id,
        location: {
          city: {
            name: 'Bangalore',
            code: 'std:080',
          },
          country: {
            name: 'India',
            code: 'IND',
          },
        },

        transaction_id: 'a9aaecca-10b7-4d19-b640-b047a7c62196',
        message_id: '4dc0f577-89f7-4fdb-b7e6-8e08767473f0',
        ttl: 'PT10M',
        timestamp: '2023-02-15T15:18:33.777Z',
      },
      message: {
        order: {
          id: 'd4975df5',
          provider: {
            id: 'INFOSYS',
            descriptor: {
              name: 'Infosys Springboard',
              short_desc: 'Infosys Springboard Digital literacy program',
              images: [
                {
                  url: 'https://infyspringboard.onwingspan.com/web/assets/images/infosysheadstart/app_logos/landing-new.png',
                  size_type: 'sm',
                },
              ],
            },
          },
          items: [
            {
              id: 'd4975df5-b18c-4772-80ad-368669856d52',
              quantity: {
                maximum: 1,
              },
              descriptor: {
                name: 'Everyday Conversational English',
                long_desc: 'Everyday Conversational English',
                images: [
                  {
                    url: 'https://infyspringboard.onwingspan.com/web/assets/images/infosysheadstart/everyday-conversational-english.png',
                  },
                ],
              },
              price: {
                currency: 'INR',
                value: '0',
              },
              category_ids: ['LANGUAGE-COURSES'],
              rating: '4.5',
              tags: [
                {
                  descriptor: {
                    code: 'course-info',
                    name: 'courseInfo',
                  },
                  list: [
                    {
                      descriptor: {
                        code: 'course-instructor',
                        name: 'Course Instructor',
                      },
                      value: 'Prof. Shipra Vaidya',
                    },
                    {
                      descriptor: {
                        code: 'course-provider',
                        name: 'Course Provider',
                      },
                      value: 'Infosys Springboard',
                    },
                    {
                      descriptor: {
                        code: 'course-link',
                        name: 'Course Link',
                      },
                      value:
                        'https://infyspringboard.onwingspan.com/web/courses/infosysheadstart/everyday-conversational-english/',
                    },
                  ],
                  display: true,
                },
                {
                  descriptor: {
                    code: 'course-highlights',
                    name: 'Course Highlights',
                  },
                  list: [
                    {
                      descriptor: {
                        code: 'highlight',
                        name: 'highlight-1',
                      },
                      value:
                        'Focusing on clear pronunciation and reducing any strong accents that may impede communication.',
                    },
                    {
                      descriptor: {
                        code: 'highlight',
                        name: 'highlight-2',
                      },
                      value:
                        'Expanding everyday vocabulary to facilitate common conversations.',
                    },
                  ],
                  display: true,
                },
                {
                  descriptor: {
                    code: 'course-prerequisites',
                    name: 'Course Prerequisites',
                  },
                  list: [
                    {
                      descriptor: {
                        code: 'prerequisite',
                        name: 'prerequisite-1',
                      },
                      value: 'Should have a basic understanding of English',
                    },
                    {
                      descriptor: {
                        code: 'prerequisite',
                        name: 'prerequisite-2',
                      },
                      value:
                        'Access to a computer or internet to access the course online',
                    },
                  ],
                  display: true,
                },
              ],
              rateable: true,
            },
            {
              id: 'c9461edd-628d-46f3-820e-bab42b57d143',
              parent_item_id: 'd4975df5-b18c-4772-80ad-368669856d52',
              descriptor: {
                name: 'Everyday Conversational English - Chapter 1',
                long_desc: 'Everyday Conversational English - Chapter 1',
                images: [
                  {
                    url: 'https://infyspringboard.onwingspan.com/web/assets/images/infosysheadstart/everyday-conversational-english-ch1.png',
                  },
                ],
                media: {
                  url: 'https://infyspringboard.onwingspan.com/web/courses/infosysheadstart/everyday-conversational-english-ch1/',
                },
              },
            },
            {
              id: '77223dc6-f6e4-48dd-bf0e-1e43841e651c',
              parent_item_id: 'd4975df5-b18c-4772-80ad-368669856d52',
              descriptor: {
                name: 'Everyday Conversational English - Chapter 2',
                long_desc: 'Everyday Conversational English - Chapter 2',
                images: [
                  {
                    url: 'https://infyspringboard.onwingspan.com/web/assets/images/infosysheadstart/everyday-conversational-english-ch2.png',
                  },
                ],
                media: {
                  url: 'https://infyspringboard.onwingspan.com/web/courses/infosysheadstart/everyday-conversational-english-ch2/',
                },
              },
            },
            {
              id: 'eae312ed-5a2a-4b95-bed8-407a832b11b8',
              parent_item_id: 'd4975df5-b18c-4772-80ad-368669856d52',
              descriptor: {
                name: 'Everyday Conversational English - Chapter 3',
                long_desc: 'Everyday Conversational English - Chapter 3',
                images: [
                  {
                    url: 'https://infyspringboard.onwingspan.com/web/assets/images/infosysheadstart/everyday-conversational-english-ch3.png',
                  },
                ],
                media: {
                  url: 'https://infyspringboard.onwingspan.com/web/courses/infosysheadstart/everyday-conversational-english-ch3/',
                },
              },
            },
          ],
          billing: {
            name: 'Namma Yatri',
            organization: {
              address: 'Girija Building, Number 817, Ganapathi Temple Rd',
              city: 'Bengaluru',
              state: 'Karnataka',
              contact: {
                email: 'example@email.in',
                phone: '+91 1234567890',
              },
            },
          },
          quote: {
            price: {
              currency: 'INR',
              value: '0',
            },
          },
          fulfillments: [
            {
              customer: {
                person: {
                  name: 'Jhon Doe',
                },
                contact: {
                  phone: '+91 1234567890',
                  email: 'johndoe@gmail.com',
                },
              },
              agent: {
                person: {
                  id: 'eng-01-prof',
                  name: 'Prof. Shipra Vaidya',
                },
              },
              state: {
                descriptor: {
                  code: 'order-confirmed',
                  name: 'Order Confirmed',
                },
              },
            },
          ],
          payments: [
            {
              params: {
                amount: '0',
                currency: 'INR',
              },
              status: 'PAID',
            },
          ],
          type: 'DEFAULT',
        },
      },
    };

    // forwarding the response back to BAP /on-confirm
    confirmResponse['context']['action'] = 'on_confirm';
    try {
      const authHeader = await createAuthorizationHeader(confirmResponse).then(
        (res) => {
          console.log('bpp confirm service--189', res);
          return res;
        },
      );
      console.log(
        'auth header----------bpp confirm service--193-: ',
        authHeader,
      );

      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          authorization: authHeader,
        },
        withCredentials: true,
        mode: 'cors',
      };
      console.log('calling request forwarder --------bpp confirm service--203');
      console.log(
        'confirm repsonse before forwarding to bap -------bpp confirm service--205: ',
        confirmResponse,
      );

      confirmResponse['context']['action'] = 'on_confirm';

      return await lastValueFrom(
        this.httpService.post(
          confirmResponse.context.bap_uri + 'on_confirm',
          confirmResponse,
          requestOptions,
        ),
      );
    } catch (err) {
      console.log(
        'error in request forwarder------bpp confirm service--219: ',
        err,
      );
      return new InternalServerErrorException(err);
    }
  }
}

