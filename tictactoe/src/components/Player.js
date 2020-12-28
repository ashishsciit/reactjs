import React,{ Component } from "react";

import '../App.css';

export class Player extends Component {
    playerStart(e){
        e.preventDefault();
        // console.log(e.target);
        this.props.player(e.target.player.value);
    }
    xSign = 'X';
    oSign = 'O';
    btnStyle = {
        background: '#358cdf',
        color: '#fff',
        width: '25%',
        margin: '5px auto',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '50px',
    }
    render() {
        
        return (
            <form onSubmit={(e) => this.playerStart(e)}>
                <h3>Pick your side</h3>
                
               <div className="playersArea">
                    <div className="player">
                    <label>
                        <div className="sign">
                        <span className="xSign">{this.xSign}</span>
                        <input type="radio" value={this.xSign} name="player" />
                        </div>
                        
                        
                    </label>
                    </div>
                    <div className="player">
                    <label>
                        <div className="sign">
                            <span className="oSign">{this.oSign}</span>
                            <input type="radio" value={this.oSign} name="player" />
                        </div>
                        
                    </label>
                    </div>
                </div>
                
                <input type="submit" style={this.btnStyle} value="Start"/>
                
            </form>
        );
    }
}

export default Player;