import sofaSet from "../assets/sofaSet.png";

const ProfileSummary = () => {
  return (
    <div className="mt-4">
      <h3 className="text-xl font-medium ">ProfileSummary</h3>
      <div className="shadow-md flex mt-3 p-2 bg-[#f9f9fa]">
        <img
          className="w-[70px] h-[70px] rounded-full"
          src={sofaSet}
          alt="profile picture of user"
        />
        <div className="flex flex-col ml-5">
          <h4 className="font-medium text-lg">John Doe</h4>
          <p>john@example.com</p>
          <p>+1 (555) 555-5555</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSummary;
