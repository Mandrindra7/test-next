export interface ButtonProps {
  text: string;
  handleClick: () => void;
}

export interface InputProps {
  type: string;
  label: string;
  value: string;
}

export interface Job {
  id: number;
  name: string;
}
export interface User {
  firstName: string;
  lastName: string;
  city: string;
  postalCode: string;
  address: string;
  email: string;
  phone: string;
}
