import {
  defineNamespace,
  defineProjections,
  Model as ОформлДоговMixin
} from '../mixins/regenerated/models/i-i-s-operacionnoe-podrazdelenie-оформл-догов';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОформлДоговMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
