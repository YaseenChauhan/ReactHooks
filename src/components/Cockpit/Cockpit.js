import React,{ useEffect} from 'react';

import classes from './Cockpit.css';

const cockpit = ( props ) => {
    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      const timer  = setTimeout(() => {
        alert("saved data successfully!")
      },1000);
      return () => {
        clearTimeout(timer)
        console.log('[Cockpit.js] clean up ');
      }
    },[]);
        
        //blank array indicates that there is no dependency to chage on which it has to be called
        // so it will called only on startup 
        // if we want to call this hook on updatin value then we have to pass that valu into array

        useEffect(() => {
          console.log('[Cockpit.js] 2nd useEffect');
          return () => {
            console.log('[Cockpit.js] 2nd useEffect clean up ');
          }
        })//it will call after each re-rendering process

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if ( props.personLength <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.personLength <= 1 ) {
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

export default React.memo(cockpit);