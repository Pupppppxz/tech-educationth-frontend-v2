export type FormChangeProps = string | string[] | number | boolean;

export type IFormOption = {
    label: string;
    value: unknown;
};

export type IFormGroupedOption = {
    label: string;
    options: IFormOption[];
};
