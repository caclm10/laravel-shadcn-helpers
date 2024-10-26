import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * A shortcut for {@linkcode twMerge} that uses {@linkcode clsx} under the hood.
 *
 * It's a typesafe alternative to using template literals for combining classnames.
 *
 * @example
 * import { cn } from "~/lib/utils"
 *
 * cn("bg-red-500 hover:bg-red-300", "text-white") // => "bg-red-500 hover:bg-red-300 text-white"
 *
 * @param {import("clsx").ClassValue[]} inputs - The classnames to combine
 */
export function cn(...inputs) {
    return twMerge(clsx(inputs))
}
