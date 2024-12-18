import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * @typedef {React.InputHTMLAttributes<HTMLInputElement>} PrimitiveInputProps
 *
 * @typedef {Object} AdditionalInputProps
 * @property {boolean} [invalid]
 *
 * @typedef {PrimitiveInputProps & AdditionalInputProps} InputProps
 */

/**
 * @type {ReturnType<typeof React.forwardRef<HTMLInputElement, InputProps>>}
 */
const Input = React.forwardRef(
    ({ invalid = false, type = "text", className, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    "data-[invalid=true]:border-destructive data-[invalid=true]:focus-visible:ring-destructive",
                    className
                )}
                ref={ref}
                data-invalid={invalid}
                {...props}
            />
        );
    }
);
Input.displayName = "Input";

export { Input };
