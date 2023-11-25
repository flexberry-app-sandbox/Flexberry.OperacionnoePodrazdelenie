import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  сотрудники: DS.belongsTo('i-i-s-operacionnoe-podrazdelenie-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  сотрудники: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-отдел-опер-подр.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОтделОперПодрE', 'i-i-s-operacionnoe-podrazdelenie-отдел-опер-подр', {
    сотрудники: belongsTo('i-i-s-operacionnoe-podrazdelenie-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ОтделОперПодрL', 'i-i-s-operacionnoe-podrazdelenie-отдел-опер-подр', {
    сотрудники: belongsTo('i-i-s-operacionnoe-podrazdelenie-сотрудники', '', {
      iDСотрудн: attr('', { index: 0 })
    }, { index: -1, hidden: true })
  });
};
