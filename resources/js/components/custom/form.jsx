import {
    createContext,
    forwardRef,
    useContext,
    useId,
} from "react";
import { twMerge } from "tailwind-merge";

import { Label } from "@/components/ui/label";

/**
 * @typedef {Object} FormControlContext
 * @property {string} inputId
 * @property {string} [error]
 */

/**
 * @type {ReturnType<typeof createContext<FormControlContext | null>>}
 */
const FormControlContext = createContext(null);

function useFormControl() {
    const context = useContext(FormControlContext);
    if (!context) {
        throw new Error("useForm must be used within a FormControl component");
    }

    return context;
}

/**
 * @typedef {import("react").HTMLAttributes<HTMLDivElement>} PrimitiveFormControlProps
 *
 * @callback renderField
 * @param {Object} field
 * @param {string} field.id
 * @param {boolean} [field.invalid]
 * @param {import("react").ChangeEventHandler<HTMLInputElement>} field.onChange
 * @returns {import("react").ReactNode}
 */

/**
 * @template [TForm={}]
 * @typedef {Object} AdditionalFormControlProps
 * @property {ReturnType<typeof import("@inertiajs/react").useForm<TForm>>} form
 * @property {keyof TForm} name
 * @property {renderField} render
 */

/**
 * @template [TForm={}]
 * @typedef {PrimitiveFormControlProps & AdditionalFormControlProps<TForm>} FormControlProps
 */

/**
 * @template [TForm={}]
 * @type {ReturnType<typeof forwardRef<HTMLDivElement, FormControlProps<TForm>>>}
 */
export const FormControl = forwardRef(
    function FormControl({ name, form, render, ...props }, ref) {
        const inputId = useId();

        const error = form.errors[name];

        /**
         * @param {import("react").ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} event
         */
        function handleChange(event) {
            form.setData(name, event.target.value);
        }

        return (
            <FormControlContext.Provider value={{ inputId, error }}>
                <div ref={ref} {...props}>
                    {render({
                        id: inputId,
                        invalid: !!error,
                        onChange: handleChange,
                    })}
                </div>
            </FormControlContext.Provider>
        );
    }
);

/**
 * @typedef {import("react").ElementRef<typeof Label>} FormLabelElement
 * @typedef {import("react").ComponentPropsWithoutRef<typeof Label>} FormLabelProps
 *
 * @type {ReturnType<typeof forwardRef<HTMLLabelElement, FormLabelProps>>}
 */
export const FormLabel = forwardRef(function FormLabel(props, ref) {
    const { inputId } = useFormControl();

    return <Label ref={ref} htmlFor={inputId} {...props} />;
});

/**
 * @type {ReturnType<typeof forwardRef<HTMLParagraphElement, import("react").HTMLAttributes<HTMLParagraphElement>>>}
 */
export const FormMessage = forwardRef(function FormMessage({ className, ...props }, ref) {
    const { error } = useFormControl();

    if (!error) return null;

    return (
        <p
            ref={ref}
            className={twMerge("text-xs mt-1.5 text-destructive", className)}
            {...props}
        >
            {error}
        </p>
    );
});

/**
 * @type {ReturnType<typeof forwardRef<HTMLDivElement, import("react").HTMLAttributes<HTMLDivElement>>>}
 */
export const FormFields = forwardRef(
    function FormFields({ className, ...props }, ref) {
        return (
            <div
                ref={ref}
                className={twMerge("flex flex-col gap-y-4", className)}
                {...props}
            />
        );
    }
);

/**
 * @type {ReturnType<typeof forwardRef<HTMLDivElement, import("react").HTMLAttributes<HTMLDivElement>>>}
 */
export const FormActions = forwardRef(
    function FormActions({ className, ...props }, ref) {
        return (
            <div
                ref={ref}
                className={twMerge("flex items-center justify-end gap-x-3", className)}
                {...props}
            />
        );
    }
);
