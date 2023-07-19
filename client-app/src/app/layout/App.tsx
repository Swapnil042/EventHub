import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Container, Header, List } from 'semantic-ui-react';
import {v4 as uuid} from 'uuid';

import { Activity } from '../models/activity';
import { NavBar } from './NavBar';
import { ActivityDashboard } from '../../features/activities/dashboard/ActivityDashboard';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities')
      .then(response => {
        setActivities(response.data);
      })
  }, []);

  const handleSelectActivity = (id: string)=>{
    setSelectedActivity(activities.find(activity => activity.id === id));
  }

  const handleCancelSelectActivity = ()=>{
    setSelectedActivity(undefined);
  }

  const handleFormOpen = (id? : string) =>{
    id ? handleSelectActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  }

  const handleFormClose = ()=>{
    setEditMode(false);
  }

  const handleFormEditOrUpdate = (activity : Activity)=>{
    activity.id ? setActivities([...activities.filter(x=> x.id !== activity.id), activity])
    : setActivities([...activities, {...activity, id: uuid()}]);
    handleFormClose();
    setSelectedActivity(activity);
  }

  return (
    <div>
        <NavBar openForm = {handleFormOpen}/>
        <Container style={{marginTop: '7em'}}>
          <ActivityDashboard 
            activities = {activities} 
            selectedActivity = {selectedActivity}
            editMode={editMode}
            selectActivity = {handleSelectActivity}
            cancelSelectActivity = {handleCancelSelectActivity}
            openForm = {handleFormOpen}
            closeForm = {handleFormClose}
            createOrEdit={handleFormEditOrUpdate}/>
        </Container>
        
    </div>
  );
}

export default App;
