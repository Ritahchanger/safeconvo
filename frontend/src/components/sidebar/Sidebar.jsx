import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500  flex flex-col sidebar">
      <SearchInput />
      <div className="divider px-3 customDivider"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
