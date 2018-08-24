export type Diff<A, B> = A extends B ? never : A

export type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>
