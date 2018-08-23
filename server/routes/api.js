const express = require('express')
const router = express.Router()
var visitors = [];
router.get('/message/:name', (req, res) => {
    var user_name = req.params.name;
    let str = 'Hi, ' + user_name +"! How are you? You've visited Anastasia's page.";
    let send_d ={"name": "Nastya", "text": str}
    visitors.push(send_d);
    console.log(send_d);
    res.send(send_d);
})

router.get('/get_array', (req, res) => {
  
    res.send(visitors);
})
router.get('https://hunter.serveo.net/message/Ann', (req, res) => {
    var visitors = [];
    let answer= { "name": res.name, "text": res.text};
    visitors.push(answer);
    console.log(visitors);
    res.send(answer);
    // res.send(JSON.stringify("Hi, you know from what movie these words: 'Colour My Life With The Chaos Of Trouble.'?")) //or whatever message you want
})

// router.post('/filenew', urlencodedParser, function (req, res) {

// })
module.exports = router