'use client';

import React, { useState } from 'react';
import { 
  Home, 
  Users, 
  MessageSquare, 
  Calendar,
  Settings,
  Search,
  Plus,
  Bell,
  User,
  Hash,
  Volume2,
  AtSign,
  Bookmark,
  Dices
} from 'lucide-react';
import { MascotWithSpeech } from '@/components/mascot/MascotWithSpeech';

interface DiscordStyleLayoutProps {
  children: React.ReactNode;
}

export const DiscordStyleLayout: React.FC<DiscordStyleLayoutProps> = ({ children }) => {
  const [activeServer, setActiveServer] = useState('home');
  const [activeChannel, setActiveChannel] = useState('general-chat');

  const serverList = [
    { id: 'home', name: 'Home', icon: '🏰', active: true },
    { id: 'rp-central', name: 'RP Central', icon: '🎭', active: false },
    { id: 'character-hub', name: 'Characters', icon: '👤', active: false },
    { id: 'dice-rolls', name: 'Dice Rolls', icon: '🎲', active: false },
  ];

  const channels = [
    { id: 'welcome', name: 'welcome', type: 'text', unread: 3 },
    { id: 'rules', name: 'rules', type: 'text' },
    { id: 'announcements', name: 'announcements', type: 'text', unread: 1 },
    { id: 'general-chat', name: 'general-chat', type: 'text', unread: 12 },
    { id: 'character-creation', name: 'character-creation', type: 'text' },
    { id: 'looking-for-rp', name: 'looking-for-rp', type: 'text', unread: 5 },
  ];

  const voiceChannels = [
    { id: 'general-vc', name: 'General VC', type: 'voice', users: 5 },
    { id: 'rp-session', name: 'RP Session', type: 'voice', users: 12 },
  ];

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
              server.active ? 'bg-indigo-600 rounded-xl' : 'bg-gray-700 hover:bg-gray-600'
            }`}
            onClick={() => setActiveServer(server.id)}
          >
            <span className="text-lg group-hover:scale-110 transition-transform">{server.icon}</span>
            {server.active && (
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
          <h2 className="font-bold text-white">Roleplay Realm</h2>
        </div>
        
        <div className="flex-1 overflow-y-auto p-2">
          <div className="mb-4">
            <h3 className="text-xs uppercase text-gray-400 font-bold mb-2">Text Channels</h3>
            {channels.map((channel) => (
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
            <Hash className="w-5 h-5 text-gray-400 mr-1" />
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
