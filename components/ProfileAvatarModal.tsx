import React, { useState, useRef } from 'react';
import { X, Upload, RotateCcw, Check, Camera, Image as ImageIcon } from 'lucide-react';
import { useProfileImage } from '../services/profileImageStore';
import { PROFILE } from '../constants';

interface ProfileAvatarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileAvatarModal: React.FC<ProfileAvatarModalProps> = ({ isOpen, onClose }) => {
  const { profileImage, setProfileImage, resetProfileImage, defaultImage } = useProfileImage();
  const [dragActive, setDragActive] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [imgError, setImgError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file (JPG, PNG, or WebP)');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setProfileImage(result);
        setImgError(false);
        setSuccessMsg('Profile photo updated successfully!');
        setTimeout(() => setSuccessMsg(null), 3500);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleReset = () => {
    resetProfileImage();
    setImgError(false);
    setSuccessMsg('Reset to default repository headshot');
    setTimeout(() => setSuccessMsg(null), 3000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-midnight-900 border border-slate-200 dark:border-midnight-700 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 dark:hover:text-white p-2 rounded-full hover:bg-slate-100 dark:hover:bg-midnight-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 text-center">
          <span className="accent-mono text-[10px] block mb-1">Identity & Headshot</span>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-sans">
            {PROFILE.name}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            QA Automation / Software Engineer
          </p>
        </div>

        {/* Photo View / Preview */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative w-44 h-44 rounded-2xl overflow-hidden border-2 border-horizon-sky shadow-xl p-1 bg-slate-100 dark:bg-midnight-950">
            {!imgError ? (
              <img
                src={profileImage}
                alt={PROFILE.name}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover rounded-xl"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-slate-800 text-slate-300 font-mono text-center p-4">
                <ImageIcon className="w-10 h-10 text-horizon-sky mb-2" />
                <span className="text-xs">Yogesh Jadhav</span>
              </div>
            )}
            <div className="absolute bottom-2 right-2 p-1.5 bg-slate-900/80 backdrop-blur rounded-lg text-white text-xs">
              <Camera className="w-3.5 h-3.5 text-horizon-sky" />
            </div>
          </div>
          
          <span className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-mono">
            {profileImage.startsWith('data:') ? 'Custom local photo active' : 'Default photo loaded (src/assets/images/profile.jpg)'}
          </span>
        </div>

        {/* Success Alert */}
        {successMsg && (
          <div className="mb-4 p-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold rounded-xl flex items-center gap-2">
            <Check className="w-4 h-4" />
            {successMsg}
          </div>
        )}

        {/* Drag & Drop or Upload New */}
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
            dragActive
              ? 'border-horizon-sky bg-horizon-sky/10'
              : 'border-slate-300 dark:border-midnight-700 hover:border-horizon-sky bg-slate-50 dark:bg-midnight-950/50'
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={onInputChange}
            className="hidden"
          />
          <Upload className="w-8 h-8 mx-auto text-horizon-sky mb-2" />
          <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
            Click to upload new headshot
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            or drag & drop your image here (JPG, PNG, WebP)
          </p>
        </div>

        {/* Action Controls */}
        <div className="mt-6 flex items-center justify-between gap-3 pt-4 border-t border-slate-200 dark:border-midnight-800">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-horizon-sky py-2 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-midnight-800 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset to Repository Image
          </button>
          
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-xs font-bold rounded-xl hover:opacity-90 transition-opacity"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileAvatarModal;
