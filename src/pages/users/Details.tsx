import Loader from "../../components/Loader";
import Button from "../../components/Button";
import useDetails from "./useDetails.hooks";

const UsersDetails = () => {
  const { user, loading, error, navigation } = useDetails();

  if (loading) {
    return <Loader main />;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <img
        src={user?.image}
        alt="User Avatar"
        className="w-20 h-20 mx-auto rounded-full mb-4"
      />
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">
        {user?.firstName} {user?.lastName}
      </h1>
      <p>
        <span className="font-semibold">Username:</span> {user?.username}
      </p>
      <div className="grid grid-cols-6 gap-5 mt-6">
        <div className="col-span-2">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            User Information
          </h2>
          <p>
            <span className="font-semibold">Email:</span> {user?.email}
          </p>
          <p>
            <span className="font-semibold">Phone:</span> {user?.phone}
          </p>
          <p>
            <span className="font-semibold">Age:</span> {user?.age}
          </p>
          <p>
            <span className="font-semibold">Gender:</span> {user?.gender}
          </p>
          <p>
            <span className="font-semibold">Birth Date:</span> {user?.birthDate}
          </p>
        </div>
        <div className="col-span-2">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Address Information
          </h2>
          <p>
            <span className="font-semibold">Address:</span>{" "}
            {user?.address?.address}, {user?.address?.state},{" "}
            {user?.address?.city}
          </p>
          <p>
            <span className="font-semibold">Coordinates:</span> Lat:{" "}
            {user?.address?.coordinates?.lat}, Lng:{" "}
            {user?.address?.coordinates?.lng}
          </p>
        </div>
        <div className="col-span-2">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Company Information
          </h2>
          <p>
            <span className="font-semibold">Company:</span>{" "}
            {user?.company?.name}
          </p>
          <p>
            <span className="font-semibold">Department:</span>{" "}
            {user?.company?.department}
          </p>
          <p>
            <span className="font-semibold">Title:</span> {user?.company?.title}
          </p>
        </div>
      </div>
      <div className="flex gap-3 mt-4">
        <Button onClick={() => navigation("posts")}>
          {user?.firstName}'s Posts
        </Button>
        <Button onClick={() => navigation("todos")}>
          {user?.firstName}'s Todos
        </Button>
      </div>
    </div>
  );
};

export default UsersDetails;
