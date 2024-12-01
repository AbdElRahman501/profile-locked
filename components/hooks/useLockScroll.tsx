import { useEffect } from "react";

const useLockScroll = (isLocked: boolean) => {
  useEffect(() => {
    // Add or remove the class based on the `isLocked` value
    if (isLocked) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup to ensure no residual class is left
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isLocked]); // Dependency array ensures the effect runs when `isLocked` changes
};

export default useLockScroll;
