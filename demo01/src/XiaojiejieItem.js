
import React, { Component } from 'react'; //imrc
import PropTypes from 'prop-types'


class XiaojiejieItem  extends Component { //cc
   //--------------主要代码--------start
   constructor(props){
       super(props)
       this.handleClick=this.handleClick.bind(this)
   }
   //--------------主要代码--------end
    render() { 
        // console.log('child-挂载组件')
        return ( 
            <li onClick={this.handleClick}>
                {this.props.avname} 为你做- {this.props.content}
            </li>
        );
    }
    handleClick(){
        this.props.deleteItem(this.props.index)
    }
    shouldComponentUpdate(nextProps, nextState) {
        // console.log('child-是否更新组件');
        console.log(nextProps)  //改变后的
        console.log(this.props.content); //改变前的
        
        // console.log(nextProps.content, this.props.content)
        if(nextProps.content !== this.props.content) {
            return true
        } else {
            return false
        }
    }
    // UNSAFE_componentWillUpdate() {
    //     console.log('child-组件将会更新')
    // }
    // componentDidUpdate() {
    //     console.log('child-组件更新完成')
    // }
    // UNSAFE_componentWillReceiveProps(){
    //     console.log('child-组件将接收到属性')
    // }
    // componentWillUnmount(){
    //     console.log('child-组将将会删除')
    // }
}
 
XiaojiejieItem.propTypes = {
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number,
    avname:PropTypes.string.isRequired
}

export default XiaojiejieItem;