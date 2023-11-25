import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-operacionnoe-podrazdelenie-формир-досье', 'Unit | Model | i-i-s-operacionnoe-podrazdelenie-формир-досье', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-operacionnoe-podrazdelenie-должности',
    'model:i-i-s-operacionnoe-podrazdelenie-закрытие-счета',
    'model:i-i-s-operacionnoe-podrazdelenie-клиенты',
    'model:i-i-s-operacionnoe-podrazdelenie-организация',
    'model:i-i-s-operacionnoe-podrazdelenie-отдел-опер-подр',
    'model:i-i-s-operacionnoe-podrazdelenie-открытие-счета',
    'model:i-i-s-operacionnoe-podrazdelenie-оформл-догов',
    'model:i-i-s-operacionnoe-podrazdelenie-прием-и-обр-поруч',
    'model:i-i-s-operacionnoe-podrazdelenie-сотрудники',
    'model:i-i-s-operacionnoe-podrazdelenie-формир-досье',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
