import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ФормирДосьеMixin
} from '../mixins/regenerated/models/i-i-s-operacionnoe-podrazdelenie-формир-досье';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ФормирДосьеMixin, Validations, {
});

defineProjections(Model);

export default Model;
