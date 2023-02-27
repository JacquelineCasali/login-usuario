const indexController = {
  home: (req, res) => {
    console.log(req.session.email);
    return res.render("login", {
      title: "Home",
      user: req.cookies.user,
      admin: req.cookies.admin,
    });
  },
  sucesso: (req, res) => {
    console.log(req.session.email);
    return res.render("sucesso", {
      title: "Login realizado",
      user: req.cookies.user,
      admin: req.cookies.admin,
    });
  },
};

module.exports = indexController;
