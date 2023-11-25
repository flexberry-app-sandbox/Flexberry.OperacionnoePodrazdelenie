import { Serializer as ПриемИОбрПоручSerializer } from
  '../mixins/regenerated/serializers/i-i-s-operacionnoe-podrazdelenie-прием-и-обр-поруч';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПриемИОбрПоручSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
