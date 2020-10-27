import { useCallback, useState, useRef } from "react";
import { useAddListeners } from "./useAddListeners";

//  Function which performs a click outside event listener
//  initialState - initialState of the menu
//  onAfterClose - some extra function call to do after closing menu

export const useToggleMenu = (initialState = false, onAfterClose = null) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(initialState);

  const handleClickOutside = useCallback(
    (event) => {
      if (
        ref.current &&
        (ref.current.contains(event.target) ||
          event.target.className === "menu-btn")
      ) {
        return;
      }
      setIsOpen(false);
      onAfterClose && onAfterClose();
    },
    [ref, onAfterClose]
  );

  const handleHideDropdown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        onAfterClose && onAfterClose();
      }
    },
    [onAfterClose]
  );

  useAddListeners([
    { type: "click", callback: handleClickOutside },
    { type: "keydown", callback: handleHideDropdown },
  ]);

  return [ref, isOpen, setIsOpen];
};
