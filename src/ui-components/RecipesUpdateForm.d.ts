/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Recipes } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RecipesUpdateFormInputValues = {
    coffee_name?: string;
    coffee_amount?: string;
    water_temperature?: string;
    ground_size?: string;
    brewing_time?: string;
    taste_aftertaste?: string;
    notes?: string;
    usersID?: string;
};
export declare type RecipesUpdateFormValidationValues = {
    coffee_name?: ValidationFunction<string>;
    coffee_amount?: ValidationFunction<string>;
    water_temperature?: ValidationFunction<string>;
    ground_size?: ValidationFunction<string>;
    brewing_time?: ValidationFunction<string>;
    taste_aftertaste?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
    usersID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RecipesUpdateFormOverridesProps = {
    RecipesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    coffee_name?: PrimitiveOverrideProps<TextFieldProps>;
    coffee_amount?: PrimitiveOverrideProps<TextFieldProps>;
    water_temperature?: PrimitiveOverrideProps<TextFieldProps>;
    ground_size?: PrimitiveOverrideProps<TextFieldProps>;
    brewing_time?: PrimitiveOverrideProps<TextFieldProps>;
    taste_aftertaste?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
    usersID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type RecipesUpdateFormProps = React.PropsWithChildren<{
    overrides?: RecipesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    recipes?: Recipes;
    onSubmit?: (fields: RecipesUpdateFormInputValues) => RecipesUpdateFormInputValues;
    onSuccess?: (fields: RecipesUpdateFormInputValues) => void;
    onError?: (fields: RecipesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RecipesUpdateFormInputValues) => RecipesUpdateFormInputValues;
    onValidate?: RecipesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RecipesUpdateForm(props: RecipesUpdateFormProps): React.ReactElement;
