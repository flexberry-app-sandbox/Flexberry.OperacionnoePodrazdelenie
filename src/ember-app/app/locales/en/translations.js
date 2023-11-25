import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISOperacionnoe_podrazdelenieДолжностиLForm from './forms/i-i-s-operacionnoe-podrazdelenie-должности-l';
import IISOperacionnoe_podrazdelenieЗакрытиеСчетаLForm from './forms/i-i-s-operacionnoe-podrazdelenie-закрытие-счета-l';
import IISOperacionnoe_podrazdelenieКлиентыLForm from './forms/i-i-s-operacionnoe-podrazdelenie-клиенты-l';
import IISOperacionnoe_podrazdelenieОрганизацияLForm from './forms/i-i-s-operacionnoe-podrazdelenie-организация-l';
import IISOperacionnoe_podrazdelenieОтделОперПодрLForm from './forms/i-i-s-operacionnoe-podrazdelenie-отдел-опер-подр-l';
import IISOperacionnoe_podrazdelenieОткрытиеСчетаLForm from './forms/i-i-s-operacionnoe-podrazdelenie-открытие-счета-l';
import IISOperacionnoe_podrazdelenieОформлДоговLForm from './forms/i-i-s-operacionnoe-podrazdelenie-оформл-догов-l';
import IISOperacionnoe_podrazdelenieПриемИОбрПоручLForm from './forms/i-i-s-operacionnoe-podrazdelenie-прием-и-обр-поруч-l';
import IISOperacionnoe_podrazdelenieСотрудникиLForm from './forms/i-i-s-operacionnoe-podrazdelenie-сотрудники-l';
import IISOperacionnoe_podrazdelenieФормирДосьеLForm from './forms/i-i-s-operacionnoe-podrazdelenie-формир-досье-l';
import IISOperacionnoe_podrazdelenieДолжностиEForm from './forms/i-i-s-operacionnoe-podrazdelenie-должности-e';
import IISOperacionnoe_podrazdelenieЗакрытиеСчетаEForm from './forms/i-i-s-operacionnoe-podrazdelenie-закрытие-счета-e';
import IISOperacionnoe_podrazdelenieКлиентыEForm from './forms/i-i-s-operacionnoe-podrazdelenie-клиенты-e';
import IISOperacionnoe_podrazdelenieОрганизацияEForm from './forms/i-i-s-operacionnoe-podrazdelenie-организация-e';
import IISOperacionnoe_podrazdelenieОтделОперПодрEForm from './forms/i-i-s-operacionnoe-podrazdelenie-отдел-опер-подр-e';
import IISOperacionnoe_podrazdelenieОткрытиеСчетаEForm from './forms/i-i-s-operacionnoe-podrazdelenie-открытие-счета-e';
import IISOperacionnoe_podrazdelenieОформлДоговEForm from './forms/i-i-s-operacionnoe-podrazdelenie-оформл-догов-e';
import IISOperacionnoe_podrazdelenieПриемИОбрПоручEForm from './forms/i-i-s-operacionnoe-podrazdelenie-прием-и-обр-поруч-e';
import IISOperacionnoe_podrazdelenieСотрудникиEForm from './forms/i-i-s-operacionnoe-podrazdelenie-сотрудники-e';
import IISOperacionnoe_podrazdelenieФормирДосьеEForm from './forms/i-i-s-operacionnoe-podrazdelenie-формир-досье-e';
import IISOperacionnoe_podrazdelenieДолжностиModel from './models/i-i-s-operacionnoe-podrazdelenie-должности';
import IISOperacionnoe_podrazdelenieЗакрытиеСчетаModel from './models/i-i-s-operacionnoe-podrazdelenie-закрытие-счета';
import IISOperacionnoe_podrazdelenieКлиентыModel from './models/i-i-s-operacionnoe-podrazdelenie-клиенты';
import IISOperacionnoe_podrazdelenieОрганизацияModel from './models/i-i-s-operacionnoe-podrazdelenie-организация';
import IISOperacionnoe_podrazdelenieОтделОперПодрModel from './models/i-i-s-operacionnoe-podrazdelenie-отдел-опер-подр';
import IISOperacionnoe_podrazdelenieОткрытиеСчетаModel from './models/i-i-s-operacionnoe-podrazdelenie-открытие-счета';
import IISOperacionnoe_podrazdelenieОформлДоговModel from './models/i-i-s-operacionnoe-podrazdelenie-оформл-догов';
import IISOperacionnoe_podrazdelenieПриемИОбрПоручModel from './models/i-i-s-operacionnoe-podrazdelenie-прием-и-обр-поруч';
import IISOperacionnoe_podrazdelenieСотрудникиModel from './models/i-i-s-operacionnoe-podrazdelenie-сотрудники';
import IISOperacionnoe_podrazdelenieФормирДосьеModel from './models/i-i-s-operacionnoe-podrazdelenie-формир-досье';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-operacionnoe-podrazdelenie-должности': IISOperacionnoe_podrazdelenieДолжностиModel,
    'i-i-s-operacionnoe-podrazdelenie-закрытие-счета': IISOperacionnoe_podrazdelenieЗакрытиеСчетаModel,
    'i-i-s-operacionnoe-podrazdelenie-клиенты': IISOperacionnoe_podrazdelenieКлиентыModel,
    'i-i-s-operacionnoe-podrazdelenie-организация': IISOperacionnoe_podrazdelenieОрганизацияModel,
    'i-i-s-operacionnoe-podrazdelenie-отдел-опер-подр': IISOperacionnoe_podrazdelenieОтделОперПодрModel,
    'i-i-s-operacionnoe-podrazdelenie-открытие-счета': IISOperacionnoe_podrazdelenieОткрытиеСчетаModel,
    'i-i-s-operacionnoe-podrazdelenie-оформл-догов': IISOperacionnoe_podrazdelenieОформлДоговModel,
    'i-i-s-operacionnoe-podrazdelenie-прием-и-обр-поруч': IISOperacionnoe_podrazdelenieПриемИОбрПоручModel,
    'i-i-s-operacionnoe-podrazdelenie-сотрудники': IISOperacionnoe_podrazdelenieСотрудникиModel,
    'i-i-s-operacionnoe-podrazdelenie-формир-досье': IISOperacionnoe_podrazdelenieФормирДосьеModel
  },

  'application-name': 'Operacionnoe_podrazdelenie',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Operacionnoe_podrazdelenie',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Operacionnoe_podrazdelenie',
          title: 'Operacionnoe_podrazdelenie'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'operacionnoe-podrazdelenie': {
          caption: 'Operacionnoe_podrazdelenie',
          title: 'Operacionnoe_podrazdelenie',
          'i-i-s-operacionnoe-podrazdelenie-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-operacionnoe-podrazdelenie-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-operacionnoe-podrazdelenie-клиенты-l': {
            caption: 'Клиенты',
            title: ''
          },
          'i-i-s-operacionnoe-podrazdelenie-отдел-опер-подр-l': {
            caption: 'Отдел опер подр',
            title: ''
          },
          'i-i-s-operacionnoe-podrazdelenie-оформл-догов-l': {
            caption: 'Оформл догов',
            title: ''
          },
          'i-i-s-operacionnoe-podrazdelenie-закрытие-счета-l': {
            caption: 'Закрытие счета',
            title: ''
          },
          'i-i-s-operacionnoe-podrazdelenie-открытие-счета-l': {
            caption: 'Открытие счета',
            title: ''
          },
          'i-i-s-operacionnoe-podrazdelenie-прием-и-обр-поруч-l': {
            caption: 'Прием и обр поруч',
            title: ''
          },
          'i-i-s-operacionnoe-podrazdelenie-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-operacionnoe-podrazdelenie-формир-досье-l': {
            caption: 'Формир досье',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-operacionnoe-podrazdelenie-должности-l': IISOperacionnoe_podrazdelenieДолжностиLForm,
    'i-i-s-operacionnoe-podrazdelenie-закрытие-счета-l': IISOperacionnoe_podrazdelenieЗакрытиеСчетаLForm,
    'i-i-s-operacionnoe-podrazdelenie-клиенты-l': IISOperacionnoe_podrazdelenieКлиентыLForm,
    'i-i-s-operacionnoe-podrazdelenie-организация-l': IISOperacionnoe_podrazdelenieОрганизацияLForm,
    'i-i-s-operacionnoe-podrazdelenie-отдел-опер-подр-l': IISOperacionnoe_podrazdelenieОтделОперПодрLForm,
    'i-i-s-operacionnoe-podrazdelenie-открытие-счета-l': IISOperacionnoe_podrazdelenieОткрытиеСчетаLForm,
    'i-i-s-operacionnoe-podrazdelenie-оформл-догов-l': IISOperacionnoe_podrazdelenieОформлДоговLForm,
    'i-i-s-operacionnoe-podrazdelenie-прием-и-обр-поруч-l': IISOperacionnoe_podrazdelenieПриемИОбрПоручLForm,
    'i-i-s-operacionnoe-podrazdelenie-сотрудники-l': IISOperacionnoe_podrazdelenieСотрудникиLForm,
    'i-i-s-operacionnoe-podrazdelenie-формир-досье-l': IISOperacionnoe_podrazdelenieФормирДосьеLForm,
    'i-i-s-operacionnoe-podrazdelenie-должности-e': IISOperacionnoe_podrazdelenieДолжностиEForm,
    'i-i-s-operacionnoe-podrazdelenie-закрытие-счета-e': IISOperacionnoe_podrazdelenieЗакрытиеСчетаEForm,
    'i-i-s-operacionnoe-podrazdelenie-клиенты-e': IISOperacionnoe_podrazdelenieКлиентыEForm,
    'i-i-s-operacionnoe-podrazdelenie-организация-e': IISOperacionnoe_podrazdelenieОрганизацияEForm,
    'i-i-s-operacionnoe-podrazdelenie-отдел-опер-подр-e': IISOperacionnoe_podrazdelenieОтделОперПодрEForm,
    'i-i-s-operacionnoe-podrazdelenie-открытие-счета-e': IISOperacionnoe_podrazdelenieОткрытиеСчетаEForm,
    'i-i-s-operacionnoe-podrazdelenie-оформл-догов-e': IISOperacionnoe_podrazdelenieОформлДоговEForm,
    'i-i-s-operacionnoe-podrazdelenie-прием-и-обр-поруч-e': IISOperacionnoe_podrazdelenieПриемИОбрПоручEForm,
    'i-i-s-operacionnoe-podrazdelenie-сотрудники-e': IISOperacionnoe_podrazdelenieСотрудникиEForm,
    'i-i-s-operacionnoe-podrazdelenie-формир-досье-e': IISOperacionnoe_podrazdelenieФормирДосьеEForm
  },

});

export default translations;
