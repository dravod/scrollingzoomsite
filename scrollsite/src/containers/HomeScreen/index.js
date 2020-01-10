import React from 'react';
import {Component} from 'react';
import Example from '../../components/Example';

export default class HomeScreen extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
          
              
                {Example()}
              
            </div>
         );
    }
}