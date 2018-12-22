import {fetch} from "whatwg-fetch";

export const findcar_list_action = ()=>({
   type : "FINDCAR_LIST",
        payload: new Promise(resolve=>{
            let url = "/hotcarlevel/getrankseries?cityId=110100&level=0";
            fetch(url)
            .then(res=>res.json())
            .then((data)=>{
                 resolve(data)

            })
        })
})

export const quick_car = ()=>({
     type : "QUICK_CAR_ACTION",
     payload:new Promise(resolve=>{
          let url = "/hotcar/getrankbrand?cityId=210300";
          fetch(url)
          .then(res=>res.json())
          .then((data)=>{
               resolve(data)
          })
     })
})

export const all_list_action = ()=>({
     type : "ALL_CAR_ACTION",
     payload:new Promise(resolve=>{
          let url = "/hotcarlevel/getrankseries?cityId=210300&level=0";
          fetch(url)
          .then(res=>res.json())
          .then((data)=>{
             
               resolve(data)
               
          })
     })
})




