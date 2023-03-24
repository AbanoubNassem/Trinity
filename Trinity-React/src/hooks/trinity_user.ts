import trinityApp from '@/TrinityApp';
import TrinityUser from '@/types/Models/TrinityUser';

export function useTrinityUser(): TrinityUser {
    return trinityApp.user;
}
