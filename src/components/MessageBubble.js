import { motion } from "framer-motion";
import clsx from "clsx";

export default function MessageBubble({ role, content }) {
  const isUser = role === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className={clsx("w-full flex", isUser ? "justify-end" : "justify-start")}
    >
      <div
        className={clsx(
          "max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-glow whitespace-pre-wrap",
          isUser ? "bg-accent/20 text-white" : "bg-white/5 text-white"
        )}
      >
        {content}
      </div>
    </motion.div>
  );
}
