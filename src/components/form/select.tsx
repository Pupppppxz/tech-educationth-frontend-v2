/* eslint-disable import/no-unresolved */

"use client";

import { ErrorMessage, useField, useFormikContext } from "formik";
import Select from "react-select";
import { StateManagerProps } from "react-select/dist/declarations/src/useStateManager";
import { ClassValue } from "clsx";
import { IFormGroupedOption, IFormOption } from "@/models/local/form";
import { cn } from "@/utilities";
import { RenderError } from "./error";

type InputSelectProps = {
    name: string;
    label?: string;
    labelClassName?: ClassValue;
} & Omit<
    StateManagerProps<IFormOption, false | true, IFormGroupedOption>,
    "value" | "onChange" | "className"
>;

function InputSelect(props: InputSelectProps) {
    const { name, id, label, labelClassName, ...restProps } = props;
    const [field] = useField(name);
    const { setFieldValue } = useFormikContext();

    // eslint-disable-next-line react/destructuring-assignment
    const flattenedOptions = props.options?.flatMap(o => {
        const isNotGrouped = "value" in o;
        if (isNotGrouped) {
            return o;
        }
        return o.options;
    });

    const value = flattenedOptions?.filter(o => {
        const isArrayValue = Array.isArray(field.value);

        if (isArrayValue) {
            const values = field.value as Array<unknown>;
            return values.includes(o.value);
        }
        return field.value === o.value;
    });

    return (
        <div className="flex flex-col gap-y-2">
            {label ? (
                <label
                    className={cn(
                        "font-bold text-xl text-main-dark-blue",
                        labelClassName
                    )}
                    htmlFor={id}
                >
                    {label}
                </label>
            ) : null}
            <Select
                {...restProps}
                // menuPortalTarget={document.body}
                id={id}
                value={value}
                styles={{
                    control: (provided: Record<string, unknown>) => ({
                        ...provided,
                        height: 52,
                        border: "1px solid #878787",
                        padding: "0px 10px",
                        borderRadius: "10px",
                        boxShadow: "none",
                        "&:focus": {
                            border: "1px solid #0f1c71",
                        },
                    }),
                    menuPortal: base => ({ ...base, zIndex: 30 }),
                    menu: provided => ({ ...provided, zIndex: 30 }),
                }}
                onChange={val => {
                    const newValue = val as IFormOption[] | IFormOption;
                    const isArray = Array.isArray(newValue);
                    if (isArray) {
                        const values = newValue.map(o => o.value);
                        setFieldValue(name, values);
                    } else {
                        setFieldValue(name, newValue.value);
                    }
                }}
            />
            <ErrorMessage name={name} render={RenderError} />
        </div>
    );
}

export default InputSelect;
