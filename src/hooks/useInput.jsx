import { useState } from "react";

function useInput(validateValue) {
  const [value, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValueValid = validateValue(value);

  function handleValueChange(value) {
    setEnteredValue(value);
  }

  function handleIsTouchedChange(isTouched) {
    setIsTouched(isTouched);
  }

  return {
    value: value,
    isValueValid: isValueValid,
    isTouched: isTouched,
    handleValueChange: handleValueChange,
    handleIsTouchedChange: handleIsTouchedChange,
  };
}

export default useInput;
