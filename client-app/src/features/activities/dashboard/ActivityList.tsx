import React from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props{
    activities : Activity[],
    selectActivity : (id : string) => void,
    cancelSelectActivity : ()=> void
}
export default function ActivityList({activities, selectActivity, cancelSelectActivity}: Props){
    return (
        <Segment>
            <Item.Group divided>
                {activities.map(activity=>(
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Label basic content={activity.category}/>
                                <Button onClick={()=>selectActivity(activity.id)} floated="right" content="view" color="blue"/>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}