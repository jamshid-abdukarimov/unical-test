import { StoreKeyOf } from "../store";

export type Keys<T> = Exclude<StoreKeyOf, T>;
