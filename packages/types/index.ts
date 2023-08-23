export type Maybe<T> = T | null | undefined;

export type AsyncMaybe<T> = Promise<Maybe<T>>;

export type PickOut<T, TProp extends keyof T> = T[TProp];

export type ExtractOut<ArrType> = ArrType extends readonly (infer ElementType)[]
    ? ElementType
    : never;

export type Icon = React.ComponentProps<'svg'> & {
    title?: string;
    titleId?: string;
};

export type ForwardRefExoticIcon = React.ForwardRefExoticComponent<Icon>;

export type PropsWithClassName<T = undefined> = T extends undefined
    ? { className?: string }
    : T & { className?: string };
