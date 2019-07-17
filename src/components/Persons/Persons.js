import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component{

  static getDerivedStateFromProps(props,state){
    console.log('[Persons.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillReceiveProps(props){
  //   console.log('[Persons.js] componentWillReceiveProps', props);
  // }

  shouldComponentUpdate(nextProps,nextState){
    console.log('[Persons.js] componentShouldUpdate',nextProps);
    if(nextProps.persons !== this.props.persons){
      return true;
    }
    else{
      return false;
    }
  } // if you put validation on each fields and methods of props 
    //then use PureComponent instead of Component

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message : 'SnapShot'};
  }

  componentDidUpdate(prevProps,prevState,snapshot){
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount(){
    console.log("[Persons.js] componentWillUnmount")
  }

  render(){
    console.log('[Persons.js] rendering...');
  return this.props.persons.map((person, index) => {
    return (
      <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={event => this.props.changed(event, person.id)}
      />
    );
  });
  }
}


export default Persons;
