import React from "react";

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<div className="title">Morse Code Translator</div>
				<textarea
					className="asciiTa"
					value={this.state.text}
					onChange={eve => {
						this.setState({ text: eve.target.value });
					}}
				></textarea>
				<textarea className="morseTa"></textarea>"
			</div>
		);
	}
}

export default App;
