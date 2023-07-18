import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Container, Header, List } from 'semantic-ui-react';

import { Activity } from '../models/activity';
import { NavBar } from './NavBar';
import { ActivityDashboard } from '../../features/activities/dashboard/ActivityDashboard';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities')
      .then(response => {
        setActivities(response.data);
      })
  }, [])

  return (
    <div>
        <NavBar/>
        <Container style={{marginTop: '7em'}}>
          <ActivityDashboard activities={activities}/>
        </Container>
        
    </div>
  );
}

export default App;