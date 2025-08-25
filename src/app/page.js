"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [messages, setMessages] = useState([]); // Start empty
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", text: input }]);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: "Thinking..." }]);
    }, 500);
    setInput("");
  };

  return (
    <>
      <div className={styles.container}>
        {/* ✅ Sidebar */}
        <aside className={styles.sidebar}>
          <h2 className={styles.logo}>⚡ Alvedo AI</h2>
          <input
            type="text"
            placeholder="🔍 Search..."
            className={styles.searchBox}
          />
          <button className={styles.sidebarBtn}>➕ New Chat</button>
          <nav className={styles.menu}>
            <button>📚 Library</button>
            <button>🎥 Sora</button>
            <button>🤖 GPTs</button>
          </nav>
          <div className={styles.chatHistory}>
            <h4>💬 Chats</h4>
            <ul>
              <li>Chat 1</li>
              <li>Chat 2</li>
              <li>Chat 3</li>
            </ul>
          </div>
        </aside>

        {/* ✅ Chat Area */}
        <main className={styles.chatScreen}>
          <header className={styles.chatHeader}>
            <h1>Chat with Alvedo AI</h1>
          </header>

          {/* ✅ Empty State or Messages */}
          <div className={styles.chatBox}>
            {messages.length === 0 ? (
              <div className={styles.emptyState}>
                <h2>✨ Start a new conversation</h2>
                <p>Ask Alvedo AI anything!</p>
              </div>
            ) : (
              messages.map((msg, index) => (
                <p
                  key={index}
                  className={
                    msg.role === "user" ? styles.userMsg : styles.botMsg
                  }
                >
                  {msg.text}
                </p>
              ))
            )}
          </div>

          {/* Input Bar */}
          <div className={styles.inputContainer}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button className={styles.sendBtn} onClick={sendMessage}>
              ➤
            </button>
          </div>
        </main>
      </div>
    </>
  );
}
