import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { requestForwarder } from 'utils/utils';
import { createAuthorizationHeader } from '../utils/authBuilder';
import { SearchDTO } from './dto/search.dto';

@Injectable()
export class SearchService {
  constructor(private readonly httpService: HttpService) {}

  async handleSearch(searchDto: SearchDTO) {
    // TODO: Validate the search request
    // TODO: Figure out how to get the list of all onboarded providers (env vars or something else?)

    let searchResponse: any = {
      "context": {
        "domain": `${searchDto.context.domain}`,
        "version": "1.1.0",
        "action": "on_search",
        "bap_id": `${searchDto.context.bap_id}`,
        "bap_uri": `${searchDto.context.bap_uri}`,
        "transaction_id": `${searchDto.context.transaction_id}`,
        "message_id": `${searchDto.context.message_id}`,
        "ttl": "PT10M",
        "timestamp": "2023-02-20T09:22:00.856Z",
        "bpp_id": `${searchDto.context.bpp_id}`,
        "bpp_uri": `${searchDto.context.bpp_uri}`
      },
      "message": {
        "catalog": {
          "descriptor": {
            "name": "Catalog for python"
          },
          "providers": [
            {
              "id": "Udemy",
              "descriptor": {
                "name": "Udemy"
              },
              "categories": [
                {
                  "id": "COMP_SCI_ENGG",
                  "parent_category_id": "COMP_SCI_ENGG",
                  "descriptor": {
                    "name": "COMP_SCI_ENGG"
                  }
                },
                {
                  "id": "COMP_SCI_ENGG",
                  "parent_category_id": "COMP_SCI_ENGG",
                  "descriptor": {
                    "name": "COMP_SCI_ENGG"
                  }
                },
                {
                  "id": "Multidisciplinary",
                  "parent_category_id": "Multidisciplinary",
                  "descriptor": {
                    "name": "Multidisciplinary"
                  }
                },
                {
                  "id": "All",
                  "parent_category_id": "All",
                  "descriptor": {
                    "name": "All"
                  }
                }
              ],
              "items": [
                {
                  "id": "Q291cnNlTGlzdDovbmQyX2NlYzIzX2NzMDI=",
                  "parent_item_id": "Q291cnNlTGlzdDovbmQyX2NlYzIzX2NzMDI=",
                  "descriptor": {
                    "name": "Problem solving Aspects and Python Programming",
                    "long_desc": "",
                    "images": [
                      {
                        "url": "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/cec20_cs04/Course%20Image.png"
                      }
                    ]
                  },
                  "price": {
                    "currency": "INR",
                    "value": "0"
                  },
                  "category_id": "COMP_SCI_ENGG",
                  "recommended": false,
                  "time": {
                    "label": "Course Schedule",
                    "duration": "P12W",
                    "range": {
                      "start": "2023-01-17T18:30:00.000000Z",
                      "end": "2023-04-09T18:29:00.000000Z"
                    }
                  },
                  "rating": "4",
                  "tags": [
                    {
                      "descriptor": {
                        "name": "courseInfo"
                      },
                      "list": [
                        {
                          "descriptor": {
                            "name": "numberOfPurchases"
                          },
                          "value": "121"
                        },
                        {
                          "descriptor": {
                            "name": "languages"
                          },
                          "value": "English, Hindi"
                        },
                        {
                          "descriptor": {
                            "name": "url"
                          },
                          "value": "https://onlinecourses.swayam2.ac.in/cec23_cs02/preview"
                        },
                        {
                          "decsriptor": {
                            "name": "enrollmentEndDate"
                          },
                          "value": "2023-02-28T18:29:00.000000Z"
                        }
                      ],
                      "display": true
                    }
                  ],
                  "rateable": false
                },
                {
                  "id": "Q291cnNlTGlzdDovbmQyX2NlYzIzX2NzMDY=",
                  "parent_item_id": "Q291cnNlTGlzdDovbmQyX2NlYzIzX2NzMDY=",
                  "descriptor": {
                    "name": "Programming in Python",
                    "long_desc": "",
                    "images": [
                      {
                        "url": "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/cec22_cs20/pymainlogo.jpg"
                      }
                    ]
                  },
                  "price": {
                    "currency": "INR",
                    "value": "0"
                  },
                  "category_id": "COMP_SCI_ENGG",
                  "recommended": false,
                  "time": {
                    "label": "Course Schedule",
                    "duration": "P12W",
                    "range": {
                      "start": "2023-01-22T18:30:00.000000Z",
                      "end": "2023-04-16T18:29:00.000000Z"
                    }
                  },
                  "rating": "0",
                  "tags": [
                    {
                      "descriptor": {
                        "name": "courseInfo"
                      },
                      "list": [
                        {
                          "descriptor": {
                            "name": "numberOfPurchases"
                          },
                          "value": "1225"
                        },
                        {
                          "descriptor": {
                            "name": "instructors"
                          },
                          "value": "Dr. Rizwan Rehman"
                        },
                        {
                          "descriptor": {
                            "name": "languages"
                          },
                          "value": "Arabic, English"
                        },
                        {
                          "descriptor": {
                            "name": "url"
                          },
                          "value": "https://onlinecourses.swayam2.ac.in/cec23_cs06/preview"
                        },
                        {
                          "descriptor": {
                            "name": "enrollmentEndDate"
                          },
                          "value": "2023-02-28T18:29:00.000000Z"
                        }
                      ],
                      "display": true
                    },
                    {
                      "descriptor": {
                        "name": "competencyInfo"
                      },
                      "list": [
                        {
                          "descriptor": {
                            "name": "Problem Solving"
                          },
                          "value": "Basic, Intermediate"
                        },
                        {
                          "descriptor": {
                            "name": "Python"
                          },
                          "value": "Advanced"
                        }
                      ],
                      "display": true
                    }
                  ],
                  "rateable": false
                }
              ]
            }
          ]
        }
      }
    }
    console.log('search response: ', searchResponse);
    // add BPP ID and BPP URI in the context here
    searchResponse.context.action = 'on_search';

    try {
      const authHeader = await createAuthorizationHeader(searchResponse).then(
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
          searchDto.context.bap_uri + 'on_search',
          searchResponse,
          requestOptions,
        ),
      );
    } catch (err) {
      console.log('error in request forwarder: ', err);
      return new InternalServerErrorException(err);
    }
  }
}
