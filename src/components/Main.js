import React, {Component} from 'react';
import Title from './title';
import Photowall from './photowall';
import AddPhoto from './addPhoto';
import {Route} from 'react-router-dom';
import SinglePhoto from './singlePhoto';

   
class Main extends Component{
    constructor(){
        super();
        this.state = {
            posts: []
        };
    }

    render() {
        return (
            <div>
                <Route exact path="/" render={()=> (
                    <div>
                        <Title title={'Sweet Memories'}/>
                        <Photowall {...this.props} onNavigate={this.navigate}/>
                    </div>
                )}/>
                <Route path="/Addphoto"  render={({history})=> (
                    <div>
                        <AddPhoto {...this.props} onHistory={history}/>
                    </div>
                )}/>
                 <Route path="/Single/:id"  render={(params)=> (
                    <div>
                        <Title title={'Sweet Memories'}/>
                        <SinglePhoto {...this.props} {...params}/>
                    </div>
                )}/>
            </div>
        )
        
    
        }
    }
 export default Main;

