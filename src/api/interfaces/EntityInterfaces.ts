import {SchemaFieldType} from "src/api/interfaces/ResponsiveTableInterfaces";

export interface EntityFieldSchema{
  field: string;
  label: string;
  type: SchemaFieldType;
  responsive?: boolean;

}
