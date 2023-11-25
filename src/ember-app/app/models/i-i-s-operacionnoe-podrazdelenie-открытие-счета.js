import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОткрытиеСчетаMixin
} from '../mixins/regenerated/models/i-i-s-operacionnoe-podrazdelenie-открытие-счета';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОткрытиеСчетаMixin, Validations, {
});

defineProjections(Model);

export default Model;
