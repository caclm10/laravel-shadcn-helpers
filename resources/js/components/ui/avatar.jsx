import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

/**
 * @typedef {React.ElementRef<typeof AvatarPrimitive.Root>} AvatarElement
 * @typedef {React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>} AvatarProps
 */

/**
 * @type {ReturnType<typeof React.forwardRef<AvatarElement, AvatarProps>>}
 */
const Avatar = React.forwardRef(({ className, ...props }, ref) => (
    <AvatarPrimitive.Root
        ref={ref}
        className={cn(
            "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
            className
        )}
        {...props}
    />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

/**
 * @typedef {React.ElementRef<typeof AvatarPrimitive.Image>} AvatarImageElement
 * @typedef {React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>} AvatarImageProps
 */

/**
 * @type {ReturnType<typeof React.forwardRef<AvatarImageElement, AvatarImageProps>>}
 */
const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (
    <AvatarPrimitive.Image
        ref={ref}
        className={cn("aspect-square h-full w-full", className)}
        {...props}
    />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

/**
 * @typedef {React.ElementRef<typeof AvatarPrimitive.Fallback>} AvatarFallbackElement
 * @typedef {React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>} AvatarFallbackProps
 */

/**
 * @type {ReturnType<typeof React.forwardRef<AvatarFallbackElement, AvatarFallbackProps>>}
 */
const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (
    <AvatarPrimitive.Fallback
        ref={ref}
        className={cn(
            "flex h-full w-full items-center justify-center rounded-full bg-muted",
            className
        )}
        {...props}
    />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
