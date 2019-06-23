describe('Routes: Users', () => {
  const defaultUser = [
    {
      firstName: 'Cristiano',
      lastName: 'Gomes',
      email: 'cristiano@mail.com'
    }
  ];

  describe('GET /users', () => {
    it('should return a list of users', done => {
      request.get('/v1/user').end((err, res) => {
        expect(res.body).to.be.eql(defaultUser);
        done(err);
      });
    });
  });
});
