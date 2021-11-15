const express = require('express');

const router = express.Router();

// GET 라우터
router.get('/', (req,res)=>{
    res.json(classes);
});

const classes = [
    {
      no: 1,
      className: "최애 뮤지컬 넘버 배우기",
      desc: "마음 속 품어둔 뮤지컬 넘버 한곡 완주",
      cheerCount: 27,
      goalCount: 100,
      introduction:
        "항상 마음 속에만 품어두었던 노래를 직접 뮤지컬 배우가 되어 불러보아요!"
    },
    {
      no: 2,
  
      className: "JAZZ 속으로",
      desc: "마음 속 품어둔 재즈 음악 한곡 완주하기",
      cheerCount: 27,
      goalCount: 100,
      introduction:
        "항상 마음 속에만 품어두었던 노래를 직접 뮤지컬 배우가 되어 불러보아요!"
    },
    {
      no: 3,
      className: "최애 뮤지컬 넘버 배우기",
      desc: "마음 속 품어둔 뮤지컬 넘버 한곡 완주",
      cheerCount: 27,
      goalCount: 100,
      introduction:
        "항상 마음 속에만 품어두었던 노래를 직접 뮤지컬 배우가 되어 불러보아요!"
    },
    {
      no: 4,
      className: "최애 뮤지컬 넘버 배우기",
      desc: "마음 속 품어둔 뮤지컬 넘버 한곡 완주",
      cheerCount: 27,
      goalCount: 100,
      introduction:
        "항상 마음 속에만 품어두었던 노래를 직접 뮤지컬 배우가 되어 불러보아요!"
    },
    {
      no: 5,
      className: "JAZZ속으로",
      desc: "마음 속 품어둔 재즈 음악 한곡 완주하기",
      cheerCount: 27,
      goalCount: 100,
      introduction:
        "항상 마음 속에만 품어두었던 노래를 직접 뮤지컬 배우가 되어 불러보아요!"
    },
    {
      no: 6,
      className: "최애 뮤지컬 넘버 배우기",
      desc: "마음 속 품어둔 뮤지컬 넘버 한곡 완주",
      cheerCount: 27,
      goalCount: 100,
      introduction:
        "항상 마음 속에만 품어두었던 노래를 직접 뮤지컬 배우가 되어 불러보아요!"
    },
    {
      no: 7,
      className: "최애 뮤지컬 넘버 배우기",
      desc: "마음 속 품어둔 뮤지컬 넘버 한곡 완주",
      cheerCount: 27,
      goalCount: 100,
      introduction:
        "항상 마음 속에만 품어두었던 노래를 직접 뮤지컬 배우가 되어 불러보아요!"
    },
    {
        no: 8,
        className: "최애 뮤지컬 넘버 배우기",
        desc: "마음 속 품어둔 뮤지컬 넘버 한곡 완주",
        cheerCount: 27,
        goalCount: 100,
        introduction:
          "항상 마음 속에만 품어두었던 노래를 직접 뮤지컬 배우가 되어 불러보아요!"
      },
      {
        no: 9,
        className: "최애 뮤지컬 넘버 배우기",
        desc: "마음 속 품어둔 뮤지컬 넘버 한곡 완주",
        cheerCount: 27,
        goalCount: 100,
        introduction:
          "항상 마음 속에만 품어두었던 노래를 직접 뮤지컬 배우가 되어 불러보아요!"
      }
  ];
  

module.exports = router;