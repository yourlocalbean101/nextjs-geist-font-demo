'use client';

import React, { useState } from 'react';
import {
  Settings,
  Search,
  Plus,
  Bell,
  User,
  Hash,
  Volume2,
  Video, // Added for video channels
} from 'lucide-react';
import { MascotWithSpeech } from '@/components/mascot/MascotWithSpeech';

interface DiscordStyleLayoutProps {
  children: React.ReactNode;
}

export const DiscordStyleLayout: React.FC<DiscordStyleLayoutProps> = ({ children }) => {
  const [activeServer, setActiveServer] = useState('art-edits');
  const [activeChannel, setActiveChannel] = useState('clips');

  const serverList = [
    { id: 'home', name: 'Home', icon: '🏠', active: false },
    { id: 'art-edits', name: 'Art & Edits', icon: '🎨', active: true },
    { id: 'gaming-clips', name: 'Gaming Clips', icon: '🎮', active: false },
    { id: 'music-vibes', name: 'Music Vibes', icon: '🎵', active: false },
  ];

  const videoChannels = [
    { id: 'clips', name: 'clips', type: 'video', unread: 42 },
    { id: 'trends', name: 'trends', type: 'video', unread: 9 },
    { id: 'challenges', name: 'challenges', type: 'video' },
  ];

  const textChannels = [
    { id: 'general-chat', name: 'general-chat', type: 'text', unread: 12 },
    { id: 'introductions', name: 'introductions', type: 'text' },
    { id: 'feedback', name: 'feedback', type: 'text', unread: 3 },
  ];

  const voiceChannels = [
    { id: 'live-reactions', name: 'Live Reactions', type: 'voice', users: 18 },
    { id: 'music-lounge', name: 'Music Lounge', type: 'voice', users: 7 },
  ];

  const allChannels = [...videoChannels, ...textChannels, ...voiceChannels];
  const activeChannelData = allChannels.find(c => c.id === activeChannel);

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100">
      {/* Server List - Discord Style */}
      <div className="w-20 bg-gray-900 flex flex-col items-center py-3 space-y-3 border-r border-gray-800">
        <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center cursor-pointer hover:rounded-xl transition-all duration-200 group">
          <MascotWithSpeech size="sm" />
        </div>
        
        <div className="w-8 h-px bg-gray-700" />
        
        {serverList.map((server) => (
          <div
            key={server.id}
            className={`w-12 h-12 rounded-2xl flex items-center justify-center cursor-pointer hover:rounded-xl transition-all duration-200 relative group ${
              activeServer === server.id ? 'bg-indigo-600 rounded-xl' : 'bg-gray-700 hover:bg-gray-600'
            }`}
            onClick={() => setActiveServer(server.id)}
          >
            <span className="text-lg group-hover:scale-110 transition-transform">{server.icon}</span>
            {activeServer === server.id && (
              <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white rounded-r-full" />
            )}
          </div>
        ))}
        
        <div className="w-12 h-12 bg-gray-700 rounded-2xl flex items-center justify-center cursor-pointer hover:rounded-xl hover:bg-green-600 transition-all duration-200">
          <Plus className="w-6 h-6" />
        </div>
      </div>

      {/* Channel List */}
      <div className="w-64 bg-gray-800 flex flex-col">
        <div className="p-4 border-b border-gray-700">
          <h2 className="font-bold text-white">VibeVerse</h2>
        </div>
        
        <div className="flex-1 overflow-y-auto p-2">
          {/* Video Channels */}
          <div className="mb-4">
            <h3 className="text-xs uppercase text-gray-400 font-bold mb-2">Video Feeds</h3>
            {videoChannels.map((channel) => (
              <div
                key={channel.id}
                className={`flex items-center px-2 py-1 rounded cursor-pointer hover:bg-gray-700 ${
                  activeChannel === channel.id ? 'bg-gray-700' : ''
                }`}
                onClick={() => setActiveChannel(channel.id)}
              >
                <Video className="w-4 h-4 text-gray-400 mr-1" />
                <span className="text-sm">{channel.name}</span>
                {channel.unread && (
                  <span className="ml-auto bg-red-500 text-xs rounded-full px-2 py-0.5">
                    {channel.unread}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mb-4">
            <h3 className="text-xs uppercase text-gray-400 font-bold mb-2">Text Channels</h3>
            {textChannels.map((channel) => (
              <div
                key={channel.id}
                className={`flex items-center px-2 py-1 rounded cursor-pointer hover:bg-gray-700 ${
                  activeChannel === channel.id ? 'bg-gray-700' : ''
                }`}
                onClick={() => setActiveChannel(channel.id)}
              >
                <Hash className="w-4 h-4 text-gray-400 mr-1" />
                <span className="text-sm">{channel.name}</span>
                {channel.unread && (
                  <span className="ml-auto bg-red-500 text-xs rounded-full px-2 py-0.5">
                    {channel.unread}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mb-4">
            <h3 className="text-xs uppercase text-gray-400 font-bold mb-2">Voice Channels</h3>
            {voiceChannels.map((channel) => (
              <div
                key={channel.id}
                className="flex items-center px-2 py-1 rounded cursor-pointer hover:bg-gray-700"
              >
                <Volume2 className="w-4 h-4 text-gray-400 mr-1" />
                <span className="text-sm">{channel.name}</span>
                <span className="ml-auto text-xs text-gray-400">{channel.users} users</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">Username</p>
              <p className="text-xs text-gray-400">Online</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-gray-800 border-b border-gray-700 px-4 py-2 flex items-center justify-between">
          <div className="flex items-center">
            {activeChannelData?.type === 'video' ? <Video className="w-5 h-5 text-gray-400 mr-1" /> : <Hash className="w-5 h-5 text-gray-400 mr-1" />}
            <span className="font-medium">{activeChannel}</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
            <Bell className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
            <Settings className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
          </div>
        </div>
        
        {/* Content Area */}
        <div className="flex-1 overflow-y-auto bg-gray-850">
          {children}
        </div>
      </div>
    </div>
  );
};
