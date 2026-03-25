import React, { useState, useEffect, useRef } from "react";
import {
  CheckCheck,
  Copy,
  Forward,
  Reply,
  Trash2,
  Download,
  ChevronDown,
} from "lucide-react";

export function MessageBubble({
  index,
  msg,
  activeChat,
  onImageClick,
  onForwardClick,
  onReplyClick,
  onDeleteClick,
  onReactionClick,
}) {
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const isOut = msg.type === "out";
  const isGroupIn = !isOut && activeChat?.isGroup;
  const forceWhite = msg.type_media === "img";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target))
        setMenuOpen(false);
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const handleCopy = () => {
    navigator.clipboard.writeText(msg.content || "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadMedia = () => {
    if (!msg.url) return;
    const a = document.createElement("a");
    a.href = msg.url;
    a.download = msg.name || `download_${Date.now()}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const bubbleOutClass = forceWhite
    ? `bg-white text-slate-800 rounded-[18px_4px_18px_18px] border border-slate-200/60 shadow-sm`
    : `bg-gradient-to-br from-[#445EFE] to-[#2B47FC] text-white rounded-[18px_4px_18px_18px] shadow-[0_4px_14px_rgba(68,94,254,0.3)] ring-1 ring-white/10`;

  const bubbleInClass = `bg-[#a925f5] text-white rounded-[4px_18px_18px_18px] shadow-[0_4px_14px_rgba(169,37,245,0.3)] ring-1 ring-white/10`;

  const bubbleClass = `relative w-fit max-w-full transition-all duration-200 ${isOut ? bubbleOutClass : bubbleInClass}`;
  const availableEmojis = ["👍", "❤️", "😂", "😮", "😢", "🙏"];

  return (
    <div
      className={`flex ${isOut ? "justify-end" : "justify-start"} w-full mb-2`}
    >
      {isGroupIn && (
        <div className="h-8 w-8 rounded-full overflow-hidden mr-2 mt-1 shrink-0">
          <img
            src={
              msg.avatar ||
              `https://api.dicebear.com/7.x/avataaars/svg?seed=${msg.sender}`
            }
            alt="sender"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div
        className={`flex flex-col ${isOut ? "items-end" : "items-start"} max-w-[85%] md:max-w-[70%] relative group`}
      >
        {isGroupIn && msg.sender && (
          <span className={`text-[13px] font-medium ml-1 mb-1 ${isOut ? 'text-indigo-600' : 'text-[#a925f5]'}`}>
            {msg.sender}
          </span>
        )}

        <div className={bubbleClass} onMouseLeave={() => !menuOpen}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(!menuOpen);
            }}
            className={`absolute top-1 ${isOut ? "left-1" : "right-1"} p-1 bg-white/90 backdrop-blur-md rounded-full shadow-sm text-slate-500 hover:text-slate-700 z-10 transition-opacity outline-none ${menuOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
          >
            <ChevronDown className="w-4 h-4" />
          </button>

          {menuOpen && (
            <div
              ref={menuRef}
              className={`absolute top-8 ${isOut ? "right-full mr-2" : "left-full ml-2"} bg-white/95 backdrop-blur-md border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-2xl z-[100] w-56 flex flex-col overflow-hidden animate-[fadeIn_0.1s_ease-out]`}
            >
              <div className="flex items-center justify-between px-4 py-2 bg-slate-50 border-b border-slate-100">
                {availableEmojis.map((emoji) => (
                  <button
                    key={emoji}
                    onClick={(e) => {
                      e.stopPropagation();
                      onReactionClick(emoji);
                      setMenuOpen(false);
                    }}
                    className="text-xl hover:scale-125 transition-transform outline-none leading-none p-1"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
              <div className="flex flex-col py-1.5">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onReplyClick();
                    setMenuOpen(false);
                  }}
                  className="flex items-center gap-3 px-5 py-2.5 hover:bg-slate-50 text-slate-700 text-[14.5px] font-medium transition-colors outline-none"
                >
                  <Reply className="w-4 h-4 text-slate-400" /> Reply
                </button>
                {!msg.type_media && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopy();
                      setMenuOpen(false);
                    }}
                    className="flex items-center gap-3 px-5 py-2.5 hover:bg-slate-50 text-slate-700 text-[14.5px] font-medium transition-colors outline-none"
                  >
                    <Copy className="w-4 h-4 text-slate-400" /> Copy
                  </button>
                )}
                {msg.type_media && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownloadMedia();
                      setMenuOpen(false);
                    }}
                    className="flex items-center gap-3 px-5 py-2.5 hover:bg-slate-50 text-slate-700 text-[14.5px] font-medium transition-colors outline-none"
                  >
                    <Download className="w-4 h-4 text-slate-400" /> Download
                  </button>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onForwardClick(msg);
                    setMenuOpen(false);
                  }}
                  className="flex items-center gap-3 px-5 py-2.5 hover:bg-slate-50 text-slate-700 text-[14.5px] font-medium transition-colors outline-none"
                >
                  <Forward className="w-4 h-4 text-slate-400" /> Forward
                </button>
                <div className="h-px bg-slate-100 mx-4 my-1"></div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteClick();
                    setMenuOpen(false);
                  }}
                  className="flex items-center gap-3 px-5 py-2.5 hover:bg-red-50 text-red-600 text-[14.5px] font-medium transition-colors outline-none"
                >
                  <Trash2 className="w-4 h-4 text-red-500" /> Delete
                </button>
              </div>
            </div>
          )}

          {msg.replyTo && (
            <div
              className={`m-1.5 mb-2 flex cursor-pointer rounded-xl overflow-hidden ${isOut && !forceWhite ? "bg-white/20 border-l-white/60" : !isOut ? "bg-white/20 border-l-white/60" : "bg-slate-50/80 border-l-indigo-500"} backdrop-blur-sm border-l-[3px]`}
            >
              <div className="flex flex-col flex-1 px-3 py-1.5 justify-center min-w-0">
                <span
                  className={`text-[12.5px] font-bold ${isOut && !forceWhite ? "text-white/90" : !isOut ? "text-white/90" : "text-indigo-600"} mb-0.5`}
                >
                  {msg.replyTo.type === "out"
                    ? "You"
                    : msg.replyTo.sender || activeChat.name}
                </span>
                <span
                  className={`text-[13.5px] truncate font-medium ${isOut && !forceWhite ? "text-white/80" : !isOut ? "text-white/80" : "text-slate-500"}`}
                >
                  {msg.replyTo.type_media === "img"
                    ? "📷 Photo"
                    : msg.replyTo.type_media
                      ? `📎 Attachment`
                      : msg.replyTo.content}
                </span>
              </div>
              {msg.replyTo.type_media === "img" && msg.replyTo.url && (
                <div className="w-12 h-12 shrink-0 ml-2">
                  <img
                    src={msg.replyTo.url}
                    className="w-full h-full object-cover"
                    alt="reply-thumb"
                  />
                </div>
              )}
            </div>
          )}

          <div className={msg.type_media ? "p-1.5" : "px-3 pt-2 pb-1.5"}>
            {msg.type_media === "img" && (
              <div className="relative group/image max-w-70">
                <img
                  src={msg.url}
                  alt="attachment"
                  onClick={() => onImageClick(msg.url)}
                  className="rounded-md w-full h-auto object-cover cursor-pointer"
                />
              </div>
            )}
            {msg.type_media === "video" && (
              <div className="max-w-75">
                <video
                  src={msg.url}
                  controls
                  className="w-full rounded-md bg-black"
                />
              </div>
            )}
            {msg.type_media === "audio" && (
              <div className="w-62.5 p-1">
                <audio src={msg.url} controls className="w-full h-10" />
              </div>
            )}
            {msg.type_media === "doc" && (
              <a
                href={msg.url}
                download={msg.name}
                className={`flex items-center gap-3 p-3 rounded-lg min-w-50 mb-1 ${isOut && !forceWhite ? "bg-blue-700/30 hover:bg-blue-700/50" : "bg-slate-50 hover:bg-slate-100/80 border border-slate-100"} transition-colors`}
              >
                <div
                  className={`p-2 rounded-full ${isOut && !forceWhite ? "bg-white/20" : "bg-white shadow-sm border border-slate-200/60"}`}
                >
                  <FileText
                    className={`w-6 h-6 ${isOut && !forceWhite ? "text-white" : "text-indigo-500"}`}
                  />
                </div>
                <div className="flex flex-col flex-1 overflow-hidden">
                  <span
                    className={`text-sm font-medium truncate ${isOut && !forceWhite ? "text-white" : "text-slate-700"}`}
                  >
                    {msg.name || "Document"}
                  </span>
                </div>
              </a>
            )}
            {msg.content && (
              <p
                className={`text-[14.5px] whitespace-pre-wrap break-all leading-relaxed ${msg.type_media ? "mt-1.5 px-1" : ""} ${isOut && !forceWhite ? "text-white" : !isOut ? "text-white" : "text-slate-800"}`}
              >
                {msg.content}
              </p>
            )}

            <div
              className={`flex justify-end items-center gap-1 ${msg.type_media ? "mt-1 px-1 mb-0.5" : "mt-0.5"} ${isOut && !forceWhite ? "text-blue-100" : !isOut ? "text-purple-100" : "text-slate-400"}`}
            >
              <span className="text-[10px] leading-none opacity-90">
                {msg.time}
              </span>
              {isOut && (
                <CheckCheck
                  className={`h-3.5 w-3.5 ${forceWhite ? "text-indigo-500" : "opacity-80"}`}
                />
              )}
            </div>
          </div>
        </div>

        {msg.reactions && msg.reactions.length > 0 && (
          <div
            className={`absolute -bottom-3 ${isOut ? "right-2" : "left-2"} bg-white border border-slate-200 text-slate-700 shadow-md rounded-full px-1.5 py-0.5 flex items-center gap-0.5 z-10 text-[12px]`}
          >
            {msg.reactions.map((emoji, i) => (
              <span key={i} className="leading-none">
                {emoji}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
