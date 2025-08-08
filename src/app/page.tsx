import { DiscordStyleLayout } from '@/components/layout/DiscordStyleLayout';
import { VideoFeed } from '@/components/video/VideoFeed';

export default function Home() {
  return (
    <DiscordStyleLayout>
      <VideoFeed />
    </DiscordStyleLayout>
  );
}
