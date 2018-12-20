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


