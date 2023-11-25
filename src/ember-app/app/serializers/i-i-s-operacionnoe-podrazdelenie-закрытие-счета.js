import { Serializer as ЗакрытиеСчетаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-operacionnoe-podrazdelenie-закрытие-счета';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗакрытиеСчетаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
