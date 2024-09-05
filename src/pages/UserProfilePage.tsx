import EditProfile from "../components/EditProfile";
import NavBar from "../components/NavBar";
import PastOrder from "../components/PastOrder";
import ProfileSummary from "../components/ProfileSummary";
import Reviews from "../components/Reviews";

const UserProfilePage = () => {
  return (
    <>
      <NavBar showFullNav={false} />
      <div className="m-2 shadow-lg p-3">
        <h2 className="text-2xl font-bold">User Profile</h2>
        <hr />
        <div className="m-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <ProfileSummary />
          <EditProfile />
        </div>
        <PastOrder />
        <Reviews />
        
      </div>
    </>
  );
};

export default UserProfilePage;
