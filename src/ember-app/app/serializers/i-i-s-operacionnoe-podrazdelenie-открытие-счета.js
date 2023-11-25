import { Serializer as ОткрытиеСчетаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-operacionnoe-podrazdelenie-открытие-счета';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОткрытиеСчетаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
