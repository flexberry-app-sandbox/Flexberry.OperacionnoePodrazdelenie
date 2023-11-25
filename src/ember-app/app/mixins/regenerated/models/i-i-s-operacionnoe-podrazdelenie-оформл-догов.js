import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаОформл: DS.attr('date'),
  срокиДогов: DS.attr('number'),
  клиенты: DS.belongsTo('i-i-s-operacionnoe-podrazdelenie-клиенты', { inverse: null, async: false }),
  организация: DS.belongsTo('i-i-s-operacionnoe-podrazdelenie-организация', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-operacionnoe-podrazdelenie-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  датаОформл: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-оформл-догов.validations.датаОформл.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  срокиДогов: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-оформл-догов.validations.срокиДогов.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  клиенты: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-оформл-догов.validations.клиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-оформл-догов.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-оформл-догов.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОформлДоговE', 'i-i-s-operacionnoe-podrazdelenie-оформл-догов', {
    датаОформл: attr('Дата оформл', { index: 0 }),
    срокиДогов: attr('Сроки догов', { index: 1 }),
    сотрудники: belongsTo('i-i-s-operacionnoe-podrazdelenie-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фИО' }),
    клиенты: belongsTo('i-i-s-operacionnoe-podrazdelenie-клиенты', 'Клиенты', {
      фИО: attr('ФИО', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'фИО' }),
    организация: belongsTo('i-i-s-operacionnoe-podrazdelenie-организация', 'Организация', {
      наименование: attr('Наименование', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('ОформлДоговL', 'i-i-s-operacionnoe-podrazdelenie-оформл-догов', {
    датаОформл: attr('Дата оформл', { index: 0 }),
    срокиДогов: attr('Сроки догов', { index: 1 }),
    сотрудники: belongsTo('i-i-s-operacionnoe-podrazdelenie-сотрудники', 'Сотрудник', {
      iDСотрудн: attr('Сотрудник', { index: 2 })
    }, { index: -1, hidden: true }),
    организация: belongsTo('i-i-s-operacionnoe-podrazdelenie-организация', 'Наименование', {
      наименование: attr('Наименование', { index: 3 })
    }, { index: -1, hidden: true }),
    клиенты: belongsTo('i-i-s-operacionnoe-podrazdelenie-клиенты', 'Клиенты', {
      iDКлиента: attr('Клиенты', { index: 4 }),
      номерСчета: attr('Номер счета', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
