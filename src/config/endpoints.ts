const ENDPOINTS = {
  LOGIN: "/auth/login",
  ME: "/auth/me",
  PRODUCTS: "/products",
  PRODUCTS_SEARCH: "/products/search",
  USERS: "/users",
  USERS_SEARCH: "/users/search",
  POSTS: "/posts",
  POSTS_SEARCH: "/posts/search",
  TODOS: "/todos",
  TODOS_ADD: "/todos/add",
  CATEGORIES: "/products/categories",
  POST_COMMENTS: `/posts/${{ id: ":id" }}/comments`,
} as const;

type ObjectValues<T> = T[keyof T];

export type Endpoints = ObjectValues<typeof ENDPOINTS>;
