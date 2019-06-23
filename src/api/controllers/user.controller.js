module.exports = {
  get(req, res) {
    const defaultUser = [
      {
        firstName: 'Cristiano',
        lastName: 'Gomes',
        email: 'cristiano@mail.com'
      }
    ];

    res.json(defaultUser);
  },

  post(req, res) {
    res.json({ menssage: 'POST OK!' });
  }
};
