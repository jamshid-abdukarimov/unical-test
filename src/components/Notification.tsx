import { Toaster } from "react-hot-toast";

const Notification = () => {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        duration: 3000,
        style: {
          fontSize: 16,
          color: "#17216b",
          fontWeight: 500,
          background: "white",
        },
      }}
    />
  );
};

export default Notification;
