import { type inferRouterInputs, type inferRouterOutputs } from '@trpc/server';
import type { AppRouter } from './src/router';

export { appRouter, type AppRouter } from './src/router';
export { createContext } from './src/context';

export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;
