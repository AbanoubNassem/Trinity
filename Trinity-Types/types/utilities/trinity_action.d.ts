import TrinityActionModel from '@/types/Models/Actions/TrinityAction';
declare class TrinityAction {
    static handle(action: TrinityActionModel, actionUrl: string, data: any): void;
    private static performAction;
    private static post;
    static handleResponse(action: TrinityActionModel, responseData?: Array<any>): Promise<void>;
    private static download;
    private static visit;
}
export default TrinityAction;
