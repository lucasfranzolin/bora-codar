import { httpBatchLink } from '@trpc/client';

import { appRouter } from '@lucasfranzolin/api-trpc';
import { getBaseUrl } from './utils';

export const trpcServer = appRouter.createCaller({
    links: [
        httpBatchLink({
            url: `${getBaseUrl()}/api/trpc`,
        }),
    ],
});
