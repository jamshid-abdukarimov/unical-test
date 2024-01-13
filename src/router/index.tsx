import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "../layout";
import Login from "../pages/login";
import NotFound from "../pages/NotFound";
import TodosPage from "../pages/todo";
import ProductsPage from "../pages/products";
import ProductsWithCategory from "../pages/products/ProductsWithCategory";
import Details from "../pages/products/Details";
import PostsPage from "../pages/posts";
import PostDetails from "../pages/posts/Details";
import UsersPage from "../pages/users";
import UsersDetails from "../pages/users/Details";
import UsersTodos from "../pages/users/UsersTodos";
import UsersPosts from "../pages/users/UsersPosts";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/todos" replace={false} />} />
          <Route path="todos" element={<TodosPage />} />
          <Route path="products">
            <Route index element={<ProductsPage />} />
            <Route path=":category" element={<ProductsWithCategory />} />
            <Route path="details/:id" element={<Details />} />
          </Route>
          <Route path="posts">
            <Route index element={<PostsPage />} />
            <Route path=":id" element={<PostDetails />} />
          </Route>
          <Route path="users">
            <Route index element={<UsersPage />} />
            <Route path="details/:id" element={<UsersDetails />} />
            <Route path=":id/todos" element={<UsersTodos />} />
            <Route path=":id/posts" element={<UsersPosts />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
