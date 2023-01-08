
import { useContext } from 'react';
import { AppContext } from '@/contexts/AppContext';
import Configs from "@/types/Models/Configs";

export function useConfigs(): Configs {
    const { configs } = useContext(AppContext);

    return configs!;
}
