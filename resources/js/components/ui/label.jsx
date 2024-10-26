import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const labelVariants = cva(
    "inline-block mb-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

/**
 * @typedef {React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>} PrimitiveLabelProps
 * @typedef {import("class-variance-authority").VariantProps<typeof labelVariants>} LabelVariantProps
 *
 * @typedef {PrimitiveLabelProps & LabelVariantProps} LabelProps
 */

/**
 * @type {ReturnType<typeof React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, PrimitiveLabelProps>>}
 */
const Label = React.forwardRef(({ className, ...props }, ref) => (
    <LabelPrimitive.Root
        ref={ref}
        className={cn(labelVariants(), className)}
        {...props}
    />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
