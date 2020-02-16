import "./App.css";
import React from "react";
import GithubCatRibbon from "github-cat-ribbon";
import morseCodes from "./MorseCodes";

class App extends React.Component {
	state = { text: "", morse: "" };

	textToMorse = eve => {
		let text = eve.target.value.toLowerCase();
		let morse = "";
		for (let i = 0; i < text.length; i++) {
			let chr = text.charAt(i);
			if (chr === " ") {
				morse += "   ";
			} else {
				morse += morseCodes[chr] + " ";
			}
		}
		let nmorse = morse.replace(" ", "\xa0");
		this.setState({ text: text, morse: nmorse });
	};

	getKeyByValue = (object, value) => {
		return Object.keys(object).find(key => object[key] === value);
	};

	morseToText = eve => {
		let nmorse = eve.target.value.replace(" ", "\xa0");
		let rmorse = "";
		for (let z = 0; z < nmorse.length; z++) {
			let ch = nmorse.charAt(z);
			if (ch === "." || ch === "-" || ch === "\xa0") {
				rmorse += nmorse.charAt(z);
			}
		}
		let morse = rmorse.split("\xa0\xa0\xa0");
		let text = "";
		for (let i = 0; i < morse.length; i++) {
			let word = morse[i].split("\xa0");
			for (let k = 0; k < word.length; k++) {
				let ww = word[k];
				console.log("ww:" + ww + "," + ww.length);
				if (ww.length > 0) {
					text += this.getKeyByValue(morseCodes, word[k]);
				}
			}
			text += " ";
		}
		this.setState({ text: text, morse: rmorse });
	};

	render() {
		return (
			<div className="app">
				<div className="title">Live Morse Code Translator</div>
				<textarea
					placeholder="Enter Text Here"
					className="textTa"
					value={this.state.text}
					onChange={this.textToMorse}
				></textarea>
				<textarea
					placeholder="Enter Morse Code Here"
					className="morseTa"
					value={this.state.morse}
					onChange={this.morseToText}
				></textarea>
				<GithubCatRibbon username="shivampip" reponame="morsify" />
			</div>
		);
	}
}

export default App;
