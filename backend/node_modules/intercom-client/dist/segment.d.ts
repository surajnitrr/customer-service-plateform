import { Client } from '.';
import { SegmentObject } from './segment/segment.types';
export default class Segment {
    private readonly client;
    readonly baseUrl = "segments";
    constructor(client: Client);
    list({ includeCount: include_count }: ListData): Promise<ListResponse>;
    find({ id, includeCount: include_count }: FindSegmentData): Promise<SegmentObject>;
}
interface ListData {
    includeCount?: boolean;
}
interface ListResponse {
    type: 'segment.list';
    segments: SegmentObject[];
}
interface FindSegmentData {
    id: string;
    includeCount?: boolean;
}
export {};
//# sourceMappingURL=segment.d.ts.map