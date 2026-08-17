import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Base path from Astro config. henzis.com is served from the domain root, so this
// is '/' and withBase() is a passthrough — kept because the upstream theme's
// components call it throughout, and it costs nothing.
const BASE_PATH = import.meta.env.BASE_URL || '/';

/**
 * Prepends the configured base path to a URL.
 * @param path - The path to prepend the base to (e.g., '/components')
 * @returns The full path with base
 */
export function withBase(path: string): string {
  // Handle hash-only links (e.g., '#features')
  if (path.startsWith('#')) {
    return path;
  }

  // Handle absolute URLs (external links)
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  // Remove trailing slash from base and leading slash from path, then combine
  const base = BASE_PATH.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  return `${base}${cleanPath}`;
}
