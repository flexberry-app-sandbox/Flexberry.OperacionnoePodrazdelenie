import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЗакрытиеСчетаMixin
} from '../mixins/regenerated/models/i-i-s-operacionnoe-podrazdelenie-закрытие-счета';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЗакрытиеСчетаMixin, Validations, {
});

defineProjections(Model);

export default Model;
