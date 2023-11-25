import {
  defineNamespace,
  defineProjections,
  Model as ЗакрытиеСчетаMixin
} from '../mixins/regenerated/models/i-i-s-operacionnoe-podrazdelenie-закрытие-счета';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗакрытиеСчетаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
