import { SelectTagInterface } from "@/interface/SelectTag";
import Select, { Option } from "rc-select";
import { useState } from "react";
import Text from "./Text";
import "rc-select/assets/index.css";
import "./SelectTag.css";

const SelectTag = ({
  label,
  name,
  type,
  autoComplete,
  required,
  classNameSelect,
  classNameTag,
  onChange,
  onBlur,
  value,
  placeholder,
  error,
  disabled,
  maxTagCount,
}: SelectTagInterface) => {
  const [val, setVal] = useState<string[]>(value);

  const children = [];
  for (let i = 10; i < 36; i += 1) {
    children.push(
      <Option key={i.toString(36) + i} test={i}>
        {i.toString(36) + i}
      </Option>
    );
  }

  const tagRender = (props: any) => {
    const { label, closable, onClose } = props;

    return (
      <span
        style={{
          padding: 8,
          backgroundColor: "rgba(255, 255, 255, 0.10)",
          display: "flex",
          alignItems: "center",
          gap: 4,
          color: "white",
          fontSize: 12,
          fontWeight: 600,
          borderRadius: 4,
          marginRight: 4,
        }}
      >
        {label}
        {closable ? (
          <button type="button" onClick={onClose}>
            x
          </button>
        ) : null}
      </span>
    );
  };

  return (
    <div>
      <Select
        mode="tags"
        style={{
          width: "100%",
          backgroundColor: "rgba(217, 217, 217, 0.06)",
          borderRadius: 10,
          padding: 12,
          color: "white",
          boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
          fontSize: 14,
          marginTop: 14,
        }}
        disabled={disabled}
        maxTagCount={maxTagCount}
        maxTagTextLength={10}
        value={val}
        onChange={(val: string[], option) => {
          console.log("change:", val, option);
          setVal(val);
        }}
        onSelect={(val, option) => {
          console.log("selected", val, option);
        }}
        onDeselect={(val, option) => {
          console.log("deselected", val, option);
        }}
        tokenSeparators={[","]}
        tagRender={tagRender}
        onBlur={onBlur}
      >
        {children}
      </Select>
      {error && (
        <Text className="text-[#EB5757] font-roboto mt-2 font-bold text-sm" label={error.message} />
      )}
    </div>
  );
};

export default SelectTag;
