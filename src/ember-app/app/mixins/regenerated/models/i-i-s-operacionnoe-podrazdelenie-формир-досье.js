import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаОформл: DS.attr('date'),
  договора: DS.attr('number'),
  наименДосье: DS.attr('string'),
  клиенты: DS.belongsTo('i-i-s-operacionnoe-podrazdelenie-клиенты', { inverse: null, async: false }),
  организация: DS.belongsTo('i-i-s-operacionnoe-podrazdelenie-организация', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-operacionnoe-podrazdelenie-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  датаОформл: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-формир-досье.validations.датаОформл.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  договора: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-формир-досье.validations.договора.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименДосье: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-формир-досье.validations.наименДосье.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  клиенты: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-формир-досье.validations.клиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-формир-досье.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-формир-досье.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФормирДосьеE', 'i-i-s-operacionnoe-podrazdelenie-формир-досье', {
    наименДосье: attr('Наимен досье', { index: 0 }),
    датаОформл: attr('Дата оформл', { index: 1 }),
    договора: attr('Договора', { index: 2 }),
    организация: belongsTo('i-i-s-operacionnoe-podrazdelenie-организация', 'Организация', {
      наименование: attr('Наименование', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'наименование' }),
    сотрудники: belongsTo('i-i-s-operacionnoe-podrazdelenie-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'фИО' }),
    клиенты: belongsTo('i-i-s-operacionnoe-podrazdelenie-клиенты', 'Клиенты', {
      фИО: attr('ФИО', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ФормирДосьеL', 'i-i-s-operacionnoe-podrazdelenie-формир-досье', {
    наименДосье: attr('Наименование досье', { index: 0 }),
    датаОформл: attr('Дата оформления', { index: 1 }),
    договора: attr('№ Договора', { index: 2 }),
    организация: belongsTo('i-i-s-operacionnoe-podrazdelenie-организация', 'Организация', {
      наименование: attr('Организация', { index: 3 })
    }, { index: -1, hidden: true }),
    клиенты: belongsTo('i-i-s-operacionnoe-podrazdelenie-клиенты', 'ID клиента', {
      iDКлиента: attr('ID клиента', { index: 4 })
    }, { index: -1, hidden: true }),
    сотрудники: belongsTo('i-i-s-operacionnoe-podrazdelenie-сотрудники', 'ID сотрудника', {
      iDСотрудн: attr('ID сотрудника', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
