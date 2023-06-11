import React, { FunctionComponent } from "react";

interface InputProps {
  name?: string;
  placeholder?: string;
  value: string;
  onChange: (e: string) => void;
  validationMethod?: (value: string) => string | null;
}

const TextInput: FunctionComponent<InputProps> = ({
  name,
  placeholder,
  onChange,
  validationMethod,
  value,
}) => {
  return (
    <>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-12 px-4 mt-2 text-black border border-gray-300 rounded-md shadow-sm"
      />
      {!!validationMethod && (
        <div className={`text-error`}>
          <p>{validationMethod(value)}</p>
        </div>
      )}
    </>
  );
};

export default TextInput;
