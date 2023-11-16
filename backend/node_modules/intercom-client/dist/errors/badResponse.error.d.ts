import { AxiosResponse } from 'axios';
export declare class BadResponseError extends Error {
    readonly message: string;
    readonly body: AxiosResponse['data'];
    readonly headers: AxiosResponse['headers'];
    readonly statusCode: AxiosResponse['status'];
    constructor(message: string, body: AxiosResponse['data'], headers: AxiosResponse['headers'], statusCode: AxiosResponse['status']);
}
//# sourceMappingURL=badResponse.error.d.ts.map