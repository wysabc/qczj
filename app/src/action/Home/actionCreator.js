
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
            //console.log(data.list)
            resolve(data)
        })
    })

})
export const car_money=()=>({
    type :"CAR_MONEY",
    payload :new Promise(resolve=>{
        let url ="https://j.api.autohome.com.cn/api/loancar/index"
        fetchJsonp(url).
        then(res=>res.json()).
        then((data)=>{

            //console.log(data.result)
            resolve(data)
        })
    })
})
export  const size_car=()=>({
    type :"SIZE_CAR",
    payload :new Promise(resolve=>{
        let url=" https://api.che168.com/auto/ForAutoMHotBrand_v2.ashx?_appid=cms&pid=&cid=440100"
        fetchJsonp(url).
        then(res=>res.json()).
        then((data)=>{
            resolve(data)
            //console.log(data)
        })
    })

})

export const adever_car=()=>({
    type : "ADVER_CAR",
    payload : new Promise(resolve=>{
        let url ="https://data.autohome.com.cn/rcm/automobile/lands?devicetype=iphone&uid=0&userip=111.203.254.34&sessionid=3EF3FE4F-26A9-4BD8-B454-895496AAAE70&sessionidbak=&blackarticlelist=3-2161534,3-2161616,12-3118972,14-3118972,3-2161543,1-927295,1-921290&source=mobile&operation=1&version=0&outmedia=16383&number=0"
        fetchJsonp(url).
        then(res=>res.json()).
        then((data)=>{
            console.log(data)
        })
    })
})