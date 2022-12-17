import {
  DetailedHTMLProps,
  forwardRef,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useEffect,
  useRef,
} from "react";
import classNames from "classnames";

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > & {
    type?: HTMLInputElement["type"] | "textarea";
    label?: string;
    containerClassName?: string;
    inlineLabel?: boolean;
    autoFocus?: boolean;
  };

const Input = forwardRef<HTMLInputElement, Props>((props, ref: any) => {
  const {
    type,
    label,
    containerClassName,
    inlineLabel = false,
    autoFocus,
    className,
    ...rest
  } = props;
  const InputComponent = type === "textarea" ? "textarea" : "input";

const inputClassNames = classNames(
  { "form-input": type !== "textarea" },
  { "form-textarea": type === "textarea" },
  "w-full border-[#e2e2e2] transition  focus-visible:outline-none placeholder:text-[#7B7B7B80]",
  className
)

  // useEffect(() => {
  //   if (autoFocus) inputRef.current.focus();
  // }, []);

  return (
    <label
      className={classNames(
        "block",
        { "flex items-start": inlineLabel },
        containerClassName
      )}
    >
      {label && (
        <span
          className={classNames(
            "text-sm text-textSecondary",
            inlineLabel ? "ml-2 ltr:mr-2 pt-2" : "mb-2"
          )}
        >
          {label}
        </span>
      )}

      <InputComponent
        {...rest}
        type={type}
        className={inputClassNames}
      />
    </label>
  );
});

export default Input;
