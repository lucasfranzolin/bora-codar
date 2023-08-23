import { useCallback, useEffect, useState } from 'react';
import { createPortal, unmountComponentAtNode } from 'react-dom';

export type Portal = {
    render: React.FC<{
        children: React.ReactNode | null;
    }>;
    remove: (el?: Element) => any;
};

export function usePortal(portalId: string): React.FC<{
    children: React.ReactNode | null;
}> {
    const [portal, setPortal] = useState<Portal>({
        render: () => null,
        remove: () => null,
    });

    const _createPortal = useCallback(
        (_el: Element): Portal => ({
            render: ({ children }) => createPortal(children, _el),
            remove: () => unmountComponentAtNode(_el),
        }),
        [],
    );

    useEffect(() => {
        if (!document) return;
        const el = document.querySelector(`#${portalId}`);

        if (!el) return;

        const newPortal = _createPortal(el);
        setPortal(newPortal);
        return () => {
            newPortal.remove(el);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return portal.render;
}
