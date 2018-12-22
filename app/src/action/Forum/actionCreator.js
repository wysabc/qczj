import fetchJsonp from "fetch-jsonp"

export const long_nav_list = (page)=>({
    type : "LONG_NAV_LIST",
    payload:new Promise(resolve=>{
        if(page !="undefined"){
        //alert(1)
        let url = "https://m.autohome.com.cn/GetMoreUsingCarList?take=20&hashcode=m_cms_index_tab_usecar_2017_6_22-1544138794&pageindex="+page;
        fetchJsonp(url)
        .then(res=>res.json())
        .then((data)=>{
            console.log(data)
            resolve(data)
        })

  } 
 })


})