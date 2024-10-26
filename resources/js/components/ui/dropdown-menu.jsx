import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

/**
 * @typedef {React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>} DropdownMenuSubTriggerElement
 * @typedef {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger>} PrimitiveDropdownMenuSubTriggerProps
 *
 * @typedef {Object} AdditionalDropdownMenuSubTriggerProps
 * @property {boolean} [inset]
 *
 * @typedef {PrimitiveDropdownMenuSubTriggerProps & AdditionalDropdownMenuSubTriggerProps} DropdownMenuSubTriggerProps
 */

/**
 * @type {ReturnType<typeof React.forwardRef<DropdownMenuSubTriggerElement, DropdownMenuSubTriggerProps>>}
 */
const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => (
    <DropdownMenuPrimitive.SubTrigger
        ref={ref}
        className={cn(
            "flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
            inset && "pl-8",
            className
        )}
        {...props}
    >
        {children}
        <ChevronRight className="ml-auto" />
    </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

/**
 * @typedef {React.ElementRef<typeof DropdownMenuPrimitive.SubContent>} DropdownMenuSubContentElement
 * @typedef {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>} DropdownMenuSubContentProps
 */

/**
 * @type {ReturnType<typeof React.forwardRef<DropdownMenuSubContentElement, DropdownMenuSubContentProps>>}
 */
const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => (
    <DropdownMenuPrimitive.SubContent
        ref={ref}
        className={cn(
            "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            className
        )}
        {...props}
    />
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

/**
 * @typedef {React.ElementRef<typeof DropdownMenuPrimitive.Content>} DropdownMenuContentElement
 * @typedef {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>} DropdownMenuContentProps
 */

/**
 * @type {ReturnType<typeof React.forwardRef<DropdownMenuContentElement, DropdownMenuContentProps>>}
 */
const DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => (
    <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
            ref={ref}
            sideOffset={sideOffset}
            className={cn(
                "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                className
            )}
            {...props}
        />
    </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

/**
 * @typedef {React.ElementRef<typeof DropdownMenuPrimitive.Item>} DropdownMenuItemElement
 * @typedef {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>} PrimitiveDropdownMenuItemProps
 *
 * @typedef {Object} AdditionalDropdownMenuItemProps
 * @property {boolean} [inset]
 *
 * @typedef {PrimitiveDropdownMenuItemProps & AdditionalDropdownMenuItemProps} DropdownMenuItemProps
 */

/**
 * @type {ReturnType<typeof React.forwardRef<DropdownMenuItemElement, DropdownMenuItemProps>>}
 */
const DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => (
    <DropdownMenuPrimitive.Item
        ref={ref}
        className={cn(
            "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
            inset && "pl-8",
            className
        )}
        {...props}
    />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

/**
 * @typedef {React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>} DropdownMenuCheckboxItemElement
 * @typedef {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>} DropdownMenuCheckboxItemProps
 */

/**
 * @type {ReturnType<typeof React.forwardRef<DropdownMenuCheckboxItemElement, DropdownMenuCheckboxItemProps>>}
 */
const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => (
    <DropdownMenuPrimitive.CheckboxItem
        ref={ref}
        className={cn(
            "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            className
        )}
        checked={checked}
        {...props}
    >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
            <DropdownMenuPrimitive.ItemIndicator>
                <Check className="h-4 w-4" />
            </DropdownMenuPrimitive.ItemIndicator>
        </span>
        {children}
    </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

/**
 * @typedef {React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>} DropdownMenuRadioItemElement
 * @typedef {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>} DropdownMenuRadioItemProps
 */

/**
 * @type {ReturnType<typeof React.forwardRef<DropdownMenuRadioItemElement, DropdownMenuRadioItemProps>>}
 */
const DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => (
    <DropdownMenuPrimitive.RadioItem
        ref={ref}
        className={cn(
            "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            className
        )}
        {...props}
    >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
            <DropdownMenuPrimitive.ItemIndicator>
                <Circle className="h-2 w-2 fill-current" />
            </DropdownMenuPrimitive.ItemIndicator>
        </span>
        {children}
    </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

/**
 * @typedef {React.ElementRef<typeof DropdownMenuPrimitive.Label>} DropdownMenuLabelElement
 * @typedef {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>} PrimitiveDropdownMenuLabelProps
 *
 * @typedef {Object} AdditionalDropdownMenuLabelProps
 * @property {boolean} [inset]
 *
 * @typedef {PrimitiveDropdownMenuLabelProps & AdditionalDropdownMenuLabelProps} DropdownMenuLabelProps
 */

/**
 * @type {ReturnType<typeof React.forwardRef<DropdownMenuLabelElement, DropdownMenuLabelProps>>}
 */
const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => (
    <DropdownMenuPrimitive.Label
        ref={ref}
        className={cn(
            "px-2 py-1.5 text-sm font-semibold",
            inset && "pl-8",
            className
        )}
        {...props}
    />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

/**
 * @typedef {React.ElementRef<typeof DropdownMenuPrimitive.Separator>} DropdownMenuSeparatorElement
 * @typedef {React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>} DropdownMenuSeparatorProps
 */

/**
 * @type {ReturnType<typeof React.forwardRef<DropdownMenuSeparatorElement, DropdownMenuSeparatorProps>>}
 */
const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => (
    <DropdownMenuPrimitive.Separator
        ref={ref}
        className={cn("-mx-1 my-1 h-px bg-muted", className)}
        {...props}
    />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

/**
 * @param {React.HTMLAttributes<HTMLSpanElement>} props
 */
const DropdownMenuShortcut = ({ className, ...props }) => {
    return (
        <span
            className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
            {...props}
        />
    );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuCheckboxItem,
    DropdownMenuRadioItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuGroup,
    DropdownMenuPortal,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuRadioGroup,
};
