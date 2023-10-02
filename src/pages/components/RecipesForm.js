import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';


const RecipesForm = (props) => {
const [coffee, setCoffee] = useState({
    coffee_name: props.coffee ? props.coffee.coffee_name : '',
    coffe_amount_gr: props.coffee ? props.coffee.coffe_amount_gr : '',
    water_temperature_celcius: props.coffee ? props.coffee.water_temperature_celcius : '',
    ground_size_mm: props.coffee ? props.coffee.ground_size_mm : '',
    brewing_time_sec: props.coffee ? props.coffee.brewing_time_sec : '',
    taste_aftertaste: props.coffee ? props.coffee.props.taste_aftertaste: '',
    notes:props.coffee ? props.coffee.props.notes:''
});

const [errorMsg, setErrorMsg] = useState('');
const { coffee_name, coffe_amount_gr, water_temperature_celcius, ground_size_mm, brewing_time_sec, taste_aftertaste,notes } = coffee;


const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [coffee_name, coffe_amount_gr, water_temperature_celcius, ground_size_mm, brewing_time_sec, taste_aftertaste,notes];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
    const value = `${field}`.trim();
    return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
    const coffee = {
        id: uuidv4(),
        coffee_name, coffe_amount_gr, water_temperature_celcius, ground_size_mm, brewing_time_sec, taste_aftertaste,notes};
    props.handleOnSubmit(coffee);
    } else {
    errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
};
const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
    default:
        setCoffee((prevState) => ({
        ...prevState,
            [name]: value
        }));
}};

return (
    <div className="main-form">
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <Form onSubmit={handleOnSubmit}>

        <Form.Group controlId="coffee_name">
        <Form.Label>-</Form.Label>
        <Form.Control
            className="input-control"
            type="text"
            name="coffee_name"
            value={coffee_name}
            placeholder="coffee name"
            onChange={handleInputChange}/>
        </Form.Group>

        <Form.Group controlId="coffe_amount_gr">
        <Form.Label>-</Form.Label>
        <Form.Control
            className="input-control"
            type="text"
            name="coffe_amount_gr"
            value={coffe_amount_gr}
            placeholder="coffe amount (gr)"
            onChange={handleInputChange}/>
        </Form.Group>

        <Form.Group controlId="water_temperature_celcius">
        <Form.Label>-</Form.Label>
        <Form.Control
            className="input-control"
            type="text"
            name="water_temperature_celcius"
            value={water_temperature_celcius}
            placeholder="water temperature°C"
            onChange={handleInputChange}/>
        </Form.Group>

        <Form.Group controlId="ground_size_mm">
        <Form.Label>-</Form.Label>
        <Form.Control
            className="input-control"
            type="text"
            name="ground_size_mm"
            value={ground_size_mm}
            placeholder="ground size (mm)"
            onChange={handleInputChange}/>
        </Form.Group>

        <Form.Group controlId="brewing_time_sec">
        <Form.Label>-</Form.Label>
        <Form.Control
            className="input-control"
            type="text"
            name="brewing_time_sec"
            value={brewing_time_sec}
            placeholder="brewing time (sec)"
            onChange={handleInputChange}/>
        </Form.Group>

        <Form.Group controlId="taste_aftertaste">
        <Form.Label>-</Form.Label>
        <Form.Control
            className="input-control"
            type="text"
            name="taste_aftertaste"
            value={taste_aftertaste}
            placeholder="taste/aftertaste"
            onChange={handleInputChange}/>
        </Form.Group>

        <Form.Group controlId="notes">
        <Form.Label>-</Form.Label>
        <Form.Control
            className="input-control"
            type="text"
            name="notes"
            value={notes}
            placeholder="notes"
            onChange={handleInputChange}/>
        </Form.Group>

        <Button variant="primary" type="submit" className="submit-btn">
        Submit
        </Button>
    </Form>
    </div>
);
};


export default RecipesForm;
