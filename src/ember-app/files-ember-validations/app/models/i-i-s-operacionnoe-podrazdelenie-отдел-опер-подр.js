import {
  defineNamespace,
  defineProjections,
  Model as ОтделОперПодрMixin
} from '../mixins/regenerated/models/i-i-s-operacionnoe-podrazdelenie-отдел-опер-подр';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОтделОперПодрMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
