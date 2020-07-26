import React,{Component} from 'react';

class LoginToogle extends Component{
    constructor(){
        super();
        this.state = {
            msg : " Log In"
        };
    }

    toogle = () =>{
        if(this.state.msg === " Log In")
            this.setState({msg : " Logout"})
        else if(this.state.msg === " Logout")
            this.setState({msg : " Log In"})
        else return;
    }
    render(){
        if(this.props.name){
            return(
                <a className="w3-bar-item w3-button" onClick={this.toogle}><i className="fa fa-flag"></i> {this.state.msg}</a>
            );
        }
        else{
            return(
                <a className="w3-bar-item w3-button" onClick={this.toogle} ><i className="fa fa-flag"></i>{this.state.msg}</a>
            );
        }
    }
}
export default LoginToogle;