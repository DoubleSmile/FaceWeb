/**
 * Created by asus on 2015/8/16 0016.
 */
var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var Schema=new Schema({
    name:String,
    mail:String,
    subject:String,
    message:String
},{ versionKey: false });


var Message=mongoose.model('message',Schema,'message');

module.exports=Message;