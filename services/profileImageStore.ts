import { useState, useEffect } from 'react';
import { PROFILE } from '../constants';
import profilePhoto from '../src/assets/images/profile.jpg';

const STORAGE_KEY = 'yj_portfolio_custom_avatar';

// Default resolved image: direct import, fallback to /profile.jpg
export const DEFAULT_AVATAR = profilePhoto || '/profile.jpg';

type Listener = (image: string) => void;
const listeners = new Set<Listener>();

let currentImage: string = (() => {
  try {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return saved;
    }
  } catch (e) {
    // Ignore storage errors
  }
  return DEFAULT_AVATAR;
})();

export const getProfileImage = (): string => currentImage;

export const setCustomProfileImage = (newImage: string) => {
  currentImage = newImage;
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, newImage);
    }
  } catch (e) {
    console.error('Failed to save to localStorage', e);
  }
  listeners.forEach(fn => fn(currentImage));
};

export const resetProfileImage = () => {
  currentImage = DEFAULT_AVATAR;
  try {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
  } catch (e) {
    console.error('Failed to remove from localStorage', e);
  }
  listeners.forEach(fn => fn(currentImage));
};

export const useProfileImage = () => {
  const [image, setImage] = useState<string>(currentImage);

  useEffect(() => {
    setImage(currentImage);
    const listener: Listener = (newImg) => {
      setImage(newImg);
    };
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  return {
    profileImage: image,
    setProfileImage: setCustomProfileImage,
    resetProfileImage,
    defaultImage: DEFAULT_AVATAR
  };
};
