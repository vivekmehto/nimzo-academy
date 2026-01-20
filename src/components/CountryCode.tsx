import React from "react";

type Country = {
  code: string;
  label: string;
  flag: string;
};

const countries: Country[] = [
  { code: "+91", label: "India", flag: "🇮🇳" },
  { code: "+1", label: "USA", flag: "🇺🇸" },
  { code: "+44", label: "UK", flag: "🇬🇧" },
  { code: "+61", label: "Australia", flag: "🇦🇺" },
];

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
