import React from 'react';
import MemeData from './MemeData';
import Meme from './Meme';

class App extends React.Component {

    state = {
        memeData: {}
    }

    getData = data => {
       this.setState({memeData: data});
    }    
    
    render(){
        return(
            <div className='ui grid container'>
                <div className='ui row'>
                    <div className='column eight wide'>
                        <MemeData getData={this.getData} />
                    </div>
                    <div className='column eight wide'>
                        <Meme receivedData={this.state.memeData} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;