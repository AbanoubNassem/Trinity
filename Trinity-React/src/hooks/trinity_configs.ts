import Configs from '@/Types/Models/Configs';
import { useContext } from 'react';
import { AppContext } from '@/contexts/AppContext';

export function useConfigs(): Configs {
    const { configs } = useContext(AppContext);

    return configs!;
}
