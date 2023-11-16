import { Client } from '.';
import { TeamObject } from './team/team.types';
export default class Team {
    private readonly client;
    private readonly baseUrl;
    constructor(client: Client);
    find({ id }: FindTeamData): Promise<TeamObject>;
    list(): Promise<ListTeamsResponse>;
}
interface FindTeamData {
    id: string;
}
interface ListTeamsResponse {
    type: 'team.list';
    teams: TeamObject[];
}
export {};
//# sourceMappingURL=team.d.ts.map