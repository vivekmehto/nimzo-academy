export const NIMZO_PHONE_NUMBER = "+91 97180 86186";
export const NIMZO_WHATSAPP_NUMBER = "919718086186";
export const NIMZO_EMAIL = "nimzoacademy@gmail.com";

export type Country = {
  code: string;
  label: string;
  flag: string;
};

export const countries: Country[] = [
  { code: "+91", label: "India", flag: "🇮🇳" },

  { code: "+1", label: "United States", flag: "🇺🇸" },
  { code: "+1", label: "Canada", flag: "🇨🇦" },

  { code: "+44", label: "United Kingdom", flag: "🇬🇧" },
  { code: "+353", label: "Ireland", flag: "🇮🇪" },

  { code: "+61", label: "Australia", flag: "🇦🇺" },
  { code: "+64", label: "New Zealand", flag: "🇳🇿" },

  // Middle East (Indian expat majority)
  { code: "+971", label: "United Arab Emirates", flag: "🇦🇪" },
  { code: "+974", label: "Qatar", flag: "🇶🇦" },
  { code: "+966", label: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+968", label: "Oman", flag: "🇴🇲" },
  { code: "+965", label: "Kuwait", flag: "🇰🇼" },
  { code: "+973", label: "Bahrain", flag: "🇧🇭" },

  // Asia (education-focused)
  { code: "+65", label: "Singapore", flag: "🇸🇬" },
  { code: "+60", label: "Malaysia", flag: "🇲🇾" },

  // Africa
  { code: "+27", label: "South Africa", flag: "🇿🇦" },
];
