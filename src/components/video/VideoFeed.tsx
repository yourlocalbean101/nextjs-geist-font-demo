import { VideoCard } from './VideoCard';

const mockFeedData = [
  {
    user: {
      name: 'AestheticVibes',
      avatarUrl: 'https://i.pravatar.cc/48?img=1',
      role: { name: 'Vibe Curator', badgeClass: 'bg-dk-pastel-purple' },
    },
    caption: 'Chasing sunsets and city lights ✨ #aesthetic #citylife',
    videoUrl: 'https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', // Placeholder image
    likes: 12500,
    comments: 342,
  },
  {
    user: {
      name: 'GamerGod',
      avatarUrl: 'https://i.pravatar.cc/48?img=2',
      role: { name: 'Level 50 Hunter', badgeClass: 'bg-dk-pastel-pink' },
    },
    caption: 'Just hit a new high score! Can anyone beat this? 🎮 #gaming #challenge',
    videoUrl: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    likes: 3200,
    comments: 88,
  },
  {
    user: {
      name: 'ArtIsLife',
      avatarUrl: 'https://i.pravatar.cc/48?img=3',
      role: { name: 'Master Painter', badgeClass: 'bg-dk-pastel-green' },
    },
    caption: 'My latest digital painting. What do you guys think? 🎨 #art #digitalart',
    videoUrl: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    likes: 7800,
    comments: 156,
  },
    {
    user: {
      name: 'CozyCorner',
      avatarUrl: 'https://i.pravatar.cc/48?img=4',
      role: { name: 'Bookworm', badgeClass: 'bg-dk-pastel-blue' },
    },
    caption: 'Rainy days are for hot tea and good books. ☕️📚 #cozy #reading',
    videoUrl: 'https://images.pexels.com/photos/3747505/pexels-photo-3747505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    likes: 22000,
    comments: 512,
  },
];

export const VideoFeed = () => {
  return (
    <div className="h-full w-full flex justify-center items-center bg-gray-850 p-2">
      <div className="h-full w-full max-w-md overflow-y-auto snap-y snap-mandatory rounded-lg">
        {mockFeedData.map((item, index) => (
          <VideoCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
