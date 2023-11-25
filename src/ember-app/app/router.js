import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-operacionnoe-podrazdelenie-должности-l');
  this.route('i-i-s-operacionnoe-podrazdelenie-должности-e',
  { path: 'i-i-s-operacionnoe-podrazdelenie-должности-e/:id' });
  this.route('i-i-s-operacionnoe-podrazdelenie-должности-e.new',
  { path: 'i-i-s-operacionnoe-podrazdelenie-должности-e/new' });
  this.route('i-i-s-operacionnoe-podrazdelenie-закрытие-счета-l');
  this.route('i-i-s-operacionnoe-podrazdelenie-закрытие-счета-e',
  { path: 'i-i-s-operacionnoe-podrazdelenie-закрытие-счета-e/:id' });
  this.route('i-i-s-operacionnoe-podrazdelenie-закрытие-счета-e.new',
  { path: 'i-i-s-operacionnoe-podrazdelenie-закрытие-счета-e/new' });
  this.route('i-i-s-operacionnoe-podrazdelenie-клиенты-l');
  this.route('i-i-s-operacionnoe-podrazdelenie-клиенты-e',
  { path: 'i-i-s-operacionnoe-podrazdelenie-клиенты-e/:id' });
  this.route('i-i-s-operacionnoe-podrazdelenie-клиенты-e.new',
  { path: 'i-i-s-operacionnoe-podrazdelenie-клиенты-e/new' });
  this.route('i-i-s-operacionnoe-podrazdelenie-организация-l');
  this.route('i-i-s-operacionnoe-podrazdelenie-организация-e',
  { path: 'i-i-s-operacionnoe-podrazdelenie-организация-e/:id' });
  this.route('i-i-s-operacionnoe-podrazdelenie-организация-e.new',
  { path: 'i-i-s-operacionnoe-podrazdelenie-организация-e/new' });
  this.route('i-i-s-operacionnoe-podrazdelenie-отдел-опер-подр-l');
  this.route('i-i-s-operacionnoe-podrazdelenie-отдел-опер-подр-e',
  { path: 'i-i-s-operacionnoe-podrazdelenie-отдел-опер-подр-e/:id' });
  this.route('i-i-s-operacionnoe-podrazdelenie-отдел-опер-подр-e.new',
  { path: 'i-i-s-operacionnoe-podrazdelenie-отдел-опер-подр-e/new' });
  this.route('i-i-s-operacionnoe-podrazdelenie-открытие-счета-l');
  this.route('i-i-s-operacionnoe-podrazdelenie-открытие-счета-e',
  { path: 'i-i-s-operacionnoe-podrazdelenie-открытие-счета-e/:id' });
  this.route('i-i-s-operacionnoe-podrazdelenie-открытие-счета-e.new',
  { path: 'i-i-s-operacionnoe-podrazdelenie-открытие-счета-e/new' });
  this.route('i-i-s-operacionnoe-podrazdelenie-оформл-догов-l');
  this.route('i-i-s-operacionnoe-podrazdelenie-оформл-догов-e',
  { path: 'i-i-s-operacionnoe-podrazdelenie-оформл-догов-e/:id' });
  this.route('i-i-s-operacionnoe-podrazdelenie-оформл-догов-e.new',
  { path: 'i-i-s-operacionnoe-podrazdelenie-оформл-догов-e/new' });
  this.route('i-i-s-operacionnoe-podrazdelenie-прием-и-обр-поруч-l');
  this.route('i-i-s-operacionnoe-podrazdelenie-прием-и-обр-поруч-e',
  { path: 'i-i-s-operacionnoe-podrazdelenie-прием-и-обр-поруч-e/:id' });
  this.route('i-i-s-operacionnoe-podrazdelenie-прием-и-обр-поруч-e.new',
  { path: 'i-i-s-operacionnoe-podrazdelenie-прием-и-обр-поруч-e/new' });
  this.route('i-i-s-operacionnoe-podrazdelenie-сотрудники-l');
  this.route('i-i-s-operacionnoe-podrazdelenie-сотрудники-e',
  { path: 'i-i-s-operacionnoe-podrazdelenie-сотрудники-e/:id' });
  this.route('i-i-s-operacionnoe-podrazdelenie-сотрудники-e.new',
  { path: 'i-i-s-operacionnoe-podrazdelenie-сотрудники-e/new' });
  this.route('i-i-s-operacionnoe-podrazdelenie-формир-досье-l');
  this.route('i-i-s-operacionnoe-podrazdelenie-формир-досье-e',
  { path: 'i-i-s-operacionnoe-podrazdelenie-формир-досье-e/:id' });
  this.route('i-i-s-operacionnoe-podrazdelenie-формир-досье-e.new',
  { path: 'i-i-s-operacionnoe-podrazdelenie-формир-досье-e/new' });
});

export default Router;
