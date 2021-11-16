const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
require('dotenv').config();
const path = require('path');
const nunjucks = require('nunjucks');
const {sequelize} = require('./models');

const indexRouter = require('./routes');
const classRouter = require('./routes/class');
const commentRouter = require('./routes/comment');

const app = express();
app.set('port', process.env.PORT);

app.use(cors());

// dev 모드 기준으로 요청과 응답을 볼 수 있음
app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public')));

sequelize.sync({force: false}).then(()=>{
    console.log('데이터베이스 연결 성공');
})
.catch((err)=>{
    console.error(err);
});
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use(cookieParser(process.env.COOKIT_SECRET));

// 세션 관리용 미들웨어, 특정 사용자를 위한 데이터 임시 저장할 때 유용
// req.session 객체 안에 유지됨
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    },
    name: 'session-cookie'
    // 배포 시에는 store에 데이터베이스를 연결해서 세션을 유지하는 것이 좋다.
    // 보통 레디스가 자주 쓰인다.
}));


app.use('/', indexRouter);
app.use('/class', classRouter);
app.use('/comment', commentRouter);

// next를 호출하지 않는 미들웨어는 res.send로 응답을 보내야 함
app.use((req, res, next)=>{
    res.status(404).send('Not Found');
});

// 에러 처리 미들웨어는 매개변수가 네 개
app.use((err, req, res, next)=>{
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
})