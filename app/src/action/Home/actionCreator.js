
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
