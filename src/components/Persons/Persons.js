import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {
      constructor(props) {
            super(props);
            console.log('[Persons.js] Inside Constructor.', props);
      }
        
      componentWillMount() {
            console.log('[Persons.js] Inside ComponentWillMount.');
      }
      
      componentDidMount() {
            console.log('[Persons.js] Inside ComponentDidMount.');
      }

      componentWillReceiveProps (nextProps) {
            console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
      }

      componentWillUpdate (nextProps, nextState) {
            console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
      }

      componentDidUpdate () {
            console.log('[UPDATE Persons.js] Inside componentDidUpdate');
      }

      render () {
            console.log('[Persons.js] Inside render()');
            return this.props.persons.map( (person, index) => {
                  return <Person 
                      click={() => this.props.clicked(index)}
                      changed={(event) => this.props.changed(event, person.id)}
                      name={person.name} 
                      age={person.age}
                      key={person.id} />        
                } );
          
      }
}

export default Persons;      
