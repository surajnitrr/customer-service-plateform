import { Client } from '.';
import { AdminObject } from './admin/admin.types';
export default class Admin {
    private readonly client;
    readonly baseUrl = "admins";
    constructor(client: Client);
    find({ id }: AdminGetByIdData): Promise<AdminObject>;
    away({ adminId, enableAwayMode, enableReassignMode }: SetAdminAwayData): Promise<AdminObject>;
    listAllActivityLogs({ before, after }: ListAllActivityLogsData): Promise<ListAllActivityLogsResponse>;
    list(): Promise<ListAllResponse>;
}
interface AdminGetByIdData {
    id: string;
}
interface SetAdminAwayData {
    adminId: string;
    enableAwayMode: boolean;
    enableReassignMode: boolean;
}
interface ListAllActivityLogsData {
    after: Date;
    before?: Date;
}
interface ListAllActivityLogsResponse {
    type: 'activity_log.list';
    activityLogs: Array<ActivityObject>;
    pages?: Pages;
}
interface ActivityObject {
    id: string;
    activity_type: string;
    activity_description: string;
    metadata: Record<string | number, string | number>;
    performed_by: AdminObject;
}
interface Pages {
    type: 'pages';
    next: unknown | null;
    page: number;
    per_page: number;
    total_pages: number;
}
interface ListAllResponse {
    type: 'admin.list';
    admins: AdminObject[];
}
export {};
//# sourceMappingURL=admin.d.ts.map