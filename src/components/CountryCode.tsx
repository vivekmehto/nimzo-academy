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
      className="rounded-l-lg border border-r-0 bg-white px-3 py-3 text-sm focus:outline-none"
    >
      {countries.map((c) => (
        <option key={c.code} value={c.code}>
          {c.flag} {c.code}
        </option>
      ))}
    </select>
  );
};

export default CountryCode;
