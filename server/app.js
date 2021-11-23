const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
require('dotenv').config();
const path = require('path');
const nunjucks = require('nunjucks');
const helmet = require('helmet');
const hpp = require('hpp');


const {sequelize} = require('./models');
const indexRouter = require('./routes');
const classRouter = require('./routes/class');
const commentRouter = require('./routes/comment');
const thumbnailRouter= require('./routes/thumbnail');
const logger = require('./logger');

const app = express();
app.set('port', process.env.PORT);

app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(morgan('combined'));
    app.use(helmet({contentSecurityPolicy: false}));
    app.use(hpp());
}else{
    app.use(morgan('dev'));   
}

app.use('/', express.static(path.join(__dirname, 'public')));

sequelize.sync({force: false}).then(()=>{
    console.log('database connect');
})
.catch((err)=>{
    console.error(err);
});
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use(cookieParser(process.env.COOKIT_SECRET));

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    },
    name: 'session-cookie'
    // 배포 시에는 store에 데이터베이스를 연결해서 세션 유지, 레디스가 자주 쓰임
}));




app.use('/', indexRouter);
app.use('/class', classRouter);
app.use('/thumbnail', thumbnailRouter);
app.use('/comment', commentRouter);

app.use((req, res,next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    logger.info('hello');
    logger.error(error.message);
    next(error);
})

app.use((err, req, res, next)=>{
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
})