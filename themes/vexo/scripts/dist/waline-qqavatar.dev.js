"use strict";

!function () {
  var Waline = require('@waline/vercel');

  module.exports = Waline({
    avatarUrl: function avatarUrl(comment) {
      var reg, mail, q;
      return regeneratorRuntime.async(function avatarUrl$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              reg = new RegExp('(\\d+)@qq\\.com$', 'i');
              mail = comment.mail;

              if (!reg.test(mail)) {
                _context.next = 5;
                break;
              }

              q = mail.replace(/@qq\.com/i, '').toLowerCase();
              return _context.abrupt("return", 'https://q1.qlogo.cn/headimg_dl?dst_uin=' + q + '&spec=4');

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  });
};