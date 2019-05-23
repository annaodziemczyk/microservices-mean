const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');

const router = express.Router();
module.exports = router;

router.use(passport.authenticate('jwt', { session: false }));

router.route('/')
  .post(asyncHandler(insert));


async function insert(req, res) {
  // let user = await userCtrl.insert(req.body);
  // res.json(user);
}
