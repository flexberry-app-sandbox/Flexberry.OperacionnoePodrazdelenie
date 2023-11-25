import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипСчетаEnum from '../enums/i-i-s-operacionnoe-podrazdelenie-тип-счета';

export default FlexberryEnum.extend({
  enum: ТипСчетаEnum,
  sourceType: 'IIS.Operacionnoe_podrazdelenie.ТипСчета'
});
