export enum SchemaFieldType{
  STRING,
  NUMBER,
  DATE
}

export interface ResponsiveTableSchemaField{
  field: string;
  label: string;
  type: SchemaFieldType;
  responsive?: boolean;
}
export interface ResponsiveTableAction{
  icon?: string;
  label?: string;
  onClick: (item: any, itemIndex: number) => void;
  class: string;
}
