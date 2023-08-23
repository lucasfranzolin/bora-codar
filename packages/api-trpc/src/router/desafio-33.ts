import { publicProcedure, router } from '../trpc';

export const desafio33 = router({
    helloWorld: publicProcedure.query(() => {
        return {
            ok: true,
        };
    }),
});
