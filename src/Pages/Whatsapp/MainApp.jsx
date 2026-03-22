import React, { useState, useRef, useEffect, useCallback } from 'react';
import {ChatSidebar} from './ChatSidebar';
import { ChatArea } from './ChatArea';
import {ChatProfile} from './ChatProfile'; 
import {ImageModal} from './ImageModal';
import {ForwardModal} from './ForwardModal';

const initialChats = [
  { id: 1, name: "Alexander Pierce", message: "Check this new workspace setup!", time: "Thursday", unread: 0, pinned: true, isGroup: false, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex", status: "read", isFavorite: false, isImportant: false },
  { id: 2, name: "Sarah Jenkins 🌸", message: "See you later!", time: "07/03/2026", unread: 0, pinned: true, isGroup: false, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah", status: "read", isFavorite: false, isImportant: false },
  { id: 3, name: "David Miller", message: "Sandy Loading.json", time: "6:08 pm", unread: 0, pinned: true, isGroup: false, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David", status: "read", isFile: true, isFavorite: false, isImportant: false },
  { id: 4, name: "Emma Wilson ✨", message: "Got it!", time: "5:41 pm", unread: 0, pinned: false, isGroup: false, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma", status: "read", isFavorite: false, isImportant: false },
  { 
    id: 5, name: "Global Marketing Team", message: "Director: New campaign starting...", time: "5:17 pm", unread: 0, pinned: false, isGroup: true, avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=Marketing", isFavorite: false, isImportant: false,
    members: [
      { id: 101, name: "You", status: "Available", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=You", isAdmin: true },
      { id: 102, name: "Support AI", status: "Here to help!", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bot", isAdmin: true },
      { id: 103, name: "Marketing Lead", status: "Busy with campaign", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lead", isAdmin: false },
      { id: 104, name: "Designer 1", status: "Creating magic", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=D1", isAdmin: false },
      { id: 105, name: "Developer 1", status: "Coding away", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dev1", isAdmin: false },
      { id: 106, name: "QA Tester", status: "Fixing bugs", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=QA", isAdmin: false },
      { id: 107, name: "Intern", status: "Learning", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Intern", isAdmin: false },
    ]
  },  
  { id: 6, name: "Travel Support", message: "Your booking is confirmed! ✈️", time: "5:15 pm", unread: 0, pinned: false, isGroup: false, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Travel", isFavorite: false, isImportant: false },
  { id: 7, name: "Michael Thompson", message: "Thanks for the help!", time: "4:19 pm", unread: 0, pinned: false, isGroup: false, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael", isFavorite: false, isImportant: false },
  { id: 8, name: "DEVELOPERS HUB 🔥", message: "Admin: Check the latest commit", time: "12:52 pm", unread: 0, pinned: false, isGroup: true, avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=Devs", isFavorite: false, isImportant: false },
  { id: 9, name: "The Book Club 📚", message: "Lisa: Reading 'Atomic Habits' next", time: "11:16 am", unread: 0, pinned: false, isGroup: true, avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=Books", isFavorite: false, isImportant: false },
  { id: 10, name: "Corporate Video", message: "Video message", time: "11:15 am", unread: 0, pinned: false, isGroup: false, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Corporate", isVideo: true, isFavorite: false, isImportant: false },
  { id: 11, name: "Robert Fox", message: "Morning! Coffee today?", time: "10:51 am", unread: 0, pinned: false, isGroup: false, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert", isFavorite: false, isImportant: false },
  { id: 12, name: "Family Weekly 👨‍👩‍👧‍👦", message: "Mom: Dinner at 7pm!", time: "Yesterday", unread: 5, pinned: false, isGroup: true, avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=Family", isFavorite: false, isImportant: false },
  { id: 13, name: "John Smith", message: "Sent you the login details", time: "10/03/2026", unread: 1, pinned: false, isGroup: false, avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John", isFavorite: false, isImportant: false },
  { id: 14, name: "Frontend Masters", message: "Guide: CSS Grid is Awesome!", time: "Monday", unread: 0, pinned: false, isGroup: true, avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=Frontend", isFavorite: false, isImportant: false },
  { id: 15, name: "Weekend Vibes 🚀", message: "Josh: Beach tomorrow?", time: "9:45 am", unread: 2, pinned: false, isGroup: true, avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=Weekend", isFavorite: false, isImportant: false }
];

const initialMessages = {
  1: [
    { type: 'in', content: 'Hey, are you available for a quick call regarding the new workspace layout?', time: '10:15 am' },
    { type: 'out', content: 'Sure, just finishing up a task. Give me 5 minutes.', time: '10:16 am', status: 'read' },
    { type: 'in', type_media: 'img', url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80', caption: 'Check this new workspace setup!', time: '10:20 am' }
  ],
  5: [
    { type: 'in', sender: 'Director', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Director', content: 'New campaign starting next week. Everyone ready?', time: '5:10 pm' },
    { type: 'out', content: 'Yes, looking forward to it!', time: '5:12 pm', status: 'read' }
  ]
};

export function MainApp() {
  const [chats, setChats] = useState(initialChats);
  const [messages, setMessages] = useState(initialMessages); 
  const [activeChatId, setActiveChatId] = useState(null);
  
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [forwardMessage, setForwardMessage] = useState(null);
  const [replyingTo, setReplyingTo] = useState(null);

  const [sidebarWidth, setSidebarWidth] = useState(340);
  const isResizing = useRef(false);

  const startResizing = useCallback(() => {
    isResizing.current = true;
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  }, []);

  const stopResizing = useCallback(() => {
    isResizing.current = false;
    document.body.style.cursor = 'default';
    document.body.style.userSelect = 'auto';
  }, []);

  const resize = useCallback((e) => {
    if (isResizing.current) {
      let newWidth = e.clientX;
      const maxAllowedWidth = window.innerWidth / 2; 
      
      if (newWidth < 250) newWidth = 250; 
      if (newWidth > maxAllowedWidth) newWidth = maxAllowedWidth; 
      
      setSidebarWidth(newWidth);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResizing);
    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [resize, stopResizing]);

  const displayChats = chats.map(chat => {
    const chatMsgs = messages[chat.id] || [];
    const lastMsg = chatMsgs.length > 0 ? chatMsgs[chatMsgs.length - 1] : null;
    let previewText = "Let's start the conversation";
    if (lastMsg) {
      if (lastMsg.type_media === 'img') previewText = '📷 Photo';
      else if (lastMsg.type_media === 'video') previewText = '🎥 Video';
      else if (lastMsg.type_media === 'audio') previewText = '🎤 Voice Note';
      else if (lastMsg.type_media === 'doc') previewText = '📄 Document';
      else previewText = lastMsg.content;
    }
    return { ...chat, message: previewText, time: lastMsg ? lastMsg.time : '' };
  });

  const activeChat = displayChats.find(c => c.id === activeChatId);

  const handleSelectChat = (id) => setActiveChatId(id);
  const toggleInfoPanel = () => setIsInfoOpen(!isInfoOpen);
  
  const handleToggleFavorite = (id) => setChats(chats.map(chat => chat.id === id ? { ...chat, isFavorite: !chat.isFavorite } : chat));
  const handleToggleImportant = (id) => setChats(chats.map(chat => chat.id === id ? { ...chat, isImportant: !chat.isImportant } : chat));

  const handleSendMessage = (text, media = null) => {
    if (!text.trim() && !media) return; 
    const timeString = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true }).toLowerCase();
    const newMessage = { type: 'out', content: text, time: timeString, status: 'sent', ...(media && media), replyTo: replyingTo };
    setMessages(prev => ({ ...prev, [activeChatId]: [...(prev[activeChatId] || []), newMessage] }));
    setReplyingTo(null); 
  };

  const handleDeleteSpecificMessage = (index) => {
    setMessages(prev => {
      const updatedChat = [...(prev[activeChatId] || [])];
      updatedChat.splice(index, 1); 
      return { ...prev, [activeChatId]: updatedChat };
    });
  };

  const handleAddReaction = (index, emoji) => {
    setMessages(prev => {
      const updatedChat = [...(prev[activeChatId] || [])];
      const msg = { ...updatedChat[index] };
      msg.reactions = msg.reactions || [];
      if (!msg.reactions.includes(emoji)) msg.reactions.push(emoji); 
      updatedChat[index] = msg;
      return { ...prev, [activeChatId]: updatedChat };
    });
  };

  const handleConfirmForward = (targetChatIds) => {
    if (!forwardMessage || targetChatIds.length === 0) return;
    const timeString = new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true }).toLowerCase();
    const newMessage = { ...forwardMessage, type: 'out', time: timeString, status: 'sent' };
    setMessages(prev => {
      const updatedMessages = { ...prev };
      targetChatIds.forEach(id => { updatedMessages[id] = [...(updatedMessages[id] || []), newMessage]; });
      return updatedMessages;
    });
    setForwardMessage(null); 
  };

  const handleClearChat = (id) => {
    if (window.confirm("Are you sure you want to clear all messages?")) {
      setMessages(prev => ({ ...prev, [id]: [] }));
    }
  };
  
  const handleDeleteChat = (id) => {
    if (window.confirm("Are you sure you want to delete this chat?")) {
      setChats(prev => prev.filter(chat => chat.id !== id));
      if (activeChatId === id) { setActiveChatId(null); setIsInfoOpen(false); }
    }
  };

  return (
    <div className="flex h-screen w-screen bg-[#f1f5f9] text-[#1e293b] overflow-hidden antialiased font-['Inter']">
      
      <div style={{ width: sidebarWidth, minWidth: 250, maxWidth: '50vw' }} className="h-full shrink-0 flex flex-col z-10 max-md:w-full! max-md:fixed max-md:inset-0 max-md:z-50">
        <ChatSidebar 
          chats={displayChats} activeChatId={activeChatId} onSelectChat={handleSelectChat} 
          onToggleFavorite={handleToggleFavorite} onToggleImportant={handleToggleImportant}
          onClearChat={handleClearChat} onDeleteChat={handleDeleteChat}
        />
      </div>
      
      <div 
        onMouseDown={startResizing} 
        className="max-md:hidden w-1 cursor-col-resize bg-transparent hover:bg-blue-400 active:bg-blue-500 transition-colors z-50 shrink-0"
      ></div>
      
      <div className="relative flex-1 flex overflow-hidden">
        <ChatArea 
          activeChat={activeChat} messages={messages[activeChatId] || []} 
          onSendMessage={handleSendMessage} onToggleInfo={toggleInfoPanel} onBack={() => setActiveChatId(null)} 
          onImageClick={(url) => setFullscreenImage(url)} onForwardClick={(msg) => setForwardMessage(msg)}
          replyingTo={replyingTo} onSetReply={setReplyingTo} onDeleteMessage={handleDeleteSpecificMessage} onAddReaction={handleAddReaction}
          onToggleFavorite={() => handleToggleFavorite(activeChatId)} onToggleImportant={() => handleToggleImportant(activeChatId)}
          onClearChat={() => handleClearChat(activeChatId)} onDeleteChat={() => handleDeleteChat(activeChatId)}
        />

        {isInfoOpen && activeChat && (
          <ChatProfile 
            activeChat={activeChat} messages={messages[activeChatId] || []} onClose={() => setIsInfoOpen(false)} 
            onToggleFavorite={handleToggleFavorite} onToggleImportant={handleToggleImportant} 
            onClearChat={handleClearChat} onDeleteChat={handleDeleteChat} onImageClick={(url) => setFullscreenImage(url)} 
          />
        )}
      </div>

      {forwardMessage && <ForwardModal chats={displayChats} onClose={() => setForwardMessage(null)} onForward={handleConfirmForward} />}
      {fullscreenImage && <ImageModal imageUrl={fullscreenImage} onClose={() => setFullscreenImage(null)} />}
    </div>
  );
}