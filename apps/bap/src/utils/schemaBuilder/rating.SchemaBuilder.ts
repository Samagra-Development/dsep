import { buildContext } from './contextBuilder';

export const buildRatingRequest = (input: any = {}) => {
  const context = buildContext({
    ...input,
    action: 'rating',
  });

  const ratings = {
    id: input?.courseId,
    rating_category: 'Item',
    value: `${input?.rating}`,
  };

  const message: any = { ratings };

  return { payload: { context, message } };
};
