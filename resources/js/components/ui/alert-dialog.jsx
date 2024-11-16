import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

/**
 * @typedef {React.ElementRef<typeof AlertDialogPrimitive.Overlay>} AlertDialogOverlayElement
 * @typedef {React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>} AlertDialogOverlayProps
 */

/**
 * @type {ReturnType<typeof React.forwardRef<AlertDialogOverlayElement, AlertDialogOverlayProps>>}
 */
const AlertDialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Overlay
        className={cn(
            "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            className
        )}
        {...props}
        ref={ref}
    />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

/**
 * @typedef {React.ElementRef<typeof AlertDialogPrimitive.Content>} AlertDialogContentElement
 * @typedef {React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>} AlertDialogContentProps
 */

/**
 * @type {ReturnType<typeof React.forwardRef<AlertDialogContentElement, AlertDialogContentProps>>}
 */
const AlertDialogContent = React.forwardRef(({ className, ...props }, ref) => (
    <AlertDialogPortal>
        <AlertDialogOverlay />
        <AlertDialogPrimitive.Content
            ref={ref}
            className={cn(
                "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                className
            )}
            {...props}
        />
    </AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

/**
 * @param {React.HTMLAttributes<HTMLDivElement>} props
 */
const AlertDialogHeader = ({
    className,
    ...props
}) => (
    <div
        className={cn(
            "flex flex-col space-y-2 text-center sm:text-left",
            className
        )}
        {...props}
    />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

/**
 * @param {React.HTMLAttributes<HTMLDivElement>} props
 */
const AlertDialogFooter = ({
    className,
    ...props
}) => (
    <div
        className={cn(
            "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
            className
        )}
        {...props}
    />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

/**
 * @typedef {React.ElementRef<typeof AlertDialogPrimitive.Title>} AlertDialogTitleElement
 * @typedef {React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>} AlertDialogTitleProps
 */

/**
 * @type {ReturnType<typeof React.forwardRef<AlertDialogTitleElement, AlertDialogTitleProps>>}
 */
const AlertDialogTitle = React.forwardRef(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Title
        ref={ref}
        className={cn("text-lg font-semibold", className)}
        {...props}
    />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

/**
 * @typedef {React.ElementRef<typeof AlertDialogPrimitive.Description>} AlertDialogDescriptionElement
 * @typedef {React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>} AlertDialogDescriptionProps
 */

/**
 * @type {ReturnType<typeof React.forwardRef<AlertDialogDescriptionElement, AlertDialogDescriptionProps>>}
 */
const AlertDialogDescription = React.forwardRef(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Description
        ref={ref}
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
    />
));
AlertDialogDescription.displayName =
    AlertDialogPrimitive.Description.displayName;

/**
 * @typedef {React.ElementRef<typeof AlertDialogPrimitive.Action>} AlertDialogActionElement
 * @typedef {React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>} AlertDialogActionProps
 */

/**
 * @type {ReturnType<typeof React.forwardRef<AlertDialogActionElement, AlertDialogActionProps>>}
 */
const AlertDialogAction = React.forwardRef(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Action
        ref={ref}
        className={cn(buttonVariants(), className)}
        {...props}
    />
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

/**
 * @typedef {React.ElementRef<typeof AlertDialogPrimitive.Cancel>} AlertDialogCancelElement
 * @typedef {React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>} AlertDialogCancelProps
 */

/**
 * @type {ReturnType<typeof React.forwardRef<AlertDialogCancelElement, AlertDialogCancelProps>>}
 */
const AlertDialogCancel = React.forwardRef(({ className, ...props }, ref) => (
    <AlertDialogPrimitive.Cancel
        ref={ref}
        className={cn(
            buttonVariants({ variant: "outline" }),
            "mt-2 sm:mt-0",
            className
        )}
        {...props}
    />
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

export {
    AlertDialog,
    AlertDialogPortal,
    AlertDialogOverlay,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogAction,
    AlertDialogCancel,
};
