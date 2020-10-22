export interface Validator {
  isValid(s: string): boolean;
}

// TypeScript also allows you to rename declarations for module consumers

//export { Validator };

// TypeScript also allows you to rename declarations for module consumers

//export { Validator as StringValidator };