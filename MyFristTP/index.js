const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');  // path 모듈 추가

const index = express();
const port = 3000;

index.use(bodyParser.urlencoded({ extended: true }));

index.use(express.static(path.join(__dirname, 'public')));

// GET 방식: 정적인 페이지를 요청할 때 사용하는 통신 방식
index.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/main.html'));

});



// POST 방식: 동적인 페이지 서비스가 필요할 때 사용되는 통신 방식
index.post('/processInput', (req, res) => {
    const inputNumber = req.body.inputNumber;
    const number = parseInt(inputNumber);

    let result;
    if (isNaN(number)) {
        result = '올바른 숫자를 입력하세요.';
    } else if (number > 0) {
        result = '입력한 수는 양수입니다.';
    } else if (number < 0) {
        result = '입력한 수는 음수입니다.';
    } else {
        result = '입력한 수는 0입니다.';
    }

    res.send(`<html><body><p>${result}</p></body></html>`);
});

index.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
