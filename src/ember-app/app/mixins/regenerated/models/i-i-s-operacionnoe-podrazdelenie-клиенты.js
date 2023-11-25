import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDКлиента: DS.attr('number'),
  иНН: DS.attr('number'),
  контактТел: DS.attr('number'),
  местоРаботы: DS.attr('string'),
  номерСчета: DS.attr('number'),
  паспортДан: DS.attr('number'),
  расчетСчет: DS.attr('number'),
  фактичАдрес: DS.attr('string'),
  фИО: DS.attr('string'),
  юрАдрес: DS.attr('string')
});

export let ValidationRules = {
  iDКлиента: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-клиенты.validations.iDКлиента.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  иНН: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-клиенты.validations.иНН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  контактТел: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-клиенты.validations.контактТел.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  местоРаботы: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-клиенты.validations.местоРаботы.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерСчета: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-клиенты.validations.номерСчета.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  паспортДан: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-клиенты.validations.паспортДан.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  расчетСчет: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-клиенты.validations.расчетСчет.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фактичАдрес: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-клиенты.validations.фактичАдрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-клиенты.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  юрАдрес: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-клиенты.validations.юрАдрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентыE', 'i-i-s-operacionnoe-podrazdelenie-клиенты', {
    фИО: attr('ФИО', { index: 0 }),
    иНН: attr('ИНН', { index: 1 }),
    паспортДан: attr('Паспорт дан', { index: 2 }),
    юрАдрес: attr('Юр адрес', { index: 3 }),
    местоРаботы: attr('Место работы', { index: 4 }),
    фактичАдрес: attr('Фактич адрес', { index: 5 }),
    контактТел: attr('Контакт тел', { index: 6 }),
    iDКлиента: attr('I d клиента', { index: 7 }),
    номерСчета: attr('Номер счета', { index: 8 }),
    расчетСчет: attr('Расчет счет', { index: 9 })
  });

  modelClass.defineProjection('КлиентыL', 'i-i-s-operacionnoe-podrazdelenie-клиенты', {
    фИО: attr('ФИО', { index: 0 }),
    иНН: attr('ИНН', { index: 1 }),
    паспортДан: attr('Паспорт дан', { index: 2 }),
    юрАдрес: attr('Юр адрес', { index: 3 }),
    местоРаботы: attr('Место работы', { index: 4 }),
    фактичАдрес: attr('Фактич адрес', { index: 5 }),
    контактТел: attr('Контакт тел', { index: 6 }),
    iDКлиента: attr('I d клиента', { index: 7 }),
    номерСчета: attr('Номер счета', { index: 8 }),
    расчетСчет: attr('Расчет счет', { index: 9 })
  });
};
