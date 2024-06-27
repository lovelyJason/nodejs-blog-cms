module.exports = {
  isTestAccount(req) {
    let nickname = req.session.user.nickname
    return nickname === 'jason'
  }
}