import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class KServerInput extends Component {
    state = {
        input: '',
        startConfig: '',
        k: '',
        from: '',
        to: '',
        numOfRequests: ''
    }

    changeInput = (event) => {
        this.setState({
            input: event.target.value
        });
    }

    changeStartConfig = (event) => {
        this.setState({
            startConfig: event.target.value
        });
    }

    changeK = (event) => {
        this.setState({
            k: event.target.value
        });
    }

    changeFrom = (event) => {
        this.setState({
            from: event.target.value
        });
    }

    changeTo = (event) => {
        this.setState({
            to: event.target.value
        });
    }

    changeNumOfRequests = (event) => {
        this.setState({
            numOfRequests: event.target.value
        });
    }

    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    generateRandomInput = () => {
        let input = [];
        let startConfig = [];
        for (let i = 0; i < this.state.numOfRequests; i++) {
            let rnd = this.getRndInteger(parseInt(this.state.from, 10), parseInt(this.state.to, 10));
            input.push(rnd);
        }
        for (let i = 0; i < this.state.k; i++) {
            let rnd = this.getRndInteger(parseInt(this.state.from, 10), parseInt(this.state.to, 10));
            startConfig.push(rnd);
        }
        this.setState({ input })
        this.setState({ startConfig })
    }

    readInput = () => {
        const inputStr = this.state.input.toString();
        const withoutCommas = inputStr.replace(/,/g, " ");
        const inputArray = Array.from(withoutCommas.split(" "));
        const inputNumbers = inputArray.filter(Number);
        const startConfigStr = this.state.startConfig.toString();
        const withoutCommas2 = startConfigStr.replace(/,/g, " ");
        const inputArray2 = Array.from(withoutCommas2.split(" "));
        const startConfigNumbers = inputArray2.filter(Number);
        console.log(inputNumbers);
        console.log(startConfigNumbers);
        this.props.onSetInputArray(inputNumbers);
        this.props.onSetStartConfig(startConfigNumbers);
    };

    render() {
        return (
            <div>
                <h6>
                    Provide a starting configuration and an input with whole numbers, for separation use commas (",") or spaces (" ")!
                    The starting configuration will determine the number of servers.
                </h6>
                <div className="input-manual">
                    <label>
                        Starting configuration:
                    </label>
                    <input type="text" value={this.state.startConfig} onChange={this.changeStartConfig} />
                    <label>
                        Requests:
                    </label>
                    <input type="text" value={this.state.input} onChange={this.changeInput} />
                    <button className='btn btn-success' onClick={this.readInput}>Save</button>
                </div>
                <h6>
                    You can also generate a random input.
                </h6>
                <div className='input-random'>
                    <label>
                        Range: [
                    </label>
                    <input type="number" value={this.state.from} onChange={this.changeFrom} className='cache' />
                    <label>;</label>
                    <input type="number" value={this.state.to} onChange={this.changeTo} className='cache' />
                    <label>]</label>
                    <label>Number of servers:</label>
                    <input type="number" value={this.state.k} onChange={this.changeK} className='cache' />
                    <label>Number of requests:</label>
                    <input type="number" value={this.state.numOfRequests} onChange={this.changeNumOfRequests} className='cache' />
                    <Button variant="secondary" className='random-gen'
                        onClick={this.generateRandomInput}>Generate random input</Button>
                </div>
            </div>
        );
    }
}

export default KServerInput;