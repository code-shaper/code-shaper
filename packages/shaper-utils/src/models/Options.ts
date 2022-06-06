/**
 * Options is a hash of key-value pairs, where keys are strings and values
 * can be anything (usually strings, arrays or objects).
 *
 * Example:
 * {
 *   "itemName": "Button",
 *   "workspace": "packages/ui-lib",
 *   "dirInWorkspace": "src/components/Button",
 * }
 */
export type Options = { [option: string]: unknown };
