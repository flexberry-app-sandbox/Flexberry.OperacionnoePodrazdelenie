import {
  defineNamespace,
  defineProjections,
  Model as ОткрытиеСчетаMixin
} from '../mixins/regenerated/models/i-i-s-operacionnoe-podrazdelenie-открытие-счета';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОткрытиеСчетаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
