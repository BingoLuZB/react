import React, { Component } from 'react';
import { Button } from 'antd-mobile'
import { observer, inject } from 'mobx-react'
import '../index.scss'

@inject("homeStore")
@observer
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <button onClick={() => { this.props.history.push('/one') }}>
                    跳到第一个页面
                </button>
                <div className="test" >
                    654654
                </div>
                <Button type="primary">button</Button>
                <div>
                    <h1>首页数据源的number为:{this.props.homeStore.homeNum}</h1>
                    <button onClick={() => {this.props.homeStore.addNum()}} className='btn1'>
                        点击添加
                    </button>
                    <button  onClick={() => {this.props.homeStore.lessNum()}}>
                    点击删除
                    </button>
                </div>
            </div>
         );
    }
}
 
export default Home;