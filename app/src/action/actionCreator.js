import {fetch} from "whatwg-fetch";

///webapi/api/GetMultiRecForBox?uid=72C07AC0-F871-4798-A01B-DC735B935A4A&count=1&city=110100
export const head_list_action = ()=>({
    type : "HEAD_LIST",
    payload: new Promise(resolve=>{
        let url = "/webapi/api/GetMultiRecForBox?uid=72C07AC0-F871-4798-A01B-DC735B935A4A&count=1&city=110100";
        fetch(url)
        .then(res=>res.json())
        .then((data)=>{
            data = data.result.list
            resolve(data)

        })
    })
})
 export const login_action = (tel,pwd)=>({
  
     type : "LOGIN_ACTION",
     payload: new Promise(resolve=>{
        console.log(tel,pwd)
        let url = "http://localhost:3000/user";
        fetch(url)
        .then(res=>res.json())
        .then((data)=>{
            data = data.filter((item)=>{
                return item.tel == tel && item.pwd == pwd;
            })
            resolve(data)
            
        })
    })
 })
 export const register_action = (tel,pwd)=>({
    type : "REGISTER_ACTION",
    payload: new Promise(resolve=>{
       console.log(tel,pwd)
       let url = "http://localhost:3000/user";
       fetch(url,{
           method:"post",
            body:JSON.stringify({tel:tel,pwd:pwd}),
            herders:{
                "content-type":"application/json"
            }
       })
       .then(res=>res.json())
       .then((data)=>{
           console.log(data)
          // data.push({tel:tel,pwd:pwd})
           resolve({tel:tel,pwd:pwd})
           
       })
   })
})