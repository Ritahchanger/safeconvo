import { useState, useRef, useEffect } from "react";
import useSendMessage from "../../hooks/useSendMessage";
import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const textareaRef = useRef(null);

  const handleInput = (e) => {
    setMessage(e.target.value);
    adjustHeight(e.target);
  };

  const adjustHeight = (element) => {
    const lineHeight = parseInt(window.getComputedStyle(element).lineHeight);
    const maxRows = 4;
    const maxHeight = lineHeight * maxRows;
    element.style.height = "auto";
    if (element.scrollHeight > maxHeight) {
      element.style.height = `${maxHeight}px`;
      element.style.overflowY = "scroll";
    } else {
      element.style.height = `${element.scrollHeight}px`;
      element.style.overflowY = "hidden";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
    if (textareaRef.current) {
      adjustHeight(textareaRef.current);
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      adjustHeight(textareaRef.current);
    }
  }, [message]);

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <textarea
          ref={textareaRef}
          className="text-sm rounded-lg block w-full-custom p-2.5 "
          placeholder="Send a message"
          value={message}
          onChange={handleInput}
          style={{ overflow: "hidden", resize: "none", lineHeight: "1.5em" }}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
