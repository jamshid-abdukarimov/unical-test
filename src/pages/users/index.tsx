import Table from "../../components/Table";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import Pagination from "../../components/Pagination";
import Title from "../../components/Title";
import Input from "../../components/Input";
import useUsers from "./useUsers.hooks";

const LIMIT = 10;
const UsersPage = () => {
  const {
    searchValue,
    setPage,
    setSearchValue,
    total,
    users,
    usersError,
    usersLoading,
    skip,
    page,
  } = useUsers(LIMIT);

  if (usersLoading) return <Loader main />;

  if (usersError) return <div>{usersError}</div>;
  return (
    <>
      <div className="mb-3 flex justify-between items-center flex-wrap gap-5">
        <div>
          <Title>Users</Title>
          <p>
            Showing{" "}
            {skip != undefined
              ? `${skip + 1} - ${skip + users.length}`
              : users?.length}{" "}
            of {total}
          </p>
        </div>
        <Input
          className="w-96"
          value={searchValue}
          type="search"
          placeholder="Search for users (First and Last Name)..."
          onChange={(e) => setSearchValue!(e.target.value)}
        />
      </div>
      <Table
        renderHeads={(key, cols, name) => {
          key;
          cols;
          return name;
        }}
        cols={[
          ["id", "ID"],
          ["firstName", "First Name"],
          ["lastName", "Last Name"],
          ["email", "Email"],
          ["username", "Username"],
          ["gender", "Gender"],
          ["editors", "Editors"],
        ]}
        render={(key, item) => {
          if (key === "editors") {
            return (
              <Link
                to={`/users/details/${item.id}`}
                className="text-blue-500 font-semibold"
              >
                View profile
              </Link>
            );
          }

          return item[key as keyof typeof item];
        }}
        data={users}
      />
      {!(LIMIT >= total) && (
        <div className="col-span-full">
          <Pagination
            allPages={Math.ceil(total / LIMIT)}
            currentPage={page}
            setCurrentPage={setPage}
          />
        </div>
      )}
    </>
  );
};

export default UsersPage;
