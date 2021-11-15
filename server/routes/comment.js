const express = require('express');

const router = express.Router();

// GET 라우터
router.get('/', (req,res)=>{
    res.json(comment);
});

const comment = [
    {
      id: 0,
      nickname: "솜사탕이 먹고 싶은 모네",
      comment: "헐 제 인생 뮤지컬 넘버를 이렇게 배울 수 있다니...!!"
    },
    {
      id: 1,
      nickname: "핸드폰 충전 중인 반 고흐",
      comment:
        "항상 뮤지컬에 대해 어렵다 생각하고 도전도 안해봤는데.. 좋은 기회가 될 것 같아요"
    },
    {
        id: 3,
        nickname: "핸드폰 충전 중인 반 고흐",
        comment:
          "항상 뮤지컬에 대해 어렵다 생각하고 도전도 안해봤는데.. 좋은 기회가 될 것 같아요"
      },
      {
        id: 4,
        nickname: "핸드폰 충전 중인 반 고흐",
        comment:
          "항상 뮤지컬에 대해 어렵다 생각하고 도전도 안해봤는데.. 좋은 기회가 될 것 같아요"
      }
  ];
  

module.exports = router;