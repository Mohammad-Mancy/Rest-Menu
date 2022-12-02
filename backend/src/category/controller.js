const TOKEN_SECRET = process.env.TOKEN_SECRET || "";
const jwt = require('jsonwebtoken');
const { addCategoryFunction } = require('./service')

async function addCategory(req,res) {
    try {
      // Check the token if it's Valid
      const token = await req.headers.authorization;
      jwt.verify(token, TOKEN_SECRET, async (err) => {
        if (err) {
          return res.status(401).send(err);
        }
        cat = await addCategoryFunction(req.body);
        res.status(200).send(cat);
      })
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  }

module.exports = {
    addCategory
}