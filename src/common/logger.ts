import log4js from 'log4js'

log4js.configure({
// 設定を記述
  appenders: {
    // ファイルに書き出す
    logFile: { type: 'file', filename: 'debug.log' }
  },
  categories: {
    default: {
      // ログレベルを設定
      // ログレベル[all < trace < debug < info < warn < error < fatal < mark < off]
      appenders: [ 'logFile' ], level: 'all'
    }
  }
});

let logger: log4js.Logger = log4js.getLogger();
// 戻り値返すみたいなもん
// module.exports = logger;
export default logger
