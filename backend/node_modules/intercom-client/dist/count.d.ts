import { Client, CompanySegmentCountResponse, CompanyTagCountResponse, CompanyUserCountResponse, UserCountResponse, UserSegmentCountResponse, UserTagCountResponse } from '.';
import { AdminConversationCountResponse, AppTotalCountResponse, CompanyCountResponse, ConversationCountResponse } from './count/count.types';
export default class Count {
    private readonly client;
    readonly baseUrl = "counts";
    constructor(client: Client);
    forApp(): Promise<AppTotalCountResponse>;
    countCompany(): Promise<CompanyCountResponse>;
    countCompanySegment(): Promise<CompanySegmentCountResponse>;
    countCompanyTag(): Promise<CompanyTagCountResponse>;
    countCompanyUser(): Promise<CompanyUserCountResponse>;
    countConversation(): Promise<ConversationCountResponse>;
    countAdminConversation(): Promise<AdminConversationCountResponse>;
    countUser(): Promise<UserCountResponse>;
    countUserSegment(): Promise<UserSegmentCountResponse>;
    countUserTag(): Promise<UserTagCountResponse>;
}
//# sourceMappingURL=count.d.ts.map