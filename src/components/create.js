import axios from "axios";
import React, { useState } from  "react"
import { useNavigate } from "react-router"; 
import { Link } from "react-router-dom";
import {Button, Checkbox , Form} from 'semantic-ui-react'



const Create=()=>{
    let navigator = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName ,setLastName] = useState("");
    const [checkbox , setCheckBox] = useState(false);
    console.log(checkbox)


    const postData = () =>{
        axios.post(`https://61b9c81038f69a0017ce6285.mockapi.io/fakeData`, {
            firstName,
            lastName,
            checkbox
        })
        .then(()=>{
            navigator('/read')
        })
       
    }

    return(
        <div>
        <Form className="create-form">
            <Form.Field>
                <label>First Name</label>
                <input placeholder="First Name" onChange={(e)=> setFirstName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder="Last Name" onChange={(e)=> setLastName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' onChange={(e)=> setCheckBox(!checkbox)}/>
            </Form.Field>
            <Button type='submit' onClick={postData}>Submit</Button>
        </Form>
        
        <Link to="/update">Update</Link>
        </div>
        
    );

}

export default Create;