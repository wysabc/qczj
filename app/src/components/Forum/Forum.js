import React, { Component, Fragment } from "react"
import Banner from "./forum/banner"
import Subforum from "./forum/subforum"
import List from "./forum/list"
import Nav from "./forum/nav"
import { connect } from "react-redux"
import { long_nav_list } from "../../action/Forum/actionCreator";
import "./css/forum.css"
import BScroll from "better-scroll"
<<<<<<< HEAD

class Forum extends Component{
    constructor(){
=======
class Forum extends Component {
    constructor() {
>>>>>>> wang3
        super();
        this.state = {
            imglist: [
                "https://club2.autoimg.cn/album/g29/M09/E0/85/userphotos/2018/12/20/19/ChcCSFwbgwGAbToYAAQvQv5JLUI287.jpg",
                "https://club2.autoimg.cn/album/g28/M02/B3/C8/userphotos/2018/12/11/10/ChsEfVwPIfeAOUL0AATO0gt1Zvg029.jpg",
                "https://club2.autoimg.cn/album/g27/M09/DE/97/userphotos/2018/12/19/17/ChsEfFwaDs2AeSrwAALxMHwATyQ576.jpg",
                "https://club2.autoimg.cn/album/g26/M09/BC/AD/userphotos/2018/12/13/17/ChcCP1wSKoGADIXNAAMKRqRWcY8137.jpg",
                "https://club2.autoimg.cn/album/g2/M09/70/6C/userphotos/2018/11/25/23/ChsEkFv6v-yAYkWRAAPi0l-5YYg244.jpg",
                "https://club2.autoimg.cn/album/g3/M07/D4/3F/userphotos/2018/12/17/15/ChcCRVwXUmWATHv4AALwzP8Ho_U898.jpg",
                "https://club2.autoimg.cn/album/g26/M06/68/9A/userphotos/2018/11/26/09/ChcCP1v7UvKAIu-jAAPf14NJpYg758.jpg"
            ],
            logolist: [
                { src: "https://club2.autoimg.cn/album/g27/M0B/B5/8E/userphotos/2018/08/22/10/wKgHE1t8zOKAW-mNAAAVAdzHGT4904.jpg", name: "精选" },
                { src: "https://club2.autoimg.cn/album/g28/M03/B4/50/userphotos/2018/08/22/10/wKgHFFt8zNGAeuuqAAAUSnhcnQA859.jpg", name: "Young" },
                { src: "https://club2.autoimg.cn/album/g26/M02/B7/D4/userphotos/2018/08/22/10/ChcCP1t8zMWATrnLAAAUAcsdC1w362.jpg", name: "车友圈" },
                { src: "https://club2.autoimg.cn/album/g26/M09/B7/BF/userphotos/2018/08/22/10/wKgHHVt8zLaAVlwWAAAUkFfqF50221.jpg", name: "智能问答" },
                { src: "https://club2.autoimg.cn/album/g1/M09/7B/80/userphotos/2018/08/22/10/wKgHFVt8zG6ARP3xAAAQmbYoubg625.jpg", name: "直播" },
                { src: "https://club2.autoimg.cn/album/g1/M01/7B/7C/userphotos/2018/08/22/10/wKgHFVt8zFaANL-qAAASWvM9IvY788.jpg", name: "视频" },
                { src: "https://club2.autoimg.cn/album/g29/M05/B4/C8/userphotos/2018/08/22/10/wKgHG1t8zBSAJP1NAAASrEobVw4517.jpg", name: "认证车主" }

            ],
            forumlist: [
                "暂无常用论坛"
            ],
            subfor_logo: [
                { src: "//s.autoimg.cn/club/forums_m/images/sort-series.png", name: "热门车系论坛", path: "#" },
                { src: "//s.autoimg.cn/club/forums_m/images/sort-locate.png", name: "地区论坛", path: "#" },
                { src: "//s.autoimg.cn/club/forums_m/images/sort-theme.png", name: "主题论坛", path: "#" },
                { src: "//s.autoimg.cn/club/forums_m/images/sort-motor.png", name: "摩托车论坛", path: "#" }
            ],
            flag:false
        }
    }
<<<<<<< HEAD
    render(){
     
        let {imglist,logolist,forumlist,subfor_logo} = this.state;
        let {navlist} = this.props;
        console.log(this.props)
        return(
            <div className = "wrapper" ref = "wrapper"> 
            <div className = "content">
            <div className = "forum">
                <Banner imglist = {imglist} logolist = {logolist}/>
                <Subforum forumlist = {forumlist} subfor_logo = {subfor_logo}/>
                <Nav logolist = {logolist}/>
                <List navlist = {navlist}/>
                </div>
         </div>   
=======
    render() {
        let { imglist, logolist, forumlist, subfor_logo ,flag} = this.state;
        let { list } = this.props;
        return (
            <Fragment>
               { flag ? <Nav logolist={logolist} /> :""}
            <div className="wrapper" ref="wrapper">
                <div className="content">
                    <div className="forum">
                        <Banner imglist={imglist} logolist={logolist} />
                        <Subforum forumlist={forumlist} subfor_logo={subfor_logo} />
                        { flag? "":<Nav logolist={logolist} /> }
                        <List list={list} />
                    </div>
                    </div>
>>>>>>> wang3
            </div>
            </Fragment>
        )
    }
<<<<<<< HEAD
    componentDidMount(){
        this.scroll = new BScroll(this.refs.wrapper,{
            click:true,
            pullUpLoad:true,
            probeType:2
        });

        this.scroll.on("pullingUp",()=>{
            this.props.getNavData(this.props.page);
        })
=======
    componentDidMount() {
        this.scroll = new BScroll(this.refs.wrapper, {
            click: true,
            pullUpLoad: true,
            probeType: 2
        });
        this.props.getNavData(this.props.page);
        this.scroll.on("pullingUp", () => {
            this.props.getNavData(this.props.page);
        })
        this.scroll.on("scroll",(offset)=>{
            if( offset.y <= -1119 ){
               this.setState({
                   flag:true
               })
            }else{
                this.setState({
                    flag:false
                })
            }
        })
>>>>>>> wang3

    }
    componentDidUpdate() {
        this.scroll.refresh();//重新计算高度
        this.scroll.finishPullUp(); //当数据加载完毕以后通知better-scroll可以进行下一次上拉加载
    }
}

const mapStateToProps = (state) => ({
    list: state.Longnav.list,
    page: state.Longnav.page
})
const mapDispatchToProps = (dispatch) => ({
    getNavData(params) {
        dispatch(long_nav_list(params));
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Forum)