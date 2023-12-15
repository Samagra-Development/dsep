import { buildContext } from './contextBuilder';

export const buildSearchRequest = (input: any = {}) => {
  const context = buildContext({
    ...input,
    action: 'search',
  });

  const intent = { item: { descriptor: input?.searchText ?? '' } };

  const message: any = { intent };

  return { payload: { context, message } };
};
