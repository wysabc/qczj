//$on(eventName,function(){}) 绑定事件，可以绑定多个 {eventName:["事件1","事件2"]}


const eventList = {}
    

const $on = function(eventName,cb){
    if ( !eventList[eventName] ){
        eventList[eventName] = [];
    }
    eventList[eventName].push(cb)
}  

//$emit(eventName,params) 发送数据
 
const $emit  = function(eventName,params){
    if ( eventList[eventName] ){
        eventList[eventName].map( (cb)=>{
            cb(params);
        } )
    }else{
        return
    }
}

// $off(eventName,fn) 解绑事件
const $off = function(eventName,fn){
    if ( eventList[eventName] ){
        if( fn ){
            eventList[eventName] = eventList[eventName].filter((item)=>{
                return item != fn;
            })
        }else{
            eventList[eventName]  = [];
        }
    }
}
export default {
    $on,
    $off,
    $emit
}





