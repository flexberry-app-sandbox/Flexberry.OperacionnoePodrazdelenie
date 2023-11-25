import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОформлДоговMixin
} from '../mixins/regenerated/models/i-i-s-operacionnoe-podrazdelenie-оформл-догов';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОформлДоговMixin, Validations, {
});

defineProjections(Model);

export default Model;
