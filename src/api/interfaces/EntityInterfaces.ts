import {SchemaFieldType} from "src/api/enums/SchemaFieldType";
import {ComputedField} from "src/api/interfaces/ComputedField";

export interface EntityFieldSchema {
  field: string;
  label: string;
  type: SchemaFieldType;
  responsive?: boolean;
  computed?: ComputedField;
  formatter?: Function;
  options?: string[];
  computedOptions?: ComputedField;
}
