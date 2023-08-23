import { trpcServer } from '@/lib/trpc/server-client';

export default async function Home() {
    const data = await trpcServer.desafio33.helloWorld();

    return (
        <div>
            <h1>Hello world</h1>
            <pre>{JSON.stringify(data, null, 4)}</pre>
        </div>
    );
}
