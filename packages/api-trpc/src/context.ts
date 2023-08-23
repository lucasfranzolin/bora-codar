import { type CreateNextContextOptions } from '@trpc/server/adapters/next';

type AuthContextProps = {};

export const createInnerTRPCContext = (props: AuthContextProps) => {
    return {};
};

/**
 * This is the actual context you'll use in your router
 * @link https://trpc.io/docs/context
 **/
export const createContext = async (opts: CreateNextContextOptions) => {
    return createInnerTRPCContext({});
};
