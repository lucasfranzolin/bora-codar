import { createTRPCReact } from '@trpc/react-query';

import { type AppRouter } from '@lucasfranzolin/api-trpc';

export const trpc = createTRPCReact<AppRouter>({});
