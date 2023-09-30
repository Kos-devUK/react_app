/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRecipes = /* GraphQL */ `
  subscription OnCreateRecipes($filter: ModelSubscriptionRecipesFilterInput) {
    onCreateRecipes(filter: $filter) {
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
export const onUpdateRecipes = /* GraphQL */ `
  subscription OnUpdateRecipes($filter: ModelSubscriptionRecipesFilterInput) {
    onUpdateRecipes(filter: $filter) {
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
export const onDeleteRecipes = /* GraphQL */ `
  subscription OnDeleteRecipes($filter: ModelSubscriptionRecipesFilterInput) {
    onDeleteRecipes(filter: $filter) {
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
export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onCreateUsers(filter: $filter) {
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
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onUpdateUsers(filter: $filter) {
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
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers($filter: ModelSubscriptionUsersFilterInput) {
    onDeleteUsers(filter: $filter) {
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
