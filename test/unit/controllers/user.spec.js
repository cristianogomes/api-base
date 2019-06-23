const UserController = require('@controllers/user.controller');
const sinon = require('sinon');

describe('Controller: User', () => {
  const defaultUser = [
    {
      firstName: 'Cristiano',
      lastName: 'Gomes',
      email: 'cristiano@mail.com'
    }
  ];

  describe('get() users', () => {
    it('should return a list of users', () => {
      const req = {};
      const res = {
        json: sinon.spy()
      };

      UserController.get(req, res);

      expect(res.json.called).to.be.true;
      expect(res.json.calledWith(defaultUser)).to.be.true;
    });
  });
});
