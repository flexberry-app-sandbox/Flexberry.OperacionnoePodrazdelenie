import { Serializer as ОформлДоговSerializer } from
  '../mixins/regenerated/serializers/i-i-s-operacionnoe-podrazdelenie-оформл-догов';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОформлДоговSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
