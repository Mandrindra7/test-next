import { Job, User } from "./type";

export const filters: Job[] = [
  { id: 1, name: "software engineer" },
  { id: 2, name: "computer hardware engineer" },
  { id: 3, name: "network engineer" },
  { id: 4, name: "technical support" },
  { id: 5, name: "network adminstrator" },
  { id: 6, name: "management" },
  { id: 7, name: "data analysis" },
  { id: 8, name: "software engineer" },
];

export const lastSearch: Job[] = [
  { id: 1, name: "past search 1" },
  { id: 2, name: "past search 2 " },
  { id: 3, name: "computers and information..." },
  { id: 4, name: "database administrator" },
  { id: 5, name: "computer security" },
  { id: 6, name: "computer systems analyst" },
];

export const user: User = {
  firstName: "Petter",
  lastName: "Cetera",
  city: "London",
  postalCode: "E2 4XF",
  address: "123 Example",
  email: "petter@gmail.com",
  phone: "+442223334444",
};


