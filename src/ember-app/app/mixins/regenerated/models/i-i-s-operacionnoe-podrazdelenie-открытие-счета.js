import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  видВалюты: DS.attr('string'),
  датаОткрСчета: DS.attr('date'),
  докНаОткрСчета: DS.attr('boolean'),
  лицСчета: DS.attr('number'),
  типСчета: DS.attr('i-i-s-operacionnoe-podrazdelenie-тип-счета'),
  организация: DS.belongsTo('i-i-s-operacionnoe-podrazdelenie-организация', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-operacionnoe-podrazdelenie-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  видВалюты: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-открытие-счета.validations.видВалюты.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаОткрСчета: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-открытие-счета.validations.датаОткрСчета.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  докНаОткрСчета: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-открытие-счета.validations.докНаОткрСчета.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  лицСчета: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-открытие-счета.validations.лицСчета.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  типСчета: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-открытие-счета.validations.типСчета.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-открытие-счета.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-открытие-счета.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОткрытиеСчетаE', 'i-i-s-operacionnoe-podrazdelenie-открытие-счета', {
    датаОткрСчета: attr('Дата откр счета', { index: 0 }),
    типСчета: attr('Тип счета', { index: 1 }),
    видВалюты: attr('Вид валюты', { index: 2 }),
    докНаОткрСчета: attr('Док на откр счета', { index: 3 }),
    лицСчета: attr('Лиц счета', { index: 4 }),
    организация: belongsTo('i-i-s-operacionnoe-podrazdelenie-организация', 'Организация', {
      наименование: attr('Наименование', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'наименование' }),
    сотрудники: belongsTo('i-i-s-operacionnoe-podrazdelenie-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('ОткрытиеСчетаL', 'i-i-s-operacionnoe-podrazdelenie-открытие-счета', {
    датаОткрСчета: attr('Дата откр счета', { index: 0 }),
    типСчета: attr('Тип счета', { index: 1 }),
    видВалюты: attr('Вид валюты', { index: 2 }),
    докНаОткрСчета: attr('Док на откр счета', { index: 3 }),
    лицСчета: attr('Лиц счета', { index: 4 }),
    организация: belongsTo('i-i-s-operacionnoe-podrazdelenie-организация', 'Наименование', {
      наименование: attr('Наименование', { index: 5 })
    }, { index: -1, hidden: true }),
    сотрудники: belongsTo('i-i-s-operacionnoe-podrazdelenie-сотрудники', 'Сотрудник', {
      iDСотрудн: attr('Сотрудник', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
