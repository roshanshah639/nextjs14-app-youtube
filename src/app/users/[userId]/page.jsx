import React from "react";

const UserPage = ({ params }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-xl font-bold">User Page of {params.userId}</h1>
    </div>
  );
};

export default UserPage;
