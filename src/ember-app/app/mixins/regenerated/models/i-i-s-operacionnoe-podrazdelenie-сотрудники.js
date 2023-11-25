import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDСотрудн: DS.attr('number'),
  фИО: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-operacionnoe-podrazdelenie-должности', { inverse: null, async: false })
});

export let ValidationRules = {
  iDСотрудн: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-сотрудники.validations.iDСотрудн.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-сотрудники.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-сотрудники.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-operacionnoe-podrazdelenie-сотрудники', {
    фИО: attr('ФИО', { index: 0 }),
    iDСотрудн: attr('I d сотрудн', { index: 1 }),
    должности: belongsTo('i-i-s-operacionnoe-podrazdelenie-должности', 'Должности', {
      наименование: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-operacionnoe-podrazdelenie-сотрудники', {
    фИО: attr('ФИО', { index: 0 }),
    iDСотрудн: attr('I d сотрудн', { index: 1 }),
    должности: belongsTo('i-i-s-operacionnoe-podrazdelenie-должности', 'Наименование', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
