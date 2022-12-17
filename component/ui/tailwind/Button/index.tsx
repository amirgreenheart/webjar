import classNames from "classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from "react";



const sizeClasses = {
  sm: "py-2.5",
  md: "py-4",
};


const disabledClassName = "bg-stroke text-white !cursor-not-allowed";

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  size?: keyof typeof sizeClasses;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  loading?: boolean;
  className?: string;
  fullWidth?: boolean;
  rounded?: boolean;
  children?: ReactNode;
};

const Button: FC<ButtonProps> = (props) => {
  const {
    size = "md",
    leftIcon,
    rightIcon,
    loading,
    className,
    fullWidth,
    rounded,
    children,
    disabled,
    ...rest
  } = props;

  return (
    <button
      className={classNames(
        "outline-0 rounded-lg transition-all align-middle",
        fullWidth && "w-full",
        sizeClasses[size],
        disabled && disabledClassName,
        rounded && "!rounded-full",
        className
      )}
      disabled={disabled}
      {...rest}
    >
      {rightIcon && !loading ? (
        <span className="[margin-inline-end:8px] inline-block align-middle">
          {rightIcon}
        </span>
      ) : null}
      <span className="align-middle leading-normal">{children}</span>
      {leftIcon ? (
        <span className="[margin-inline-start:8px] inline-block align-middle">
          {leftIcon}
        </span>
      ) : null}
    </button>
  );
};

export default Button;
