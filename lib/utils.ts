import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const copyToClipboard = async (text: string) => {
  if ("clipboard" in navigator) {
    await navigator.clipboard.writeText(text)
  } else {
    // Fallback for older browsers
    const textarea = document.createElement("textarea")
    textarea.value = text
    document.body.appendChild(textarea)
    textarea.focus()
    textarea.select()
    document.execCommand("copy")
    document.body.removeChild(textarea)
  }
}

import { PhantomProvider } from "@/types"

/**
 * Retrieves the Phantom Provider from the window object
 * @returns {PhantomProvider | undefined} a Phantom provider if one exists in the window
 */
export const getProvider = (): PhantomProvider | undefined => {
  if ("phantom" in window) {
    const anyWindow: any = window
    const provider = anyWindow.phantom?.solana

    if (provider?.isPhantom) {
      return provider
    }
  }
}
