import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState();
  const dispatch = useDispatch();

  const ChatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      //   console.log("API Polling...");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(25),
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-[36rem] h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {
            // Disclaimer: Don't use indexes as keys
            ChatMessages.map((c, i) => (
              <ChatMessage key={i} name={c.name} message={c.message} />
            ))
          }
        </div>
      </div>
      <form
        className="w-full px-2 my-2 ml-2 p-2 border border-black rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          //   console.log("on form submiting the data", liveMessage);
          dispatch(
            addMessage({
              name: "Alex Carry",
              message: liveMessage,
            })
          );
        }}
      >
        <input
          className="w-[30rem] border border-gray-600 rounded-lg px-2 py-1"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="w-16 px-2 py-1 mx-2 bg-green-400 rounded-lg">
          send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
