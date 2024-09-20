import useConversation from "../../zustand/useConversation";
import { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { useAuthContext } from "../../context/AuthContext";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="flex flex-col message-container">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="px-4 py-2 mb-2 name-title">
            <span className="font-bold">{selectedConversation.fullName}</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div
      className="flex items-center justify-center  h-full"
      style={{
        width: "100%",
      }}
    >
      <div
        className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2"
        style={{
          width: "100%",
        }}
      >
        <p>Welcome {authUser.fullName} 👋</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
