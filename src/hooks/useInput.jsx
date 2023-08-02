import { useReducer } from "react";

const INITIAL_STATE = {
  value: "",
  isTouched: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "value-change": {
      return { ...state, value: action.value };
    }
    case "is-touched-change": {
      return { ...state, isTouched: action.isTouched };
    }
  }
}

function useInput(validateValue) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  function handleValueChange(value) {
    dispatch({ type: "value-change", value: value });
  }

  function handleIsTouchedChange(isTouched) {
    dispatch({ type: "is-touched-change", isTouched: isTouched });
  }

  const isValueValid = validateValue(state.value);

  return {
    value: state.value,
    isValueValid: isValueValid,
    isTouched: state.isTouched,
    handleValueChange: handleValueChange,
    handleIsTouchedChange: handleIsTouchedChange,
  };
}

export default useInput;
