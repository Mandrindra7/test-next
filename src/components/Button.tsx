import "@/assets/css/button.scss";

import { ButtonProps } from "@/utils/type";

const Button: React.FC<ButtonProps> = ({ text, handleClick }) => {
  return (
    <button className="btn" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
