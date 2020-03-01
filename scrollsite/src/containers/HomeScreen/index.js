import React from 'react';
import {Component} from 'react';
import Main from '../../components/ScrollingAnimation';

export default class HomeScreen extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
          
              
                {Main()}
              
            </div>
         );
    }
}