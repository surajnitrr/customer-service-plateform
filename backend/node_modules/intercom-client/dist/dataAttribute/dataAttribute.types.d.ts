import { Timestamp } from '../common/common.types';
export interface DataAttributeObject {
    id: string;
    name: string;
    full_name: string;
    label: string;
    description: string;
    data_type: DataType;
    api_writable: boolean;
    ui_writable: boolean;
    custom: boolean;
    archived: boolean;
    model: ModelType;
    options: Record<'value', string>[];
    type?: 'data_attribute';
    created_at?: Timestamp;
    updated_at?: Timestamp;
    admin_id?: string;
}
export declare enum ModelType {
    CONTACT = "contact",
    COMPANY = "company",
    CONVERSATION = "conversation"
}
export declare enum DataType {
    STRING = "string",
    INTEGER = "integer",
    FLOAT = "float",
    BOOLEAN = "boolean",
    DATE = "date"
}
//# sourceMappingURL=dataAttribute.types.d.ts.map