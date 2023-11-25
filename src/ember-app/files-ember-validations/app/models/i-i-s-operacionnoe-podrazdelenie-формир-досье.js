import {
  defineNamespace,
  defineProjections,
  Model as ФормирДосьеMixin
} from '../mixins/regenerated/models/i-i-s-operacionnoe-podrazdelenie-формир-досье';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ФормирДосьеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
