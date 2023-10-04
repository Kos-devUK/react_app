import React, { useEffect, useState } from 'react';
import { API, graphqlOperation} from 'aws-amplify';

import { createRecipes } from '../../graphql/mutations';
import { listRecipes } from '../../graphql/queries';

import { v4 as uuidv4 } from 'uuid';
import { CardBody,  CardText, CardTitle, Button, Form, Col, Card, Row, Container } from 'react-bootstrap';


function Recipes () {
    const [recipes, setRecipes]= useState([]);
    const [recipesData, setRecipesData] = useState ({coffee_name: " ", coffee_amount: " ", water_temperature: " ", ground_size: " ", brewing_time: " ", taste_aftertaste: " ", notes: " " });

    const getRecipes = async()=> {
        try{
            const recipesData = await API.graphql(graphqlOperation(listRecipes));
            console.log(recipesData);

            const recipesList = recipesData.data.listRecipes.items;
            setRecipes(recipesList)

        }catch(err){
            console.log('error',err);
        }
    }


    useEffect(() =>{
        getRecipes()
    },[]) 

    const addNewRecipes = async () => {
        try { 
        const {coffee_name, coffee_amount, water_temperature, ground_size, brewing_time, taste_aftertaste, notes} = recipesData;

        const newRecipes = {
            id: uuidv4(),
            coffee_name, coffee_amount, water_temperature, ground_size, brewing_time, taste_aftertaste, notes };

            //Add New Recipes
            await API.graphql(graphqlOperation(createRecipes, {input: newRecipes}));
        }catch(err){
            console.log('error',err);
        }
        }


return (
    <Container>
    <Row><Col><h1>Recipes</h1></Col></Row>
    <Row>
        {recipes.map((recipes,indx) => {
        return (
            <Col key={indx} >
                <Card style={{width: '12rem', height :'15rem'}}>
                    <CardBody>
                        <CardTitle>{recipes.coffee_name}</CardTitle>
                        <CardText>
                        {recipes.coffee_amount}<br />
                        {recipes.water_temperature}<br />
                        {recipes.ground_size}<br />
                        {recipes.brewing_time}<br />
                        {recipes.taste_aftertaste}<br />
                        {recipes.notes}
                        </CardText></CardBody></Card></Col>
                        )})}</Row>

    <Row>
        <Col> <h2>Add new recipes</h2>

        <Form>

        <Form.Group controlId="formBasicText">
        <Form.Label>coffee name</Form.Label>
        <Form.Control
            type="text" value={recipesData.coffee_name}
            onChange={evt => setRecipesData({...recipesData, coffee_name:evt.target.value})}
            placeholder="coffee name"/>
        </Form.Group>

        <Form.Group controlId="formBasicText">
        <Form.Label>coffee amount</Form.Label>
        <Form.Control
            type="text" value={recipesData.coffee_amount}
            onChange={evt => setRecipesData({...recipesData, coffee_amount:evt.target.value})}
            placeholder="coffee amount (gr)"/>
        </Form.Group>

        <Form.Group controlId="formBasicText">
        <Form.Label>water temperature</Form.Label>
        <Form.Control
            type="text" value={recipesData.water_temperature}
            onChange={evt => setRecipesData({...recipesData, water_temperature:evt.target.value})}
            placeholder="water temperature°C"/>
        </Form.Group>

        <Form.Group controlId="formBasicText">
        <Form.Label>ground size</Form.Label>
        <Form.Control
            type="text" value={recipesData.ground_size}
            onChange={evt => setRecipesData({...recipesData, ground_size:evt.target.value})}
            placeholder="ground size"/>
        </Form.Group>

        <Form.Group controlId="formBasicText">
        <Form.Label>brewing time</Form.Label>
        <Form.Control
            type="text" value={recipesData.brewing_time}
            onChange={evt => setRecipesData({...recipesData, brewing_time:evt.target.value})}
            placeholder="brewing time (sec)"/>
        </Form.Group>

        <Form.Group controlId="formBasicText">
        <Form.Label>taste-aftertaste</Form.Label>
        <Form.Control
            type="text" value={recipesData.taste_aftertaste}
            onChange={evt => setRecipesData({...recipesData, taste_aftertaste:evt.target.value})}
            placeholder="taste-aftertaste"/>
        </Form.Group>

        <Form.Group controlId="formBasicText">
        <Form.Label>notes</Form.Label>
        <Form.Control
            type="text" value={recipesData.notes}
            onChange={evt => setRecipesData({...recipesData, notes:evt.target.value})}
            placeholder="notes"/>
        </Form.Group>

        <Button variant="primary" type="button" onClick={addNewRecipes}>Add Recipe</Button>
                </Form>
            </Col>
        </Row>
    </Container>
)};

export default Recipes;
