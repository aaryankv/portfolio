import { AnimatePresence, motion } from "framer-motion";
import React from "react";

type ImageModalProps = {
  open: boolean;
  src: string | undefined;
  alt?: string;
  onClose: () => void;
};

export default function ImageModal({ open, src, alt = "Preview", onClose }: ImageModalProps) {
  return (
    <AnimatePresence>
      {open && src && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-w-4xl w-full"
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={src}
              alt={alt}
              className="w-full h-auto rounded-xl ring-1 ring-white/20 bg-black/20 object-contain"
            />
            <button
              onClick={onClose}
              className="absolute -top-3 -right-3 rounded-full bg-white text-slate-900 px-3 py-1 text-xs font-medium shadow-soft"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
