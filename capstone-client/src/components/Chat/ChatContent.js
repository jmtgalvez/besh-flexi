import React from "react";
import "./ChatContent.css";

export default function ChatContent({you, messageContent, time}) {
  return (
    <>
      <span className={you ? "own" : "mate"}>{messageContent}</span>
      <span className={you ? "own-time" : "mate-time"}>{time}</span>
    </>
  );
}
