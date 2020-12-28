import React,{ Component } from "react";
import Icon from '@material-ui/core/Icon';
import { Link } from "react-router-dom";


class PlayMode extends Component {
    btnStyle = {
        
    }
    signStyle = {
        fontSize: '72px',
        fontWeight: 'bold',
        marginBottom: '1rem',
    }
    iconStyle = {
        padding: '5px',
        margin: '15px auto',
        color: '#3168FF',
        width: '35px',
        height: '35px',
        border: '1px solid rgb(235, 235, 235)',
        boxShadow: '3px 6px 18px rgb(228,228,228)',
        borderRadius: '50%',

    }
    linkStyle = {
        background: '#358cdf',
        color: '#fff',
        width: '25%',
        margin: '10px auto',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '50px',
        textDecoration: 'none',
        cursor:'pointer',

    }
    render(){
        return (
            <div>
                <div style={this.signStyle}>
                    <span className="xSign">X</span>
                    <span className="oSign">O</span>
                </div>
                <div style={{margin: '15px 5px 15px 5px'}}>
                    <h4>Choose your play mode</h4>
                </div>
                <div style={{display:'flex',justifyContent: 'center', flexDirection: 'column'}}>
                    <Link style={this.linkStyle} to="/pickSide">With AI</Link>
                    <Link style={this.linkStyle} to="/pickSide">With a friend</Link>
                </div>
                <div style={this.iconStyle}>
                <Icon style={{fontSize:'24px', cursor: 'pointer'}}>settings</Icon>

                </div>
            </div>
        );
    }
}

export default PlayMode;