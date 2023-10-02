import React from 'react';
import RecipesForm from './RecipesForm';

const AddRecipes = () => {
const handleOnSubmit = (book) => {
    console.log(book);
};

return (
    <React.Fragment>
        <RecipesForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
);};

export default AddRecipes;