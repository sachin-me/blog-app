const jwt = require("jsonwebtoken");

module.exports = {
  isLoggedIn(req, res, next) {
    const token = req.headers["authorization"];
    if (!token) return res.status(401).json({ error: "Unauthorized user" });
    const BearerToken = token.split(" ");
    const headerBearer = BearerToken[1];
    jwt.verify(headerBearer, "secret", (err, decode) => {
      if (err)
        return res.status(500).json({
          error: "Token is invalid",
        });
      next();
    });
  },
};
