import React from 'react';

class MemeData extends React.Component {

    state = {
        url: '',
        top: '',
        bottom: ''
    }

    onSubmit = event => {
        event.preventDefault();
        this.props.getData(this.state);
    }

    handleURL = event => {
        this.setState({url: event.target.value});
    }

    handleTop = event => {
        this.setState({top: event.target.value});
    }

    handleBottom = event => {
        this.setState({bottom: event.target.value});
    }

    render(){
        return(
            <form onSubmit={this.onSubmit} className='ui form'>
                <div className='field'>
                    <label>Image URL</label>
                    <input type='text' name='url' placeholder='Image URL' value={this.state.url} onChange={this.handleURL} />
                </div>
                <div className='field'>
                    <label>Top Text</label>
                    <input type='text' name='top' placeholder='Top Text' value={this.state.top} onChange={this.handleTop} />
                </div>
                <div className='field'>
                    <label>Bottom Text</label>
                    <input type='text' name='bottom' placeholder='Bottom Text' value={this.state.bottom} onChange={this.handleBottom} />
                </div>
                <button className='ui primary button' type='submit'>Generate Meme!</button>
            </form>
        );
    }
}

export default MemeData;