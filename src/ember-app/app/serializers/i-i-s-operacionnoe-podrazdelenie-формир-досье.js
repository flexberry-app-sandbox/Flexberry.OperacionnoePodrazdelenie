import { Serializer as ФормирДосьеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-operacionnoe-podrazdelenie-формир-досье';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ФормирДосьеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
