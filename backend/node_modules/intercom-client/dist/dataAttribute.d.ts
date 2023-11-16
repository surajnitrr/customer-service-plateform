import { Client } from '.';
import { DataAttributeObject, ModelType } from './dataAttribute/dataAttribute.types';
export default class DataAttribute {
    private readonly client;
    readonly baseUrl = "data_attributes";
    constructor(client: Client);
    create({ name, model, dataType: data_type, description, options, }: CreateDataAttributeData): Promise<DataAttributeObject>;
    update({ archived, description, id, options }: UpdateDataAttributeData): Promise<DataAttributeObject>;
    list({ model, includeArchived: include_archived }: ListDataAttributeData): Promise<ListAllResponse>;
}
interface CreateDataAttributeData {
    name: DataAttributeObject['name'];
    model: DataAttributeObject['model'];
    dataType: DataAttributeObject['data_type'];
    description?: DataAttributeObject['description'];
    options?: DataAttributeObject['options'];
}
interface UpdateDataAttributeData {
    id: string;
    archived?: DataAttributeObject['archived'];
    description?: DataAttributeObject['description'];
    options?: DataAttributeObject['options'];
}
interface ListDataAttributeData {
    model?: ModelType;
    includeArchived?: boolean;
}
interface ListAllResponse {
    type: 'list';
    data: DataAttributeObject[];
}
export {};
//# sourceMappingURL=dataAttribute.d.ts.map