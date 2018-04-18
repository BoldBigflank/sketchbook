import React, { Component } from 'react';
import './App.css';
import Sketchpad from 'sketchpad/lib/sketchpad';

class App extends Component {
    state = {
        penSize:10,
        colors: [
        "#FF00FF",
        "#00FF00",
        "#FF0000",
        "#000000",
        "#FFFFFF"
        ],
        color: "#000000"
    }
    componentDidMount() {
        this.sketchpad = new Sketchpad({
            element: '#sketchpad',
            width:400,
            height:400,
            penSize: 10
        });
        this.handleColorClick(this.state.colors[0]);
    }

    handleColorClick = (color) => {
        this.setState({
            color: color
        })
        this.sketchpad.color = color;
    }
    handlePenSizeClick = () => {
        this.setState({
            penSize: (this.state.penSize === 10) ? 20 : 10
        })
        console.log("setting penSize", this.state.penSize);
        this.sketchpad.penSize = this.state.penSize;
    };

    render() {
        const {penSize, colors, color} = this.state;
        const colorSwatches = colors.map(color => {
            let style = {"backgroundColor": color }
            let classNames = ['color-swatch'];
            if (color == this.state.color) classNames.push("selected")
            return <div style={style} className={classNames.join(' ')} key={color} onClick={() => { this.handleColorClick(color) }}></div>
        });
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Sketchbook</h1>
                </header>
                <div className="color-palette">
                    { colorSwatches }
                </div>
                <div className="canvas-container">
                    <canvas id="sketchpad"></canvas>
                </div>
                <div className="canvas-buttons">
                    <button onClick={() => {this.sketchpad.undo()}}>undo</button>
                    <button onClick={() => {this.sketchpad.redo()}}>redo</button>
                    <button onClick={this.handlePenSizeClick}>Size {penSize}</button>
                </div>
            </div>
        );
    }
}

export default App;
