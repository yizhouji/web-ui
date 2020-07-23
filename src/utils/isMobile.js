let env = process.env.NODE_ENV === 'production'

try {
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {

  } else {
    if (navigator.userAgent.indexOf('gtmcapp') === -1 && env) {
      location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.yongyou'
    }
  }
} catch (e) { }
