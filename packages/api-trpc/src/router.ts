import { desafio33 } from './router/desafio-33';
import { router } from './trpc';

export const appRouter = router({
    desafio33,
});

export type AppRouter = typeof appRouter;
