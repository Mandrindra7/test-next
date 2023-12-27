import "@/assets/css/checkbox.scss";

const CheckBox:React.FC = () => {
  return (
    <>
      <input className="input-check" id="check" type="checkbox" />
      <label htmlFor="check"></label>
    </>
  );
};

export default CheckBox;
