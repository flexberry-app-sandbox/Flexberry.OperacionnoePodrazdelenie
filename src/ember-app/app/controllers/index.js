import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.operacionnoe-podrazdelenie.caption'),
          title: i18n.t('forms.application.sitemap.operacionnoe-podrazdelenie.title'),
          children: [{
            link: 'i-i-s-operacionnoe-podrazdelenie-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.operacionnoe-podrazdelenie.i-i-s-operacionnoe-podrazdelenie-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.operacionnoe-podrazdelenie.i-i-s-operacionnoe-podrazdelenie-сотрудники-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-operacionnoe-podrazdelenie-организация-l',
            caption: i18n.t('forms.application.sitemap.operacionnoe-podrazdelenie.i-i-s-operacionnoe-podrazdelenie-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.operacionnoe-podrazdelenie.i-i-s-operacionnoe-podrazdelenie-организация-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-operacionnoe-podrazdelenie-клиенты-l',
            caption: i18n.t('forms.application.sitemap.operacionnoe-podrazdelenie.i-i-s-operacionnoe-podrazdelenie-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.operacionnoe-podrazdelenie.i-i-s-operacionnoe-podrazdelenie-клиенты-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-operacionnoe-podrazdelenie-отдел-опер-подр-l',
            caption: i18n.t('forms.application.sitemap.operacionnoe-podrazdelenie.i-i-s-operacionnoe-podrazdelenie-отдел-опер-подр-l.caption'),
            title: i18n.t('forms.application.sitemap.operacionnoe-podrazdelenie.i-i-s-operacionnoe-podrazdelenie-отдел-опер-подр-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-operacionnoe-podrazdelenie-оформл-догов-l',
            caption: i18n.t('forms.application.sitemap.operacionnoe-podrazdelenie.i-i-s-operacionnoe-podrazdelenie-оформл-догов-l.caption'),
            title: i18n.t('forms.application.sitemap.operacionnoe-podrazdelenie.i-i-s-operacionnoe-podrazdelenie-оформл-догов-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-operacionnoe-podrazdelenie-закрытие-счета-l',
            caption: i18n.t('forms.application.sitemap.operacionnoe-podrazdelenie.i-i-s-operacionnoe-podrazdelenie-закрытие-счета-l.caption'),
            title: i18n.t('forms.application.sitemap.operacionnoe-podrazdelenie.i-i-s-operacionnoe-podrazdelenie-закрытие-счета-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-operacionnoe-podrazdelenie-открытие-счета-l',
            caption: i18n.t('forms.application.sitemap.operacionnoe-podrazdelenie.i-i-s-operacionnoe-podrazdelenie-открытие-счета-l.caption'),
            title: i18n.t('forms.application.sitemap.operacionnoe-podrazdelenie.i-i-s-operacionnoe-podrazdelenie-открытие-счета-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-operacionnoe-podrazdelenie-прием-и-обр-поруч-l',
            caption: i18n.t('forms.application.sitemap.operacionnoe-podrazdelenie.i-i-s-operacionnoe-podrazdelenie-прием-и-обр-поруч-l.caption'),
            title: i18n.t('forms.application.sitemap.operacionnoe-podrazdelenie.i-i-s-operacionnoe-podrazdelenie-прием-и-обр-поруч-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-operacionnoe-podrazdelenie-должности-l',
            caption: i18n.t('forms.application.sitemap.operacionnoe-podrazdelenie.i-i-s-operacionnoe-podrazdelenie-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.operacionnoe-podrazdelenie.i-i-s-operacionnoe-podrazdelenie-должности-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-operacionnoe-podrazdelenie-формир-досье-l',
            caption: i18n.t('forms.application.sitemap.operacionnoe-podrazdelenie.i-i-s-operacionnoe-podrazdelenie-формир-досье-l.caption'),
            title: i18n.t('forms.application.sitemap.operacionnoe-podrazdelenie.i-i-s-operacionnoe-podrazdelenie-формир-досье-l.title'),
            children: null
          }]
        }
      ]
    };
  }),
})