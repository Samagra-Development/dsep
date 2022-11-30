import { DSEP_SEARCH_FILTER } from './types';

export const contextGenerator = (
  transactionId: string,
  action: string,
  bap_uri: string,
  bap_id: string,
) => {
  return {
    transaction_id: transactionId,
    message_id: transactionId,
    action: action,
    timestamp: Date.now(),
    domain: 'courses_and_trainings',
    country: { code: 'IND' },
    city: { code: 'DEL' },
    core_version: '0.9.3',
    bap_uri: bap_uri,
    bap_id: bap_id,
  };
};

// export const messageGenerator = () => { };

export const generateOrder = (action: string) => {
  switch (action) {
    case 'select':
      break;
    case 'init':
      break;
    case 'confirm':
      break;
    default:
      break;
  }
};

export const intentGenerator = (intentFilters: DSEP_SEARCH_FILTER) => {
  return {
    intent: {
      provider: {
        descriptor: {
          name: intentFilters.provider,
        },
      },
      item: {
        descriptor: {
          name: intentFilters.query,
        },
        price: {
          currency: 'INR',
          minimum_value: intentFilters.min_price,
          maximum_value: intentFilters.max_price,
        },
        rating: {
          value: intentFilters.rating,
        },
        tags: {
          course_level: intentFilters.course_level,
          course_mode: intentFilters.course_mode,
          competency: intentFilters.competency,
          exams: intentFilters.exams,
          subjects: intentFilters.subjects,
          isCertified: intentFilters.isCertified ? 'Y' : 'N',
          course_credits: intentFilters.course_credits ? 'Y' : 'N',
          course_duration: intentFilters.course_duration,
        },
      },
      category: {
        descriptor: {
          name: intentFilters.course_category,
        },
      },
      fulfillment: {
        type: intentFilters.course_type,
        customer: {
          person: {
            contact: {
              tags: {
                email: intentFilters.seller_email,
              },
            },
          },
        },
        agent: {
          name: intentFilters.seller_name,
        },
      },
    },
  };
};

export const catalogueGenerator = (
  query: string,
  response: ReadonlyArray<DSEP_SEARCH_FILTER>,
) => {
  const providerWise = {};

  response.map((item) => {
    if (!providerWise[item.provider]) {
      providerWise[item.provider] = [item];
    } else {
      providerWise[item.provider].push(item);
    }
  });

  /**
   * "competency": "145",
    "course_level": "UG",
    "course_type": "Video",
    "exams": "GATE",
    "id": 1,
    "isCertified": true,
    "max_price": "100",
    "min_price": "80",
    "name": "Principles of Electrical Engineering",
    "provider": "NPTEL",
    "rating": "4",
    "seller_email": "sample11@gmail.com",
    "seller_name": "IIT Kanpur",
    "subjects": "Electrical Engineering, Electronics Engineering "
   */

  return {
    catalogue: {
      descriptor: {
        name: `Catalogue for search query: ${query}`,
      },
      providers: Object.keys(providerWise).map((provider) => {
        return {
          id: provider,
          descriptor: {
            name: provider,
          },
          items: providerWise[provider].map((item: any) => {
            return {
              id: item.id,
              descriptor: {
                name: item.name,
              },
              price: {
                currency: 'INR',
                value: item.maximum_value,
                maximum_value: item.maximum_value,
                minimum_value: item.minimum_value,
              },
              provider: {
                id: provider,
              },
              fulfilments: {
                type: item.course_type,
              },
              tags: {
                course_level: item.course_level,
                competency: item.competency,
                exams: item.exams,
                subjects: item.subjects,
                isCertified: item.isCertified ? 'Y' : 'N',
              },
            };
          }),
        };
      }),
    },
  };
};

export const altCatalogueGen = (courses: ReadonlyArray<any>) => {
  return {
    catalogue: {
      descriptor: {
        name: `Catalogue for search query`,
      },
      providers: {
        id: 'Swayam',
        descriptor: {
          name: 'Swayam',
        },
        items: courses.map((item: any) => {
          const course = item.node;
          return {
            id: course.id,
            descriptor: {
              name: course.title,
            },
            category_id: course.category.join(','),
            price: {
              currency: 'INR',
              value: course.maximum_value ? course.maximum_value : 0,
              maximum_value: course.maximum_value ? course.maximum_value : 0,
              minimum_value: course.minimum_value ? course.minimum_value : 0,
            },
            provider: {
              id: `Swayam- ${course.ncCode}`,
            },
            fulfilments: {
              type: course.semester,
            },
            tags: {
              image: course.coursePictureUrl,
              details: course.url,
              course_level: course.course_level,
              competency: course.competency,
              exams: course.exams,
              subjects: course.subjects,
              course_credits: course.credits ? 'Y' : 'N',
            },
          };
        }),
      }
    }
  };
}