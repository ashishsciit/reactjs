import React,{ Component } from "react";
import Player from './Player';

export class Status extends Component {
    btnStyle = {
        background: '#358cdf',
        color: '#fff',
        width: '25%',
        margin: '5px auto',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '50px',
    }
    renderHtml(){
        if(this.props.winner){
            return <h2>Winner is {this.props.winner} {' '} <input style={this.btnStyle} type="button" value="Restart" onClick={(e) => this.props.gameRestart(e)}/></h2>
        }else{
            return this.props.player ? 
            <h2>Next Player is {this.props.player}</h2> : 
        <Player player={(e) => this.props.setPlayer(e)} />
        }
    }
    render(){
        return (this.renderHtml());
    }
}
export default Status;