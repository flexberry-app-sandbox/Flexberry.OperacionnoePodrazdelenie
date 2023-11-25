import {
  defineNamespace,
  defineProjections,
  Model as ПриемИОбрПоручMixin
} from '../mixins/regenerated/models/i-i-s-operacionnoe-podrazdelenie-прием-и-обр-поруч';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПриемИОбрПоручMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
