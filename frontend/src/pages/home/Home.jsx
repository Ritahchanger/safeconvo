import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
  return (
    <div
      className="home-container"
      
    >
      <div className="rounded-lg overflow-hidden  bg-clip-padding backdrop-filter backdrop-blur-lg  container home-wrapper">
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
};
export default Home;
