const assert = require('assert');
const app = require('../../src/app');

const service = app.service('contacts');

describe('\'contact\' service', () => {
  it('registered the service', () => {
    assert.ok(service, 'Registered the service');
  });
  it('create data successfully', () => {
    service.create({
      name: {
        first: 'test',
        last: 'user'
      },
      phone: '+85596457770',
      email: 'ravuthz@gmail.com'
    }, {}).then((contact) => {
      assert.equal(contact.email, 'ravuthz@gmail.com');
    });
  });
  it('update data successfully', () => {
    service.find({email: 'ravuthz@gmail.com'}).then((data) => {
      data.name.first = 'test - update';
      data.name.last = 'user - update';
      data.phone = '+855978852843';
      service.update(data.id, data).then((contact) => {
        assert.equal(contact.phone, '+855978852843');
        assert.equal(contact.email, 'ravuthz@gmail.com');
      });
    });
  });
  it('delete data successfully', () => {
    service.find({email: 'ravuthz@gmail.com'}).then((data) => {
      service.remove(data.id).then((contact) => {
        assert.null(contact);
      });
    });
  });
});