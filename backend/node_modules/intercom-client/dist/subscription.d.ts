import { Client } from '.';
import { SubscriptionObject } from './subscription/subscription.types';
export default class Subscription {
    private readonly client;
    readonly baseUrl = "subscription_types";
    constructor(client: Client);
    listTypes(): Promise<ListResponse>;
}
interface ListResponse {
    type: 'list';
    data: SubscriptionObject[];
}
export {};
//# sourceMappingURL=subscription.d.ts.map