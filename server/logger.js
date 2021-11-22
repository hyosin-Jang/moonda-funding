const { createLogger, format, transports} = require('winston');

const logger = createLogger({
    level: 'info',
    format: format.json(),
    transports: [
        new transports.File({ filename: 'combined.log'}), // 파일로 저장
        new transports.File({ filename: 'error.log', level: 'error'}), // level: 로그의 심각도
    ],
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new transports.Console({ format: format.simple()}));
}

module.exports = logger;