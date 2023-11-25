import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  видОперац: DS.attr('string'),
  видПлатежа: DS.attr('string'),
  датаДоговора: DS.attr('date'),
  назначПлатеж: DS.attr('string'),
  оплачено: DS.attr('boolean'),
  подтвВыпБанка: DS.attr('boolean'),
  суммаПлатеж: DS.attr('number'),
  суммаСНДС: DS.attr('number'),
  счетПолуч: DS.attr('string'),
  организация: DS.belongsTo('i-i-s-operacionnoe-podrazdelenie-организация', { inverse: null, async: false })
});

export let ValidationRules = {
  видОперац: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-прием-и-обр-поруч.validations.видОперац.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  видПлатежа: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-прием-и-обр-поруч.validations.видПлатежа.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  датаДоговора: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-прием-и-обр-поруч.validations.датаДоговора.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  назначПлатеж: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-прием-и-обр-поруч.validations.назначПлатеж.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  оплачено: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-прием-и-обр-поруч.validations.оплачено.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  подтвВыпБанка: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-прием-и-обр-поруч.validations.подтвВыпБанка.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  суммаПлатеж: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-прием-и-обр-поруч.validations.суммаПлатеж.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  суммаСНДС: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-прием-и-обр-поруч.validations.суммаСНДС.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  счетПолуч: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-прием-и-обр-поруч.validations.счетПолуч.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-operacionnoe-podrazdelenie-прием-и-обр-поруч.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПриемИОбрПоручE', 'i-i-s-operacionnoe-podrazdelenie-прием-и-обр-поруч', {
    видОперац: attr('Вид операц', { index: 0 }),
    счетПолуч: attr('Счет получ', { index: 1 }),
    датаДоговора: attr('Дата договора', { index: 2 }),
    видПлатежа: attr('Вид платежа', { index: 3 }),
    суммаПлатеж: attr('Сумма платеж', { index: 4 }),
    суммаСНДС: attr('Сумма СНДС', { index: 5 }),
    назначПлатеж: attr('Назнач платеж', { index: 6 }),
    оплачено: attr('Оплачено', { index: 7 }),
    подтвВыпБанка: attr('Подтв вып банка', { index: 8 }),
    организация: belongsTo('i-i-s-operacionnoe-podrazdelenie-организация', 'Организация', {
      наименование: attr('Наименование', { index: 10, hidden: true })
    }, { index: 9, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('ПриемИОбрПоручL', 'i-i-s-operacionnoe-podrazdelenie-прием-и-обр-поруч', {
    видОперац: attr('Вид операц', { index: 0 }),
    счетПолуч: attr('Счет получ', { index: 1 }),
    датаДоговора: attr('Дата договора', { index: 2 }),
    видПлатежа: attr('Вид платежа', { index: 3 }),
    суммаПлатеж: attr('Сумма платеж', { index: 4 }),
    суммаСНДС: attr('Сумма СНДС', { index: 5 }),
    назначПлатеж: attr('Назнач платеж', { index: 6 }),
    оплачено: attr('Оплачено', { index: 7 }),
    подтвВыпБанка: attr('Подтв вып банка', { index: 8 }),
    организация: belongsTo('i-i-s-operacionnoe-podrazdelenie-организация', 'Организация', {
      наименование: attr('Организация', { index: 9 })
    }, { index: -1, hidden: true })
  });
};
