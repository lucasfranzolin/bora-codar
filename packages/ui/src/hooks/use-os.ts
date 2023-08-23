import { useState } from 'react';
import { useEffectOnce } from 'react-use';

type OperationalSystem = 'win' | 'mac' | 'linux' | 'android' | 'ios';

export function useOS(): OperationalSystem | undefined {
    const [operatingSystem, setOperatingSystem] = useState<OperationalSystem>();

    useEffectOnce(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        if (userAgent.includes('win')) {
            setOperatingSystem('win');
        } else if (userAgent.includes('mac')) {
            setOperatingSystem('mac');
        } else if (userAgent.includes('linux')) {
            setOperatingSystem('linux');
        } else if (userAgent.includes('android')) {
            setOperatingSystem('android');
        } else if (userAgent.includes('ios')) {
            setOperatingSystem('ios');
        } else {
            setOperatingSystem(undefined);
        }
    });

    return operatingSystem;
}
