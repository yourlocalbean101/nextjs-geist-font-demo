import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, Share2, Scissors } from 'lucide-react';

import { cn } from '@/lib/utils';

interface VideoCardProps {
  user: {
    name: string;
    avatarUrl: string;
    role: {
      name: string;
      badgeClass: string;
    };
  };
  caption: string;
  videoUrl: string; // For now, a placeholder, maybe an image url
  likes: number;
  comments: number;
}

export const VideoCard = ({ user, caption, videoUrl, likes, comments }: VideoCardProps) => {
  return (
    <div className="w-full max-w-md mx-auto bg-gray-900 rounded-xl overflow-hidden snap-start relative text-white">
      {/* Video Player Placeholder */}
      <div className="aspect-[9/16] bg-black flex items-center justify-center">
        {/* In a real app, a <video> tag would go here */}
        <img src={videoUrl} alt="Video content" className="w-full h-full object-cover" />
      </div>

      {/* Overlay for UI elements */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black/60 via-transparent to-transparent">
        {/* Top section (empty for now, could be for server name) */}
        <div></div>

        {/* Bottom section with info and actions */}
        <div className="flex items-end justify-between">
          {/* Left side: User Info & Caption */}
          <div className="flex-1 space-y-3">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src={user.avatarUrl} />
                <AvatarFallback>{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-bold">{user.name}</p>
                <Badge className={cn('text-white border-none', user.role.badgeClass)}>
                  {user.role.name}
                </Badge>
              </div>
            </div>
            <p className="text-sm">{caption}</p>
          </div>

          {/* Right side: Action Buttons */}
          <div className="flex flex-col items-center space-y-4">
            <Button variant="ghost" size="icon" className="text-white hover:text-red-500">
              <Heart className="w-7 h-7" />
              <span className="text-xs">{likes}</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-blue-400">
              <MessageCircle className="w-7 h-7" />
              <span className="text-xs">{comments}</span>
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-green-400">
              <Scissors className="w-7 h-7" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-indigo-400">
              <Share2 className="w-7 h-7" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
