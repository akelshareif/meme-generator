import React from 'react';
import '../text.css';

class Meme extends React.Component {

    render(){
        return(
            <div>
                <img ref="image" src={this.props.receivedData.url}  className='imgSize' alt='memeImage'/>
                <div className='topText'>{this.props.receivedData.top}</div>
                <div className='bottomText'>{this.props.receivedData.bottom}</div>
            </div>
        );
    }
}

export default Meme;