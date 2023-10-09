"use client";

import { ErrorMessage, Field, FieldAttributes, useField } from "formik";
import { ClassValue } from "clsx";
import { ChangeEvent } from "react";
import { cn } from "@/utilities/className";
import { FormChangeProps } from "@/models/local/form";
import { RenderError } from "./error";

type InputFieldProps = FieldAttributes<unknown> & {
    label?: string;
    labelClassName?: ClassValue;
    isPassword?: boolean;
    onTransformInput?: (value: FormChangeProps) => string;
    handleChange?: (value: string) => void;
};

function InputField({
    label,
    labelClassName = "",
    className: inputClassName = "",
    id,
    name,
    onTransformInput,
    handleChange,
    // isPassword = false,
    ...props
}: InputFieldProps) {
    const [, , helper] = useField(name);
    const { setValue } = helper;
    // const [show, setShow] = useState(() => isPassword === false);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (onTransformInput) {
            const changed = onTransformInput(event.target.value);
            setValue(changed);
            if (handleChange && handleChange instanceof Function) {
                handleChange(changed);
            }
        } else {
            setValue(event.target.value);
            if (handleChange && handleChange instanceof Function) {
                handleChange(event.target.value);
            }
        }
    };

    return (
        <div className="flex flex-col items-start gap-y-3">
            {label ? (
                <label
                    htmlFor={id}
                    className={cn(
                        "font-bold text-xl text-main-dark-blue",
                        labelClassName
                    )}
                >
                    {label}
                </label>
            ) : null}
            <Field
                id={id}
                name={name}
                className={cn(
                    "w-full rounded-lg border border-main-gray-2 bg-transparent px-5 py-3 text-main-dark-blue placeholder-main-dark-gray focus:outline-none",
                    inputClassName
                )}
                onChange={handleInputChange}
                {...props}
            />
            <ErrorMessage name={name} render={RenderError} />
        </div>
    );
}

export default InputField;
