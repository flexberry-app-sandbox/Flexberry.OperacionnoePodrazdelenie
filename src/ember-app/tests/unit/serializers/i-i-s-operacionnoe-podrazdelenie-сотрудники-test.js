import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-operacionnoe-podrazdelenie-сотрудники', 'Unit | Serializer | i-i-s-operacionnoe-podrazdelenie-сотрудники', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-operacionnoe-podrazdelenie-сотрудники',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-operacionnoe-podrazdelenie-тип-счета',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
