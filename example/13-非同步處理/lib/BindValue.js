function BindValue(obj, key, callback){
    var val = obj[key];
    Object.defineProperty(obj, key,{
        get:function(){
            return val;
        },
        set:function(value){
            val = value;
            callback(val);
        }
    });
}