import React,{ Component } from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Icon from '@material-ui/core/Icon';

import './App.css';
import Status from "./components/Status";
import PlayMode from "./components/PlayMode";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      board : Array(9).fill(null),
      player: null,
      winner: null,
    }
  }

  checkWinner(){
    let winLines = [
      ["0","1","2"],
      ["3","4","5"],
      ["5","7","8"],
      ["0","3","6"],
      ["1","4","7"],
      ["2","5","8"],
      ["0","4","8"],
      ["2","4","6"],
    ];
    this.checkMatch(winLines); 
  }

  checkMatch(winLines){
    let board = this.state.board

    for(let i = 0; i<winLines.length; i++) {
      const [a,b,c] = winLines[i];
      if(board[a] !== null && board[b] !== null && board[c] !== null){
        if(board[a] === board[b] && board[a] === board[c]){
          this.setState({winner: this.state.player});
          alert("Player "+this.state.player+' is Winner!');
        }
        // else if(this.state.winner === null && i === 7){
        //   // alert("Match Drawn");
        //   this.setState({board: this.state.board.fill(null), player: null});
        // } 
      }
    }
  }

  boxClick(index) {
    if(this.state.player !== null){
      if(this.state.board[index] === null && !this.state.winner){
        let newBoard = this.state.board;
        newBoard[index] = this.state.player;
        this.setState({board: newBoard, player: this.state.player === 'X' ? 'O' : 'X'});
        this.checkWinner();
      }
    }
  }


  setPlayer(player){
    this.setState({player});

  }

  renderBoxes(){
    return (
      this.state.board.map(
        (box,index) => 
          <div className="box" key={index} 
          onClick={() => this.boxClick(index)}>
          <span className={box === 'X' ? 'sign xSign' : 'sign oSign'}>{box}</span>
        </div>
      )
    );
  }

  gameRestart(e){
    this.setState({board: this.state.board.fill(null), player: null, winner: null});
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

  render(){ 
    return (
      <Router>
      <div className="App">
        <div>
        <Route exact path='/' render={props => (
          <React.Fragment>
          <PlayMode />
          </React.Fragment>
        )} />
        <Route path="/pickSide" render={props => (
          <React.Fragment>
          <Status 
            player={this.state.player} 
            winner={this.state.winner} 
            setPlayer={(e) => this.setPlayer(e)} 
            gameRestart={(e) => this.gameRestart(e)}
          />
          <div className="board">
  
          {this.renderBoxes()}
          <Link style={{margin: 'auto'}} to="/"><Icon style={this.iconStyle}>keyboard_backspace</Icon></Link>
        </div>
          </React.Fragment>
        ) } />
        
        </div>
        <Route path="/gameBoard" render={props => (
          <React.Fragment>
          
          </React.Fragment>
        )} />
        
      </div>
      </Router>
    );
  } 
}

export default App;
