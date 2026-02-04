const express = require('express');
const router = express.Router();

const authRoutes = require('../modules/auth/routes');
const productRoutes = require('../modules/product/routes');
const blogRoutes = require("../modules/blog/route")

// Mount module routes
router.use('/auth', authRoutes);
router.use('/products', productRoutes);
router.use("/blog", blogRoutes )

module.exports = router;
