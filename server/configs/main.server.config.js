/**
 * 根据环境变量获取配置信息
 * Created by SivenLee on 2017/3/14.
 */

var config = null;
var environment = null;
if(process && process.env && process.env.NODE_ENV){
    try{
        environment = process.env.NODE_ENV;
        config = require("./env/" + process.env.NODE_ENV + ".config.js");
    }catch (err){
        console.error("Error environment '"+ process.env.NODE_ENV +"', swift to 'production'");
        environment = "production";
        config = require("./env/production.config.js");
    }
}else{
    environment = "production";
    config = require("./env/production.config.js");
}
console.log("The current App operating environment : " + environment);

module.exports = config;
