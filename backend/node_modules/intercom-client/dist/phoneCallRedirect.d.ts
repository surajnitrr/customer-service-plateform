import { Client } from '.';
import { PhoneCallRedirectObject } from './phoneCallRedirect/phoneCallRedirect.types';
import { JavascriptObject } from './common/common.types';
export default class PhoneCallRedirect {
    private readonly client;
    readonly baseUrl = "phone_call_redirects";
    constructor(client: Client);
    create({ phone, customAttributes }: CreatePhoneRedirectData): Promise<PhoneCallRedirectObject>;
}
interface CreatePhoneRedirectData {
    phone: string;
    customAttributes?: JavascriptObject;
}
export {};
//# sourceMappingURL=phoneCallRedirect.d.ts.map