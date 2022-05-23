import { HStack, IconButton, PinInput, PinInputField } from "@chakra-ui/react";
import { AiOutlineEnter } from "react-icons/ai";

export default function MyPin({
  disabled,
  setWord,
  onKeyDown,
  isSame,
  rLetter,
  wPLetter,
}) {
  function BorderWarning(index) {
    if (disabled) {
      if (isSame === 0) {
        if (index + 1 == wPLetter[index]) return "orange";
        else if (index + 1 == rLetter[index]) return "green";
        else return "red";
      }
      if (isSame === -1) return "white";
      if (isSame === 1) return "green";
    }
  }

  return (
    <HStack onKeyDown={onKeyDown}>
      <PinInput
        type="alphanumeric"
        onChange={(e) => setWord({ word: e })}
        isDisabled={disabled}
      >
        <PinInputField
          fontWeight={900}
          borderWidth={2}
          borderColor={() => BorderWarning(0)}
          color={() => BorderWarning(0)}
          _focus={{ outline: 0 }}
          cursor="default"
        />
        <PinInputField
          fontWeight={900}
          borderWidth={2}
          borderColor={() => BorderWarning(1)}
          color={() => BorderWarning(1)}
          _focus={{ outline: 0 }}
          cursor="default"
        />
        <PinInputField
          fontWeight={900}
          borderWidth={2}
          borderColor={() => BorderWarning(2)}
          color={() => BorderWarning(2)}
          _focus={{ outline: 0 }}
          cursor="default"
        />
        <PinInputField
          fontWeight={900}
          borderWidth={2}
          borderColor={() => BorderWarning(3)}
          color={() => BorderWarning(3)}
          _focus={{ outline: 0 }}
          cursor="default"
        />
        <PinInputField
          fontWeight={900}
          borderWidth={2}
          borderColor={() => BorderWarning(4)}
          color={() => BorderWarning(4)}
          _focus={{ outline: 0 }}
          cursor="default"
        />
      </PinInput>
      <IconButton
        onClick={onKeyDown}
        icon={<AiOutlineEnter />}
        _focus={{ outline: 0 }}
        visibility={disabled ? "hidden" : null}
      />
    </HStack>
  );
}
