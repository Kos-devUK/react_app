/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRecipes = /* GraphQL */ `
  query GetRecipes($id: ID!) {
    getRecipes(id: $id) {
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
export const listRecipes = /* GraphQL */ `
  query ListRecipes(
    $filter: ModelRecipesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const recipesByUsersID = /* GraphQL */ `
  query RecipesByUsersID(
    $usersID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRecipesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    recipesByUsersID(
      usersID: $usersID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        password
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
