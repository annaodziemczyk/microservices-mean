const express = require('express');
const authRoutes = require('./auth.route');
const catalogueRoutes = require('./catalogue.route');
const customerRoutes = require('./customer.route');
const cartRoutes = require('./cart.route');
const userRoutes = require('./user.route');

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.use('/auth', authRoutes);
router.use('/customer', customerRoutes);
router.use('/catalogue', catalogueRoutes);
router.use('/cart', cartRoutes);
router.use('/user', userRoutes);

module.exports = router;
