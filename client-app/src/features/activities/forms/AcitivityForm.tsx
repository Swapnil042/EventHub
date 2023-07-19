import React , {useState} from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props{
    closeForm: ()=> void;
    selectedActivity: Activity | undefined;
}

export default function ActivityForm({selectedActivity, closeForm}: Props){
    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    }

    const [activity, setActivity] = useState(initialState);
    return (
        <Segment clearing>
            <Form autoComplete="off">
                <Form.Input placeholder='Title' value={activity.title}/>
                <Form.Input placeholder='Descriptiom' value={activity.description}/>
                <Form.Input placeholder='Category' value={activity.category}/>
                <Form.Input placeholder='Date' value={activity.date}/>
                <Form.Input placeholder='City' value={activity.city}/>
                <Form.Input placeholder='Venue' value={activity.venue}/>
                <Button floated="right" positive type="submit" content="Submit"/>
                <Button onClick={closeForm} floated="right" type="submit" content="Cancel"/>
            </Form>
        </Segment>
    )
}