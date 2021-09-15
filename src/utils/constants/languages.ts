import { OptionObject } from "../../components/inputs/Select/types";

export const languagesList = [
  "Русский",
  "Английский",
  "Китайский",
  "Испанский",
];

export const languagesOptionsList: OptionObject[] = languagesList.map(
  (lang) => ({ label: lang, value: lang.toLowerCase() })
);
