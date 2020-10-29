require('dotenv').config();

const yesNo = require('yes-no');

module.exports = {
  dbUrl: process.env.DB_URL || 'db',
  defaultFailureRedirect: process.env.DEFAULT_FAILURE_REDIRECT || '/login',
  port: Number(process.env.PORT) || 3000,
  proxyServer: process.env.PROXY_SERVER || undefined,
  secret: process.env.SECRET || require('./secret'),
  sessionStore: process.env.SESSION_STORE || './sessions',
  sessionMaxAge: Number(process.env.SESSION_MAX_AGE) || 1000 * 60 * 60 * 24 * 7,
  siteTitle: process.env.SITE_TITLE || 'Christmas Community',
  shortTitle: process.env.SHORT_TITLE || 'Christmas',
  useCDN: yesNo.parse(process.env.USE_CDN || true),
  wishlist: require('./wishlist'),
  base: (process.env.ROOT_PATH || '/').endsWith('/') ? (process.env.ROOT_PATH || '/') : `${process.env.ROOT_PATH}/`
};
