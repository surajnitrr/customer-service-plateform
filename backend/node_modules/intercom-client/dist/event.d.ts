import { Client } from '.';
import { EventObject, SummaryEventObject } from './event/event.types';
export default class Event {
    private readonly client;
    readonly baseUrl = "events";
    constructor(client: Client);
    create({ eventName: event_name, createdAt: created_at, userId: user_id, id, email, metadata, }: CreateEventData): Promise<void>;
    listBy({ userId: user_id, email, intercomUserId: intercom_user_id, perPage: per_page, summary, }: ListParams): Promise<ListParamsWithSummaryResponse> | Promise<ListParamsResponse>;
}
interface CreateEventData {
    eventName: EventObject['event_name'];
    createdAt: EventObject['created_at'];
    userId?: EventObject['user_id'];
    id?: EventObject['id'];
    email?: EventObject['email'];
    metadata?: EventObject['metadata'];
}
interface ListParams {
    userId?: EventObject['user_id'];
    email?: EventObject['email'];
    intercomUserId?: string;
    perPage?: number;
    summary?: boolean;
}
interface ListParamsResponse {
    type: 'event.list';
    events: EventObject[];
    pages: {
        next?: string;
        since?: string;
    };
}
interface ListParamsWithSummaryResponse {
    type: 'event.summary';
    email: string;
    intercom_user_id: string;
    user_id: string;
    events: SummaryEventObject[];
}
export {};
//# sourceMappingURL=event.d.ts.map