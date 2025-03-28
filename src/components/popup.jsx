import { motion, AnimatePresence } from "motion/react";

function Popup(props) {
  return (
    <AnimatePresence>
      {props.showPopup && (
        <motion.div
          className="bg-Grey-900 absolute top-6 mx-2 space-y-2 rounded-xl px-4 py-6 drop-shadow-lg"
          initial={{ y: -170 }}
          animate={{ y: 0 }}
          exit={{ y: -170 }}
        >
          <div className="flex items-center gap-3">
            <img src="/icon-success-check.svg" alt="success-tik-mark" />
            <p className="text-lg font-bold text-gray-50">Message Sent!</p>
          </div>
          <p className="text-Grey-500">
            Thanks for completing the form, We'll be in touch soon!
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Popup;
