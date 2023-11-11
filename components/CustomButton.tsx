"use client";

import { CustomButtonProps } from "@/types";

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  containerStyles,
  handleClick,
  btnType = "button",
}) => {
  return (
    <button
      disabled={false}
      type={btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
