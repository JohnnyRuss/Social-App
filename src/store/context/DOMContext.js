import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const DOMcontext = React.createContext({
  activeNavBurger: false,
  setActiveNavBurger: (state) => {},
  windowPosition: Number,
  profileFile: null,
  setProfileFile: () => {},
  coverFile: null,
  setCoverFile: () => {},
  activeMessengerModal: false,
  activeNotificationModal: false,
  activeFriendRequestModal: false,
  activeSearchBar: false,
  activateSearchBar: (bool) => {},
  activateFriendRequestModal: () => {},
  activateMessengerModal: () => {},
  setActiveMessengerModal: () => {},
  activateNotificationModal: () => {},
});

export const DOMProvider = ({ children }) => {
  const { pathname } = useLocation();

  //////////////
  // Mobile Menu
  //____________
  const [activeNavBurger, setActiveNavBurger] = useState(false);
  const [windowPosition, setWindowPosition] = useState('');

  useEffect(() => {
    if (!activeNavBurger) return;

    setWindowPosition(window.scrollY);
    document.querySelector('body').style.overflow = 'hidden';

    return () => (document.querySelector('body').style.overflow = 'scroll');
  }, [activeNavBurger]);

  ///////////////////////////
  // Scroll Up On Path Change
  //_________________________
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  /////////////////////////////////
  // Change Profile or Cover Images
  //_______________________________
  const [profileFile, setProfileFile] = useState(null);
  const [coverFile, setCoverFile] = useState(null);

  /////////////////////////////////////////////////////////////////
  // Open Messenger, FriendRequest, SearchBar or Notification Modal
  //_______________________________________________________________
  const [activeMessengerModal, setActiveMessengerModal] = useState(false);
  const [activeNotificationModal, setActiveNotificationModal] = useState(false);
  const [activeFriendRequestModal, setActiveFriendRequestModal] = useState(false);
  const [activeSearchBar, setActiveSearchBar] = useState(false);

  function activateMessengerModal() {
    if (activeNotificationModal) setActiveNotificationModal(false);
    if (activeFriendRequestModal) setActiveFriendRequestModal(false);
    if (activeSearchBar) setActiveSearchBar(false);
    setActiveMessengerModal((prevState) => !prevState);
  }

  function activateNotificationModal() {
    if (activateMessengerModal) setActiveMessengerModal(false);
    if (activeFriendRequestModal) setActiveFriendRequestModal(false);
    if (activeSearchBar) setActiveSearchBar(false);
    setActiveNotificationModal((prevState) => !prevState);
  }

  function activateFriendRequestModal() {
    if (activateMessengerModal) setActiveMessengerModal(false);
    if (activeNotificationModal) setActiveNotificationModal(false);
    if (activeSearchBar) setActiveSearchBar(false);
    setActiveFriendRequestModal((prevState) => !prevState);
  }

  function activateSearchBar(task) {
    if (activateMessengerModal) setActiveMessengerModal(false);
    if (activeNotificationModal) setActiveNotificationModal(false);
    if (activeFriendRequestModal) setActiveFriendRequestModal(false);
    setActiveSearchBar(task);
  }

  return (
    <DOMcontext.Provider
      value={{
        // Mobile Menu
        activeNavBurger,
        setActiveNavBurger,
        windowPosition,
        // Change Profile or Cover Images
        profileFile,
        setProfileFile,
        coverFile,
        setCoverFile,
        // Open Messenger, FriendRequests, SearchBar or Notification Modal
        activeMessengerModal,
        activeNotificationModal,
        activeFriendRequestModal,
        activeSearchBar,
        activateMessengerModal,
        setActiveMessengerModal,
        activateNotificationModal,
        activateFriendRequestModal,
        activateSearchBar,
      }}>
      {children}
    </DOMcontext.Provider>
  );
};
