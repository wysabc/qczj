
import fetchJsonp from "fetch-jsonp"
export const get_recomment=()=>({
    type : "GET_CONTENT",
    payload :new Promise(resolve=>{
        let url="https://m.autohome.com.cn/getbrandhot?v=1&cityId=110100"
        fetchJsonp(url).
        then(res=>res.json()).
        then((data)=>{
            console.log(data)
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
         
          resolve(data)
      })

  })
})
export const low_price =()=>({
    type : "LOW_PRICE",
    payload:new Promise(resolve=>{
        let url="https://m.autohome.com.cn/getlowpricecars?cityId=440100&userId=0&deviceId=&phone=&v=1545392845282"
        fetchJsonp(url).
        then(res=>res.json()).
        then((data)=>{
            //console.log(data.list)
            resolve(data)
        })
    })
})

export const use_car=()=>({
    type:"USE_CAR",
    payload : new Promise(resolve=>{
        let url="https://m.autohome.com.cn/GetMoreUsingCarList?take=20&hashcode=m_cms_index_tab_usecar_2017_6_22-1544138794&pageindex=1"
        fetchJsonp(url).
        then(res=>res.json()).
        then((data)=>{
            console.log(data.list)
            resolve(data)
        })
    })

})