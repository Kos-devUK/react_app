import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerRecipes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Recipes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly coffee_name?: string | null;
  readonly coffee_amount?: string | null;
  readonly water_temperature?: string | null;
  readonly ground_size?: string | null;
  readonly brewing_time?: string | null;
  readonly taste_aftertaste?: string | null;
  readonly notes?: string | null;
  readonly usersID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRecipes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Recipes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly coffee_name?: string | null;
  readonly coffee_amount?: string | null;
  readonly water_temperature?: string | null;
  readonly ground_size?: string | null;
  readonly brewing_time?: string | null;
  readonly taste_aftertaste?: string | null;
  readonly notes?: string | null;
  readonly usersID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Recipes = LazyLoading extends LazyLoadingDisabled ? EagerRecipes : LazyRecipes

export declare const Recipes: (new (init: ModelInit<Recipes>) => Recipes) & {
  copyOf(source: Recipes, mutator: (draft: MutableModel<Recipes>) => MutableModel<Recipes> | void): Recipes;
}

type EagerUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly password?: string | null;
  readonly Recipes?: (Recipes | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Users, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly password?: string | null;
  readonly Recipes: AsyncCollection<Recipes>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Users = LazyLoading extends LazyLoadingDisabled ? EagerUsers : LazyUsers

export declare const Users: (new (init: ModelInit<Users>) => Users) & {
  copyOf(source: Users, mutator: (draft: MutableModel<Users>) => MutableModel<Users> | void): Users;
}