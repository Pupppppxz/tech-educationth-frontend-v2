"use client";

import { ErrorMessage, Field, FieldAttributes, useField } from "formik";
import { ClassValue } from "clsx";
import { ChangeEvent, JSX } from "react";
import { cn } from "@/utilities/className";
import { FormChangeProps } from "@/models/local/form";
import { IHoverIcon } from "@/models/icon";
import { RenderError } from "./error";

type InputIconFieldProps = FieldAttributes<unknown> & {
    label?: string;
    labelClassName?: ClassValue;
    icon: (params: IHoverIcon) => JSX.Element;
    iconClassName?: ClassValue;
    onTransformInput?: (value: FormChangeProps) => string;
    handleChange?: (value: string) => void;
};

function InputIconField({
    label,
    labelClassName = "",
    className: inputClassName = "",
    iconClassName,
    id,
    name,
    onTransformInput,
    icon: Icon,
    handleChange,
    ...props
}: InputIconFieldProps) {
    const [, , helper] = useField(name);
    const { setValue } = helper;
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
        <div className="mb-2">
            <div className="flex flex-col items-start gap-y-3">
                {label ? (
                    <label
                        htmlFor={id}
                        className={cn("text-black", labelClassName)}
                    >
                        {label}
                    </label>
                ) : null}
                <div className="grid grid-cols-[50px_1fr] w-full rounded-lg border-2 border-black">
                    <div className="flex w-full justify-center items-center">
                        <Icon className={iconClassName} />
                    </div>
                    <Field
                        id={id}
                        name={name}
                        className={cn(
                            "w-full bg-transparent pr-4 py-3 text-main-dark-blue placeholder-main-dark-gray focus:outline-none",
                            inputClassName
                        )}
                        onChange={handleInputChange}
                        {...props}
                    />
                </div>
            </div>
            <ErrorMessage name={name} render={RenderError} />
        </div>
    );
}

export default InputIconField;
