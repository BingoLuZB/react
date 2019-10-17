
import React,{Component,Fragment } from 'react'

import './style.css'
import XiaojiejieItem from './XiaojiejieItem'
import Boss from './Boss'
import axios from 'axios'

class Xiaojiejie extends Component{
//js的构造函数，由于其他任何函数执行
    constructor(props){
        super(props) //调用父类的构造函数，固定写法
        this.state={
            inputValue:'' , // input中的值
            list:['基础按摩','精油推背'],    //服务列表
            a: true
        }
    }

    inputChange(e){
        this.setState({
            inputValue:this.input.value
        })
    }
    //增加服务的按钮响应方法
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        },() => {
            // console.log(this.ul.querySelectorAll('li').length)
        })
    }
    //删除单项服务
    deleteItem(index){
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })
        
    }

    // UNSAFE_componentWillMount() {
    //     console.log('挂载前')
    // }
    render(){
        // console.log('挂载中')
        return  (
            <Fragment>
                {/* 正确注释的写法 */}
                <div>
                    <label 
                        htmlFor="jspang"
                        >
                        加入服务：
                    </label>
                    <input 
                        id="jspang" 
                        className="input" 
                        value={this.state.inputValue} 
                        onChange={this.inputChange.bind(this)} 
                        ref={(input) => {this.input=input}}
                    />
                    <button 
                        onClick={this.addList.bind(this)}
                        > 
                        增加服务 
                    </button>
                </div>
                <ul ref = {(ul) => {this.ul = ul}}>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                //----------------关键修改代码----start
                                    <XiaojiejieItem 
                                        key={index}
                                        content={item} 
                                        index={index} 
                                        avname='波多野结衣'
                                        deleteItem={this.deleteItem.bind(this)}
                                    />
                                //----------------关键修改代码----end
                            
                            )
                        })
                    }
                </ul>  
                <Boss></Boss>
            </Fragment>
        )
    }
    componentDidMount() {
        console.log('挂载后')
        axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
        .then((res)=>{console.log('axios 获取数据成功:'+JSON.stringify(res))  })
        .catch((error)=>{console.log('axios 获取数据失败'+error)})
    }

    // shouldComponentUpdate() {
    //     console.log('是否更新组件');
    //     return true
    // }
    // UNSAFE_componentWillUpdate() {
    //     console.log('组件将会更新')
    // }
    // componentDidUpdate() {
    //     console.log('组件更新完成')
    // }
    

}
export default Xiaojiejie