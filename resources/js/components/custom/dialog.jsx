import { forwardRef } from "react";

import { ScrollArea } from "@/components/ui/scroll-area";

/**
 * @type {import("@/components/ui/scroll-area").ScrollAreaNode}
 */
export const DialogBody = forwardRef(
    function DialogBody({ className, children, ...props }, ref) {
        return (
            <ScrollArea
                ref={ref}
                className={`max-h-[calc(100dvh-(theme(spacing.6)*2)-(theme(spacing.12)*2)-theme(spacing.10))] overflow--visible ${className}`}
                {...props}
            >
                <div className="py-4 px-1">
                    {children}
                </div>
            </ScrollArea>
        );
    }
);
