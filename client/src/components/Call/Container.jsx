import { useStateProvider } from "@/context/StateContext";
import React, { useState } from "react";

function Container({ data }) {
  const [{ userInfo, socket }] = useStateProvider();
  const [callAccepted, setCallAccepted] = useState(false);
  return (
    <div className="border-conversation-border border-l w-full bg-conversation-panel-background flex flex-col h-[100vh] overflow-hidden justify-center items-center text-white">
      hey
    </div>
  );
}

export default Container;
