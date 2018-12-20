
import fetchJsonp from "fetch-jsonp"
export const get_recomment=()=>({
    type : "GET_CONTENT",
    payload :new Promise(resolve=>{
        let url="https://m.autohome.com.cn/getbrandhot?v=1&cityId=110100"
        fetchJsonp(url).
        then(res=>res.json()).
        then((data)=>{
            resolve(data)
        })
    })
})
export const get_ailisting=()=>({ 
  type:"GET_AILISTING",
  payload : new Promise(resolve=>{
      let url="https://live.m.autohome.com.cn/live/GetLiveRoomByIds?liveids=7945";
      fetchJsonp(url).
      then(res=>res.json()).
      then((data)=>{
          console.log(data)
          resolve(data)
      })

  })
})