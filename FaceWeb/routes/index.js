var express = require('express');
var router = express.Router();
var Message=require('./message');
var http = require('http');
var querystring = require('querystring');
/* GET home page. */

router.post('/addMessage',function(req,res,next){
  if(req.body && req.body.name && req.body.mail && req.body.message && req.body.subject){
    var name=req.body.name||'';
    var mail=req.body.mail||'';
    var msg=req.body.message||'';
    var subject=req.body.subject||'';
  }else{
    res.json({data:'Input Error'});
    return;
  }
  var message=new Message({
    name:name,
    mail:mail,
    message:msg,
    subject:subject
  });
  message.save(function(err,result){
    if(err)
      return err;
    try{
      res.setHeader('Content-Type','text/html; charset=UTF-8');
      res.json({data:'Thank You'});
    }catch(err){

    }


    /*var postData = {
      uid:'TBO2a6XqOAqS',
      pas:'hvc8habu',
      mob:'18192392952',
      cid:'2j6ACL7LGMl1',
      type:'json'
    };
    var content = querystring.stringify(postData);
    var options = {
      host:'api.weimi.cc',
      path:'/2/sms/send.html',
      method:'POST',
      agent:false,
      rejectUnauthorized : false,
      headers:{
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Content-Length' :content.length
      }
    };
    var req = http.request(options,function(res){
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        console.log(JSON.parse(chunk));
      });
      res.on('end',function(){
        console.log('over');
      });
    });
    req.write(content);
    req.end();*/
  });
});
module.exports = router;
