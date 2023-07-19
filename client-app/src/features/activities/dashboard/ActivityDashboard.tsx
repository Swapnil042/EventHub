import React  from "react";
import { Grid, List } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../forms/AcitivityForm";

interface Props{
    activities : Activity[];
    selectedActivity : Activity | undefined;
    editMode: boolean;
    selectActivity : (id : string) => void;
    cancelSelectActivity : ()=> void;
    openForm: (id? : string)=> void;
    closeForm: ()=> void;
}
export function ActivityDashboard({activities, selectedActivity, selectActivity, 
                                    cancelSelectActivity, openForm, closeForm, editMode} : Props)
{
    return (
        <Grid>
            <Grid.Column width={10}> 
                <ActivityList 
                    activities={activities}
                    selectActivity={selectActivity}
                    cancelSelectActivity={cancelSelectActivity}/>
            </Grid.Column>
            <Grid.Column width={6}> 
                {selectedActivity && !editMode &&
                    <ActivityDetails 
                        activity={selectedActivity} 
                        cancelSelectActivity={cancelSelectActivity}
                        openForm={openForm}
                        closeForm={closeForm}/>}
                {editMode && <ActivityForm closeForm={closeForm} selectedActivity={selectedActivity}/>}
            </Grid.Column>
        </Grid>
    )
}