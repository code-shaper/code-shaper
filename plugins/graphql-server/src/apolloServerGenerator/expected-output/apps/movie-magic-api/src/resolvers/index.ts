import { Mutation } from './Mutation';
import { Query } from './Query';
import type { Resolvers } from '@/generated/resolvers-types';

export const resolvers: Resolvers = {
  ...Query,
  ...Mutation,
};
