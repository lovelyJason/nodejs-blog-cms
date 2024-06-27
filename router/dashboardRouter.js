// 处理所有与 ||| 用户 ||| 相关的路由
const express = require('express')
const dashboardContr = require('../controller/dashboardContr.js')
const router = express.Router()

router.get('/index', dashboardContr.getIndex)
module.exports = router