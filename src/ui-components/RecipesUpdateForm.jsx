/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { getRecipes } from "../graphql/queries";
import { updateRecipes } from "../graphql/mutations";
export default function RecipesUpdateForm(props) {
  const {
    id: idProp,
    recipes: recipesModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    coffee_name: "",
    coffee_amount: "",
    water_temperature: "",
    ground_size: "",
    brewing_time: "",
    taste_aftertaste: "",
    notes: "",
  };
  const [coffee_name, setCoffee_name] = React.useState(
    initialValues.coffee_name
  );
  const [coffee_amount, setCoffee_amount] = React.useState(
    initialValues.coffee_amount
  );
  const [water_temperature, setWater_temperature] = React.useState(
    initialValues.water_temperature
  );
  const [ground_size, setGround_size] = React.useState(
    initialValues.ground_size
  );
  const [brewing_time, setBrewing_time] = React.useState(
    initialValues.brewing_time
  );
  const [taste_aftertaste, setTaste_aftertaste] = React.useState(
    initialValues.taste_aftertaste
  );
  const [notes, setNotes] = React.useState(initialValues.notes);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = recipesRecord
      ? { ...initialValues, ...recipesRecord }
      : initialValues;
    setCoffee_name(cleanValues.coffee_name);
    setCoffee_amount(cleanValues.coffee_amount);
    setWater_temperature(cleanValues.water_temperature);
    setGround_size(cleanValues.ground_size);
    setBrewing_time(cleanValues.brewing_time);
    setTaste_aftertaste(cleanValues.taste_aftertaste);
    setNotes(cleanValues.notes);
    setErrors({});
  };
  const [recipesRecord, setRecipesRecord] = React.useState(recipesModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getRecipes.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getRecipes
        : recipesModelProp;
      setRecipesRecord(record);
    };
    queryData();
  }, [idProp, recipesModelProp]);
  React.useEffect(resetStateValues, [recipesRecord]);
  const validations = {
    coffee_name: [],
    coffee_amount: [],
    water_temperature: [],
    ground_size: [],
    brewing_time: [],
    taste_aftertaste: [],
    notes: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          coffee_name: coffee_name ?? null,
          coffee_amount: coffee_amount ?? null,
          water_temperature: water_temperature ?? null,
          ground_size: ground_size ?? null,
          brewing_time: brewing_time ?? null,
          taste_aftertaste: taste_aftertaste ?? null,
          notes: notes ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: updateRecipes.replaceAll("__typename", ""),
            variables: {
              input: {
                id: recipesRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "RecipesUpdateForm")}
      {...rest}
    >
      <TextField
        label="Coffee name"
        isRequired={false}
        isReadOnly={false}
        value={coffee_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              coffee_name: value,
              coffee_amount,
              water_temperature,
              ground_size,
              brewing_time,
              taste_aftertaste,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.coffee_name ?? value;
          }
          if (errors.coffee_name?.hasError) {
            runValidationTasks("coffee_name", value);
          }
          setCoffee_name(value);
        }}
        onBlur={() => runValidationTasks("coffee_name", coffee_name)}
        errorMessage={errors.coffee_name?.errorMessage}
        hasError={errors.coffee_name?.hasError}
        {...getOverrideProps(overrides, "coffee_name")}
      ></TextField>
      <TextField
        label="Coffee amount"
        isRequired={false}
        isReadOnly={false}
        value={coffee_amount}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              coffee_name,
              coffee_amount: value,
              water_temperature,
              ground_size,
              brewing_time,
              taste_aftertaste,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.coffee_amount ?? value;
          }
          if (errors.coffee_amount?.hasError) {
            runValidationTasks("coffee_amount", value);
          }
          setCoffee_amount(value);
        }}
        onBlur={() => runValidationTasks("coffee_amount", coffee_amount)}
        errorMessage={errors.coffee_amount?.errorMessage}
        hasError={errors.coffee_amount?.hasError}
        {...getOverrideProps(overrides, "coffee_amount")}
      ></TextField>
      <TextField
        label="Water temperature"
        isRequired={false}
        isReadOnly={false}
        value={water_temperature}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              coffee_name,
              coffee_amount,
              water_temperature: value,
              ground_size,
              brewing_time,
              taste_aftertaste,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.water_temperature ?? value;
          }
          if (errors.water_temperature?.hasError) {
            runValidationTasks("water_temperature", value);
          }
          setWater_temperature(value);
        }}
        onBlur={() =>
          runValidationTasks("water_temperature", water_temperature)
        }
        errorMessage={errors.water_temperature?.errorMessage}
        hasError={errors.water_temperature?.hasError}
        {...getOverrideProps(overrides, "water_temperature")}
      ></TextField>
      <TextField
        label="Ground size"
        isRequired={false}
        isReadOnly={false}
        value={ground_size}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              coffee_name,
              coffee_amount,
              water_temperature,
              ground_size: value,
              brewing_time,
              taste_aftertaste,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.ground_size ?? value;
          }
          if (errors.ground_size?.hasError) {
            runValidationTasks("ground_size", value);
          }
          setGround_size(value);
        }}
        onBlur={() => runValidationTasks("ground_size", ground_size)}
        errorMessage={errors.ground_size?.errorMessage}
        hasError={errors.ground_size?.hasError}
        {...getOverrideProps(overrides, "ground_size")}
      ></TextField>
      <TextField
        label="Brewing time"
        isRequired={false}
        isReadOnly={false}
        value={brewing_time}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              coffee_name,
              coffee_amount,
              water_temperature,
              ground_size,
              brewing_time: value,
              taste_aftertaste,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.brewing_time ?? value;
          }
          if (errors.brewing_time?.hasError) {
            runValidationTasks("brewing_time", value);
          }
          setBrewing_time(value);
        }}
        onBlur={() => runValidationTasks("brewing_time", brewing_time)}
        errorMessage={errors.brewing_time?.errorMessage}
        hasError={errors.brewing_time?.hasError}
        {...getOverrideProps(overrides, "brewing_time")}
      ></TextField>
      <TextField
        label="Taste aftertaste"
        isRequired={false}
        isReadOnly={false}
        value={taste_aftertaste}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              coffee_name,
              coffee_amount,
              water_temperature,
              ground_size,
              brewing_time,
              taste_aftertaste: value,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.taste_aftertaste ?? value;
          }
          if (errors.taste_aftertaste?.hasError) {
            runValidationTasks("taste_aftertaste", value);
          }
          setTaste_aftertaste(value);
        }}
        onBlur={() => runValidationTasks("taste_aftertaste", taste_aftertaste)}
        errorMessage={errors.taste_aftertaste?.errorMessage}
        hasError={errors.taste_aftertaste?.hasError}
        {...getOverrideProps(overrides, "taste_aftertaste")}
      ></TextField>
      <TextField
        label="Notes"
        isRequired={false}
        isReadOnly={false}
        value={notes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              coffee_name,
              coffee_amount,
              water_temperature,
              ground_size,
              brewing_time,
              taste_aftertaste,
              notes: value,
            };
            const result = onChange(modelFields);
            value = result?.notes ?? value;
          }
          if (errors.notes?.hasError) {
            runValidationTasks("notes", value);
          }
          setNotes(value);
        }}
        onBlur={() => runValidationTasks("notes", notes)}
        errorMessage={errors.notes?.errorMessage}
        hasError={errors.notes?.hasError}
        {...getOverrideProps(overrides, "notes")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || recipesModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || recipesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
