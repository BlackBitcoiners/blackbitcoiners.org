var express = require('express');
var router = express.Router();

var shell = require('shelljs')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Black Bitcoiners' });
});

router.get('/team', function(req, res) {
  res.render('team', { title: 'Black Bitcoiners — Team' });
});

router.get('/mission', function(req, res) {
  res.render('mission', { title: 'Black Bitcoiners — Mission' });
});
router.get('/mailinglist', function(req, res) {
  res.render('mailingList', { title: 'Black Bitcoiners — Mail' });
});

function setEnvVars (req, cb){
    shell.env['email']  = req.body.email;
    shell.env['source'] = req.body.source;
    cb();
};

router.post('/submitemail', function(req,res){
    console.log(req.body.email);
    console.log(req.body.source);
    setEnvVars(req, function(){
        shell.exec('./bash/email.sh',function(err){
            if (err) console.log(err);
        });

        res.render('awesome');
    });
    
});


module.exports = router;
