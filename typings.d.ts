declare module "*.md" {
    const value: string;
    export default value;
}

interface Error {
    name: string;
    message: string;
    stack?: string;
    status: number;
    type?: string;
}

interface ErrorConstructor {
    new(message?: string): Error;
    (message?: string): Error;
    readonly prototype: Error;
}

interface AssertionError extends Error {
    status: number;
}

interface AssertionErrorConstructor {
    new(message?: string): AssertionError;
    (message?: string): AssertionError;
    readonly prototype: AssertionError;
}

interface EvalError extends Error {
}

interface EvalErrorConstructor {
    new(message?: string): EvalError;
    (message?: string): EvalError;
    readonly prototype: EvalError;
}

interface RangeError extends Error {
}

interface RangeErrorConstructor {
    new(message?: string): RangeError;
    (message?: string): RangeError;
    readonly prototype: RangeError;
}

interface ReferenceError extends Error {
}

interface ReferenceErrorConstructor {
    new(message?: string): ReferenceError;
    (message?: string): ReferenceError;
    readonly prototype: ReferenceError;
}

interface SyntaxError extends Error {
}

interface SyntaxErrorConstructor {
    new(message?: string): SyntaxError;
    (message?: string): SyntaxError;
    readonly prototype: SyntaxError;
}

interface TypeError extends Error {
}

interface TypeErrorConstructor {
    new(message?: string): TypeError;
    (message?: string): TypeError;
    readonly prototype: TypeError;
}

interface URIError extends Error {
}

interface URIErrorConstructor {
    new(message?: string): URIError;
    (message?: string): URIError;
    readonly prototype: URIError;
}
