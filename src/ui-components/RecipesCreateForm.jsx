/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { Recipes, Users } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function RecipesCreateForm(props) {
  const {
    clearOnSuccess = true,
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
    usersID: undefined,
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
  const [usersID, setUsersID] = React.useState(initialValues.usersID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCoffee_name(initialValues.coffee_name);
    setCoffee_amount(initialValues.coffee_amount);
    setWater_temperature(initialValues.water_temperature);
    setGround_size(initialValues.ground_size);
    setBrewing_time(initialValues.brewing_time);
    setTaste_aftertaste(initialValues.taste_aftertaste);
    setNotes(initialValues.notes);
    setUsersID(initialValues.usersID);
    setCurrentUsersIDValue(undefined);
    setCurrentUsersIDDisplayValue("");
    setErrors({});
  };
  const [currentUsersIDDisplayValue, setCurrentUsersIDDisplayValue] =
    React.useState("");
  const [currentUsersIDValue, setCurrentUsersIDValue] =
    React.useState(undefined);
  const usersIDRef = React.createRef();
  const usersRecords = useDataStoreBinding({
    type: "collection",
    model: Users,
  }).items;
  const getDisplayValue = {
    usersID: (r) => `${r?.email ? r?.email + " - " : ""}${r?.id}`,
  };
  const validations = {
    coffee_name: [],
    coffee_amount: [],
    water_temperature: [],
    ground_size: [],
    brewing_time: [],
    taste_aftertaste: [],
    notes: [],
    usersID: [],
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
          coffee_name,
          coffee_amount,
          water_temperature,
          ground_size,
          brewing_time,
          taste_aftertaste,
          notes,
          usersID,
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
          await DataStore.save(new Recipes(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "RecipesCreateForm")}
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
              usersID,
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
              usersID,
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
              usersID,
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
              usersID,
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
              usersID,
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
              usersID,
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
              usersID,
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
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              coffee_name,
              coffee_amount,
              water_temperature,
              ground_size,
              brewing_time,
              taste_aftertaste,
              notes,
              usersID: value,
            };
            const result = onChange(modelFields);
            value = result?.usersID ?? value;
          }
          setUsersID(value);
          setCurrentUsersIDValue(undefined);
        }}
        currentFieldValue={currentUsersIDValue}
        label={"Users id"}
        items={usersID ? [usersID] : []}
        hasError={errors?.usersID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("usersID", currentUsersIDValue)
        }
        errorMessage={errors?.usersID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.usersID(usersRecords.find((r) => r.id === value))
            : ""
        }
        setFieldValue={(value) => {
          setCurrentUsersIDDisplayValue(
            value
              ? getDisplayValue.usersID(
                  usersRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentUsersIDValue(value);
        }}
        inputFieldRef={usersIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Users id"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Users"
          value={currentUsersIDDisplayValue}
          options={usersRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.usersID?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentUsersIDValue(id);
            setCurrentUsersIDDisplayValue(label);
            runValidationTasks("usersID", label);
          }}
          onClear={() => {
            setCurrentUsersIDDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.usersID?.hasError) {
              runValidationTasks("usersID", value);
            }
            setCurrentUsersIDDisplayValue(value);
            setCurrentUsersIDValue(undefined);
          }}
          onBlur={() => runValidationTasks("usersID", currentUsersIDValue)}
          errorMessage={errors.usersID?.errorMessage}
          hasError={errors.usersID?.hasError}
          ref={usersIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "usersID")}
        ></Autocomplete>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
