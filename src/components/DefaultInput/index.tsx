import type React from "react";

type DefaultInputProps = {
    id: string,
    labelText?: string
} & React.ComponentProps<'input'>;

export function DefaultInput({ id, labelText, ...rest }: DefaultInputProps) {
    return (
        <>
            {labelText && <label htmlFor={id}>{labelText}</label>}
            <input id={id} {...rest} />
        </>
    );
}