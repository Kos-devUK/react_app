// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Recipes, Users } = initSchema(schema);

export {
  Recipes,
  Users
};