import React from "react";
import { countries } from "../utils/constants";

type Props = {
  value: string;
  onChange: (code: string) => void;
};

const CountryCode: React.FC<Props> = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
       className="
        bg-gray-50 px-3 w-[40%] py-2.5 text-sm text-gray-900
        border-r border-gray-300
        focus:outline-none 
      "
    >
      {countries.map((c) => (
        <option key={`${c.label}-${c.code}`} value={c.code}>
          {c.label} ({c.code})
        </option>
      ))}
    </select>
  );
};

export default CountryCode;
