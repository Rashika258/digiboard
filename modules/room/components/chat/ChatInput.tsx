import { FormEvent, useState } from "react";

import { AiOutlineSend } from "react-icons/ai";

import { socket } from "@/common/lib/socket";

const ChatInput = () => {
  const [msg, setMsg] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    socket.emit("send_msg", msg);

    setMsg("");
  };

  return (
    <form className="flex w-full items-center gap-2" onSubmit={handleSubmit}>
      <input
        className="w-full rounded-xl text-black  p-6 py-4"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      <button className="btn-icon h-full w-10" type="submit">
        <AiOutlineSend />
      </button>
    </form>
  );
};

export default ChatInput;
