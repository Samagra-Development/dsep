import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { requestForwarder } from 'utils/utils';
import { UpdateDTO } from './dto/update.dto';
import { createAuthorizationHeader } from '../utils/authBuilder';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class UpdateService {
  constructor(private readonly httpService: HttpService) {}
  async handleUpdate(updateDto: UpdateDTO) {
    console.log('updateDto:', updateDto);
    // TODO: validate request

    const updateResponse = {
      context: {
        domain: 'onest:learning-experiences',
        transaction_id: updateDto.context.transaction_id,
        message_id: updateDto.context.message_id,
        action: 'on_update',
        timestamp: '2022-12-15T05:23:03.443Z',
        version: '1.1.0',
        bap_uri: process.env.bap_uri,
        bap_id: process.env.bap_id,
        bpp_uri: updateDto.context.bpp_uri,
        bpp_id: updateDto.context.bpp_id,
        ttl: 'PT10M',
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
          ],
          billing: {
            name: 'Compass Marketplace',
            organization: {
              address: 'Girija Building, Number 817, Ganapathi Temple Rd',
              city: 'Bengaluru',
              state: 'Karnataka',
              contact: {
                email: 'nammayatri.support@juspay.in',
                phone: '+91 80 68501060',
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
                  creds: {
                    type: 'VerifiableCredential',
                    url: 'https://infyspringboard.onwingspan.com/web/courses/infosysheadstart/everyday-conversational-english/certificate',
                  },
                },
                contact: {
                  phone: '+91 1234567890',
                  email: 'jhondoe@gmail.com',
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
                  code: 'completed',
                  name: 'Status of the course progress',
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

    // TODO: Add auth headers in the response, check select.service.ts

    try {
      const authHeader = await createAuthorizationHeader(updateResponse).then(
        (res) => {
          console.log(res);
          return res;
        },
      );
      console.log('auth header: ', authHeader);

      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          authorization: authHeader,
        },
        withCredentials: true,
        mode: 'cors',
      };
      console.log('calling request forwarder');
      await lastValueFrom(
        this.httpService.post(
          updateDto.context.bap_uri + 'on_update',
          updateResponse,
          requestOptions,
        ),
      );
    } catch (err) {
      console.log('error in request forwarder: ', err);
      return new InternalServerErrorException(err);
    }

    // forwarding the response back to BAP /on-update
    return await requestForwarder(
      updateDto.context.bap_uri + 'on_update',
      updateResponse,
      this.httpService,
    );
  }
}
