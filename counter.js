import React,{components} from 'react';
class Counter1 extends components{
    constructor(Props){
        super(Props)
        this.state={Count:0}
    }
    render(){
        return(<div>
            <button onClick={this.handleCount}>Count-{this.state.Count}</button>
        </div>);
    }
    handleCount=()=>{this.setState({Count:this.state.Count+1})};
}
export default Counter1;
