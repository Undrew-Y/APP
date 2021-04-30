module.exports = {
    devServe:{
     open:true,
     host:'localhost',
     port:8080,
     Proxy:{
         '/mmdb':{
             target:'https://wx.maoyan.com',
             ws:true,
             changOrigin:true,
         }
     }
    }
}