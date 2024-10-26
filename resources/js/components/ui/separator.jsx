import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

/**
 * @typedef {React.ElementRef<typeof SeparatorPrimitive.Root>} SeparatorElement
 * @typedef {React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>} SeparatorProps
 */

/**
 * @type {ReturnType<typeof React.forwardRef<SeparatorElement, SeparatorProps>>}
 */
const Separator = React.forwardRef(
    (
        { className, orientation = "horizontal", decorative = true, ...props },
        ref
    ) => (
        <SeparatorPrimitive.Root
            ref={ref}
            decorative={decorative}
            orientation={orientation}
            className={cn(
                "shrink-0 bg-border",
                orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
                className
            )}
            {...props}
        />
    )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
