// 引入 userdb
const path = require('path')
const userdb = require('../model/userdb.js')
const formidable = require('formidable')
const { isTestAccount } = require('../utils/index.js')

// 处理所有与 用户 相关的逻辑
module.exports = {
    // 得到所有的用户信息,并渲染页面
    getIndex: (req, res) => { 
      res.render('index', { avatar: '', nickname: 'jason' })
    }
}
