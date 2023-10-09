import { useEffect, useState } from 'react';
import { API, graphqlOperation} from 'aws-amplify';

import { createRecipes } from '../../graphql/mutations';
import { listRecipes } from '../../graphql/queries';

import { v4 as uuid } from 'uuid';
import { CardBody,  CardText, CardTitle, Button, Form, Col, Card, Row, Container } from 'react-bootstrap';
import "./components.css"

function ViewRecipes () {
    const [recipes, setRecipes]= useState([]);
    const [recipesData, setRecipesData] = useState ({coffee_name: "", coffee_amount: "", water_temperature: "", ground_size: "", brewing_time: "", taste_aftertaste: "", notes: "" });

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


    useEffect(() => {
        getRecipes()
    },[]);

    const addNewRecipes = async () => {
        try {
            console.log('recipesData:', recipesData);

            const {coffee_name, coffee_amount, water_temperature, ground_size, brewing_time, taste_aftertaste, notes} = recipesData;

            console.log('newRecipes:', {
                id: uuid(),
                coffee_name,
                coffee_amount,
                water_temperature,
                ground_size,
                brewing_time,
                taste_aftertaste,
                notes,
            });

        const newRecipes = {
            id: uuid(),
            coffee_name,
            coffee_amount,
            water_temperature,
            ground_size,
            brewing_time,
            taste_aftertaste,
            notes,
        };

            //Add New Recipes
        await API.graphql(graphqlOperation(createRecipes, {input: newRecipes}));
        console.log('Recipe added successfully');
            getRecipes();
        }catch(err) {
            console.log('error',err);
        }
};

return (
    <Container>
        <Row>
            <Col><h1>Recipes</h1></Col>
        </Row>

        <Row>
            {
                recipes.map((recipe,indx) => {
                    return (
                        <Col key={indx} >
                            <Card className='displayrecipes'>
                                <CardBody>
                                    <CardTitle>{recipe.coffee_name}</CardTitle>
                                        <CardText>
                                            {recipe.coffee_amount} gr<br />
                                            {recipe.water_temperature} °C<br />
                                            {recipe.ground_size} ground size<br />
                                            {recipe.brewing_time} sec<br />
                                            {recipe.taste_aftertaste}<br />
                                            {recipe.notes} <br />
                                            <Button>update</Button>
                                            <Button>remove</Button>
                                        </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    )
                })
            }
        </Row>
        
        
        <Row>
            <Col> <h2>Add new recipes</h2>

            <Form className='addrecipes'>

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
                placeholder="water temperature °C"/>
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
            <br />
            <Button variant="primary" type="button" onClick={addNewRecipes}>Add Recipe &gt; &nbsp; </Button> 
                    </Form>
                </Col>
            </Row>
        </Container>
    )};

export default ViewRecipes;
