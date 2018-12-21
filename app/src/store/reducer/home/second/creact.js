
const defaultState={
    navlist :[
        {name:"全部" ,src: "/creact/all"},
        {name:"新闻" ,src: "/creact/news"},
        {name:"试驾" ,src: "/creact/try" },
        {name:"导购",src: "/" },
        {name:"用车", src: "/"},
        {name:"文化" ,src: "/"},
        {name:"技术" ,src: "/"},
        {name:"改装" ,src: "/"},
        {name:"二手车" ,src: "/"},
        {name:"车家号" ,src: "/"},
        {name: "话题",src: "/"}
    ],
    indexInfo :0
}
export default (state=defaultState,action)=>{
    return state
}