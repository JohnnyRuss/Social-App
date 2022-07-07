import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const DOMcontext = React.createContext({
  activeSearchBar: false,
  setActiveSearchBar: (state) => {},
  activeNavBurger: false,
  setActiveNavBurger: (state) => {},
  windowPosition: Number,
  target: {},
  activateInfoBlock: () => {},
  block: '',
  profileFile: null,
  setProfileFile: () => {},
  coverFile: null,
  setCoverFile: () => {},
  activeMessengerModal: false,
  activeNotificationModal: false,
  activateMessengerModal: () => {},
  activateNotificationModal: () => {},
});

export const DOMProvider = ({ children }) => {
  const { pathname } = useLocation();

  // Navigation SearchBar
  //____________________________________________
  const [activeSearchBar, setActiveSearchBar] = useState(false);

  // Mobile Menu
  //____________________________________________
  const [activeNavBurger, setActiveNavBurger] = useState(false);
  const [windowPosition, setWindowPosition] = useState('');

  useEffect(() => {
    if (!activeNavBurger) return;

    setWindowPosition(window.scrollY);
    document.querySelector('body').style.overflow = 'hidden';

    return () => (document.querySelector('body').style.overflow = 'scroll');
  }, [activeNavBurger]);

  // Scroll Up On Path Change
  //____________________________________________
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  // UserInfo Window
  //____________________________________________
  const [target, setTarget] = useState({ all: true });
  const [block, setBlock] = useState('all');

  const activateInfoBlock = (e) => {
    const key = e.target.getAttribute('name');
    setTarget({ [key]: true });
    setBlock(key);
  };

  // Change Profile or Cover Images
  //____________________________________________
  const [profileFile, setProfileFile] = useState(null);
  const [coverFile, setCoverFile] = useState(null);

  // Open Messenger Modal or Notification Modal
  //____________________________________________
  const [activeMessengerModal, setActiveMessengerModal] = useState(false);
  const [activeNotificationModal, setActiveNotificationModal] = useState(false);

  function activateMessengerModal() {
    if (activeNotificationModal) setActiveNotificationModal(false);
    setActiveMessengerModal((prevState) => !prevState);
  }

  function activateNotificationModal() {
    if (activateMessengerModal) setActiveMessengerModal(false);
    setActiveNotificationModal((prevState) => !prevState);
  }

  return (
    <DOMcontext.Provider
      value={{
        //SearchBar
        activeSearchBar,
        setActiveSearchBar,
        // Mobile Menu
        activeNavBurger,
        setActiveNavBurger,
        windowPosition,
        // User Info Block
        target,
        activateInfoBlock,
        block,
        // Change Profile or Cover Images
        profileFile,
        setProfileFile,
        coverFile,
        setCoverFile,
        // Open Messenger Modal or Notification Modal
        activeMessengerModal,
        activeNotificationModal,
        activateMessengerModal,
        activateNotificationModal,
      }}>
      {children}
    </DOMcontext.Provider>
  );
};
