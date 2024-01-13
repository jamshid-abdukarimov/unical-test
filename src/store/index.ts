import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface Data<T> {
  loading: boolean;
  data: T;
  error: string | null;
}

type RemoveType<Type> = Type extends
  | "setData"
  | "setLoading"
  | "setError"
  | "setUser"
  | "user"
  | "reset"
  ? never
  : Type;

export type StoreKeyOf = RemoveType<keyof StoreProps>;

export interface StoreProps {
  user: User;
  todos: Data<{
    total: number;
    items: Todo[];
  }>;
  categories: Data<string[]>;
  products: Data<{
    total: number;
    items: Product[];
  }>;
  posts: Data<{
    total: number;
    items: Post[];
  }>;
  users: Data<{
    total: number;
    items: User[];
  }>;
  setUser: (user: User) => void;
  reset: () => void;
  setData: <Type extends StoreKeyOf>(
    ...args: [key: Type, data: StoreProps[Type]["data"]]
  ) => void;
  setLoading: (key: StoreKeyOf | StoreKeyOf[]) => void;
  setError: (error: string | null, key: StoreKeyOf | StoreKeyOf[]) => void;
}

const initialData = {
  loading: true,
  data: {
    total: 0,
    items: [],
  },
  error: null,
};

const useStore = create(
  devtools<StoreProps>((set) => ({
    setUser: (user: User) => set({ user }, false, "setUser"),
    todos: initialData,
    categories: {
      error: null,
      loading: true,
      data: [],
    },
    products: initialData,
    posts: initialData,
    users: initialData,
    reset: () =>
      set(
        {
          todos: initialData,
          user: {} as User,
        },
        false,
        "reset"
      ),
    user: {} as User,
    setData: (key, data) =>
      set(
        {
          [key]: {
            data,
            loading: false,
            error: null,
          },
        },
        false,
        key
      ),
    setLoading: (key) => {
      if (Array.isArray(key)) {
        let newObj: any = {};
        key.forEach((k) => {
          newObj[k] = {
            data: [
              {
                total: 0,
                items: [],
              },
            ],
            loading: true,
            error: null,
          };
        });
        return set(
          {
            ...newObj,
          },
          false,
          "setLoadings"
        );
      } else {
        return set(
          {
            [key]: {
              data: {
                items: [],
                total: 0,
              },
              loading: true,
              error: null,
            },
          },
          false,
          key + "Loading"
        );
      }
    },
    setError: (error, key) => {
      if (Array.isArray(key)) {
        let newObj: any = {};
        key.forEach((k) => {
          newObj[k] = {
            data: [
              {
                total: 0,
                items: [],
              },
            ],
            loading: false,
            error,
          };
        });
        return set(
          {
            ...newObj,
          },
          false,
          "setErrors"
        );
      } else {
        return set(
          {
            [key]: {
              data: {
                items: [],
                total: 0,
              },
              loading: false,
              error,
            },
          },
          false,
          key + "Error"
        );
      }
    },
  }))
);

export default useStore;
