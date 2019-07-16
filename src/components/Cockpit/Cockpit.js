import React,{ useEffect} from 'react';

import classes from './Cockpit.css';

const cockpit = ( props ) => {
    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      setTimeout(()=>{
        alert("saved data successfully!")
      },1000);
    },[])//blank array indicates that there is no dependency to chage on which it has to be called
        // so it will called only on startup 
        // if we want to call this hook on updatin value then we have to pass that valu into array

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if ( props.persons.length <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.persons.length <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;