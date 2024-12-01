/**
 * A utility function to merge class names together.
 *
 * This function is necessary because `clsx` does not support Tailwind CSS's
 * built-in class merging syntax.
 *
 * @param inputs - The class names to merge together.
 * @returns The merged class names.
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
