import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаЗакрСчета: DS.attr('date'),
  задолжности: DS.attr('boolean'),
  лицСчета: DS.attr('number'),
  типСчета: DS.attr('i-i-s-operacionnoe-podrazdelenie-тип-счета'),
  организация: DS.belongsTo('i-i-s-operacionnoe-podrazdelenie-организация', { inverse: null, async: false }),
  открытиеСчета: DS.belongsTo('i-i-s-operacionnoe-podrazdelenie-открытие-счета', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-operacionnoe-podrazdelenie-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  датаЗакрСчета: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-закрытие-счета.validations.датаЗакрСчета.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  задолжности: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-закрытие-счета.validations.задолжности.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  лицСчета: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-закрытие-счета.validations.лицСчета.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  типСчета: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-закрытие-счета.validations.типСчета.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-закрытие-счета.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  открытиеСчета: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-закрытие-счета.validations.открытиеСчета.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-закрытие-счета.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗакрытиеСчетаE', 'i-i-s-operacionnoe-podrazdelenie-закрытие-счета', {
    датаЗакрСчета: attr('Дата закр счета', { index: 0 }),
    типСчета: attr('Тип счета', { index: 1 }),
    задолжности: attr('Задолжности', { index: 2 }),
    лицСчета: attr('Лиц счета', { index: 3 }),
    организация: belongsTo('i-i-s-operacionnoe-podrazdelenie-организация', 'Организация', {
      наименование: attr('Наименование', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'наименование' }),
    открытиеСчета: belongsTo('i-i-s-operacionnoe-podrazdelenie-открытие-счета', 'Открытие счета', {
      видВалюты: attr('Вид валюты', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'видВалюты' }),
    сотрудники: belongsTo('i-i-s-operacionnoe-podrazdelenie-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ЗакрытиеСчетаL', 'i-i-s-operacionnoe-podrazdelenie-закрытие-счета', {
    датаЗакрСчета: attr('Дата закр счета', { index: 0 }),
    типСчета: attr('Тип счета', { index: 1 }),
    задолжности: attr('Задолжности', { index: 2 }),
    лицСчета: attr('Лиц счета', { index: 3 }),
    организация: belongsTo('i-i-s-operacionnoe-podrazdelenie-организация', 'Наименование', {
      наименование: attr('Наименование', { index: 4 })
    }, { index: -1, hidden: true }),
    открытиеСчета: belongsTo('i-i-s-operacionnoe-podrazdelenie-открытие-счета', 'Вид валюты', {
      видВалюты: attr('Вид валюты', { index: 5 })
    }, { index: -1, hidden: true }),
    сотрудники: belongsTo('i-i-s-operacionnoe-podrazdelenie-сотрудники', '', {
      iDСотрудн: attr('', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
