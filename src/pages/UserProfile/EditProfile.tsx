import React from "react";

const EditProfile = () => {
  return (
    <div className="mt-4">
      <h3 className="text-xl font-medium ">Edit Profile</h3>
      <div className="shadow-lg bg-[#f9f9fa]">
        <form action="" className="flex flex-col p-2 mt-3">
          <div className="form-group mb-3 text-sm lg:text-lg">
            <label htmlFor="fullName" className="text-base font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              className="form-control rouded-md  h-12 text-sm"
              id="fullName"
              maxLength={100}
              aria-describedby="full name of user"
              placeholder="John Doe"
            />
          </div>

          <div className="form-group mb-3 text-sm lg:text-lg">
            <label htmlFor="userEmail" className="text-base font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              className="form-control rouded-md  h-12 text-sm"
              id="userEmail"
              maxLength={50}
              aria-describedby="user email id"
              placeholder="john@example.com"
            />
          </div>

          <div className="form-group mb-3 text-sm lg:text-lg">
            <label htmlFor="userPhone" className="text-base font-medium mb-2">
              Phone
            </label>
            <input
              type="tel"
              className="form-control rouded-md  h-12 text-sm"
              id="userPhone"
              maxLength={15}
              aria-describedby="user phone number"
              placeholder="+1 (555) 555-5555"
            />
          </div>

          <div className="form-group text-sm lg:text-lg">
            <label htmlFor="password" className="text-base font-medium mb-2">
              Change Password
            </label>
            <input
              type="password"
              className="form-control rounded-md  h-12 text-sm"
              id="password"
              maxLength={100}
              placeholder="Enter a new password"
            />
          </div>

          <button
            type="submit"
            className="bg-[#DF2B4A] rounded-md text-white font-medium text-base lg:text-lg h-12  mt-4 lg:mt-10"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
