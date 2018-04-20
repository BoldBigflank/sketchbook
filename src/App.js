import React, { Component } from 'react';
import './App.css';
import Sketchpad from 'sketchpad/lib/sketchpad';

class App extends Component {
    state = {
        penSize:10,
        colors: [
        "#e63d4d",
        "#f9b528",
        "#ffef10",
        "#44a84c",
        "#2870ab",
        "#4a3079",
        "#9c3a83",
        "#71422c",
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

    handleSaveClick = () => {
        console.log(this.sketchpad.strokes);
    }

    render() {
        const {penSize, colors, color} = this.state;
        const colorSwatches = colors.map(swatch => {
            let style = {"backgroundColor": swatch }
            let classNames = ['color-swatch'];
            if (color === swatch) classNames.push("selected")
            return <div style={style} className={classNames.join(' ')} key={swatch} onClick={() => { this.handleColorClick(swatch) }}></div>
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
                    <button onClick={this.handleSaveClick}>Save</button>
                </div>
            </div>
        );
    }
}

export default App;
