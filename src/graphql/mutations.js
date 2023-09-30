/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRecipes = /* GraphQL */ `
  mutation CreateRecipes(
    $input: CreateRecipesInput!
    $condition: ModelRecipesConditionInput
  ) {
    createRecipes(input: $input, condition: $condition) {
      id
      coffee_name
      coffe_amount_gr
      water_temperature_celcius
      ground_size_mm
      brewing_time_sec
      taste_aftertaste
      notes
      usersID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateRecipes = /* GraphQL */ `
  mutation UpdateRecipes(
    $input: UpdateRecipesInput!
    $condition: ModelRecipesConditionInput
  ) {
    updateRecipes(input: $input, condition: $condition) {
      id
      coffee_name
      coffe_amount_gr
      water_temperature_celcius
      ground_size_mm
      brewing_time_sec
      taste_aftertaste
      notes
      usersID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteRecipes = /* GraphQL */ `
  mutation DeleteRecipes(
    $input: DeleteRecipesInput!
    $condition: ModelRecipesConditionInput
  ) {
    deleteRecipes(input: $input, condition: $condition) {
      id
      coffee_name
      coffe_amount_gr
      water_temperature_celcius
      ground_size_mm
      brewing_time_sec
      taste_aftertaste
      notes
      usersID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
      id
      email
      password
      Recipes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
      id
      email
      password
      Recipes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
      id
      email
      password
      Recipes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
