import React, { Component } from "react";
// import {browserHistory} from 'react-router';
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import ClickImage from "../../components/ClickImage";
import "./ClickerGame.css";
// import characters from "./characters.js";
import charactersLunatic from "./charactersLunatic.js";
// import API from "../../utils/API";
import isLoggedIn from "../../utils/isLoggedIn";
// import axios from "axios";

// <Banner h11="Poop" h12="Pooperoni" p1="Pooperoni Pooperoni Pooperoni Pooperoni" p2="Poop Poop Poop Poop Poop Poop Poop Poop" />

class ClickerGame extends Component {
	state = {
		loggedIn:false,
		correctClicks: 0,
		lives: 5,
		score:0,
		characters: this.props.lunatic ? charactersLunatic : charactersLunatic,
		currentChoice:0,
		chosen:[],
		highScore:0,
		wrong:"false",
		wrongStreak:[],
		dead:"false",
		lunatic: this.props.lunatic ? "true" : "false"
	}

	componentWillMount(){
		console.log("componentWillMount");
		console.log('loggedinstate '+this.state.loggedIn);
		// // axios.request({
  // // 			url: 'http://localhost:3001/users/profile',
  // // 			method: 'get',
  // // 			headers: {'Authorization':localStorage.getItem('jwt')}
		// // }).then(res=>{console.log(res);}).catch(err=>{console.log(err);});
		// if(localStorage.getItem('jwt')){
		// 	API.checkLoggedIn(localStorage.getItem('jwt'))
		// 		.then(res=>{console.log(res);})
		// 		.catch(err=>{console.log(err);});
		// }
		// else{
		// 	this.props.history.push('/login');
		// }
		isLoggedIn(this.props.history,(res)=>{this.setState({loggedIn:true},()=>{console.log('loggedinstate '+this.state.loggedIn);}),console.log(res);});
	}

	shuffle = (array) => {
		var currentIndex = array.length, temporaryValue, randomIndex;
		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}
		this.setState({characters:array})
	}

	checkMultiple = (score)=>{
		if(score%this.state.characters.length === 0){
			return true;
		}
		else{
			return false;
		}
	}
//poop
	rotate360 = (lunatic)=>{
		if(lunatic==="true"){
			return "container animated infinite rotate360 lunatic"
		}
		else{
			return "container"
		}
	}

	gameUpdate = id => {
		console.log('clicked');
		console.log(`id ${id}`);
		var chosen = this.state.chosen;
		this.setState({currentChoice:id,wrong:"false"},()=>{
			if (chosen.length < this.state.characters.length && chosen.length >0){
				var counter = 0;
				for(var i = 0; i<chosen.length; i++){
					// console.log('looping');
					if(id===chosen[i]){
						console.log('already chosen');
						console.log(chosen);
						if(this.state.wrongStreak.includes(id)){
							break;
						}
						this.setState({lives:this.state.lives-1,wrong:"true",wrongStreak:this.state.wrongStreak.concat(id)},
							()=>{
								if(this.state.lives < 1){
									if(this.state.score > this.state.highScore){
										this.setState({highScore:this.state.score,score:0,lives:5,chosen:[],dead:"true",wrongStreak:[]},()=>{this.shuffle(this.state.characters);
											console.log('dead');});
									}
									else{
										this.setState({score:0,lives:5,chosen:[],dead:"true"},()=>{this.shuffle(this.state.characters);
											console.log('dead');});
									}
								}
							})
						break;
					}
					else{
						counter++;
						if (counter === chosen.length){
							this.setState({chosen:chosen.concat(id),score:this.state.score+1,wrongStreak:[]},
								()=>{
									if(this.state.score > this.state.highScore){
										this.setState({highScore:this.state.score});
									}
									if(this.checkMultiple(this.state.score)){
										this.setState({chosen:[]});
										this.shuffle(this.state.characters);
									}
									else{
										console.log(this.state.chosen);
										this.shuffle(this.state.characters);
									}
								}
							)
						}
					}
				}
			}
			else{
				console.log('elsing');
				this.setState({chosen:chosen.concat(id),score:this.state.score+1,dead:"false",wrongStreak:[]},function(){
					console.log(this.state.chosen);
					if(this.state.score>this.state.highScore){
						this.setState({highScore:this.state.score});
					}
					this.shuffle(this.state.characters);
				});
			}
		})
	}

	render() {
		return (
			<div>
				<Navbar loggedIn={this.state.loggedIn} />
				<div className="container">
					<h1 className="poop">Clicker Game</h1>
					<p className="poop">Score: {this.state.score}</p>
					<p className="poop">High Score: {this.state.highScore}</p>
					<p className="poop">Lives: {this.state.lives}</p>
				</div>
				<div className={this.rotate360(this.state.lunatic)}>
					{this.state.characters.map(character=>(
						<ClickImage 
							key={character.id} 
							style={{backgroundImage:"url("+character.img+")"}} 
							id={character.id} 
							onClick={()=>this.gameUpdate(character.id)} 
							dead={this.state.dead} 
							wrong={this.state.wrong} 
							wrongstreak={this.state.wrongStreak}
							currentchoice={this.state.currentChoice}
							lunatic=""
						/>
					))}
				</div>
			</div>
		)
	}
}

export default ClickerGame;