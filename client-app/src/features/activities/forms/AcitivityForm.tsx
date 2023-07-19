import React , {ChangeEvent, useState} from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props{
    closeForm: ()=> void;
    selectedActivity: Activity | undefined;
    createOrEdit: (activity: Activity)=> void;
}

export default function ActivityForm({selectedActivity, closeForm, createOrEdit}: Props){
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

    const handleInputChange = (event : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const {name, value} = event.target;
        setActivity({...activity, [name]: value})
    }
    return (
        <Segment clearing>
            <Form autoComplete="off">
                <Form.Input name= "title" placeholder='Title' value={activity.title} onChange={handleInputChange}/>
                <Form.TextArea name= "description" placeholder='Descriptiom' value={activity.description} onChange={handleInputChange}/>
                <Form.Input name= "category" placeholder='Category' value={activity.category} onChange={handleInputChange}/>
                <Form.Input name= "date" placeholder='Date' value={activity.date} onChange={handleInputChange}/>
                <Form.Input name= "city" placeholder='City' value={activity.city} onChange={handleInputChange}/>
                <Form.Input name= "venue" placeholder='Venue' value={activity.venue} onChange={handleInputChange}/>
                <Button onClick={()=>createOrEdit(activity)} floated="right" positive type="submit" content="Submit"/>
                <Button onClick={closeForm} floated="right" type="submit" content="Cancel"/>
            </Form>
        </Segment>
    )
}