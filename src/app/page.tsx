import { DiscordStyleLayout } from '@/components/layout/DiscordStyleLayout';
import { MascotWithSpeech } from '@/components/mascot/MascotWithSpeech';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageSquare, Users, Calendar, Dice, Book, Sword } from 'lucide-react';

export default function Home() {
  return (
    <DiscordStyleLayout>
      <div className="h-full flex flex-col">
        {/* Welcome Header */}
        <div className="p-6 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Welcome to Roleplay Realm</h1>
              <p className="text-indigo-200">Your ultimate destination for immersive roleplaying</p>
            </div>
            <MascotWithSpeech />
          </div>
        </div>

        {/* Main Dashboard */}
        <ScrollArea className="flex-1 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Character Creation */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Users className="w-5 h-5 mr-2" />
                  Character Creation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">Create your unique character with our advanced system</p>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                  Create Character
                </Button>
              </CardContent>
            </Card>

            {/* Dice Roller */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Dice className="w-5 h-5 mr-2" />
                  Dice Roller
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">Roll dice for your roleplay sessions</p>
                <div className="flex space-x-2">
                  <Button variant="outline" className="flex-1">D4</Button>
                  <Button variant="outline" className="flex-1">D6</Button>
                  <Button variant="outline" className="flex-1">D20</Button>
                </div>
              </CardContent>
            </Card>

            {/* Forums */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Forums
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">Join discussions and roleplay threads</p>
                <Button className="w-full bg-gray-700 hover:bg-gray-600">
                  Browse Forums
                </Button>
              </CardContent>
            </Card>

            {/* Event Calendar */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Calendar className="w-5 h-5 mr-2" />
                  Event Calendar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">Never miss an important roleplay event</p>
                <Button className="w-full bg-gray-700 hover:bg-gray-600">
                  View Calendar
                </Button>
              </CardContent>
            </Card>

            {/* Lore Database */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Book className="w-5 h-5 mr-2" />
                  Lore Database
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">Explore the rich world lore and history</p>
                <Button className="w-full bg-gray-700 hover:bg-gray-600">
                  Read Lore
                </Button>
              </CardContent>
            </Card>

            {/* Factions */}
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Sword className="w-5 h-5 mr-2" />
                  Factions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">Join or create factions and guilds</p>
                <Button className="w-full bg-gray-700 hover:bg-gray-600">
                  Browse Factions
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <Avatar>
                        <AvatarImage src={`https://i.pravatar.cc/40?img=${i}`} />
                        <AvatarFallback>UN</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm text-white font-medium">Username {i}</p>
                        <p className="text-sm text-gray-400">Posted in General Chat</p>
                        <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                Create New Thread
              </Button>
              <Button variant="outline">
                Browse Characters
              </Button>
              <Button variant="outline">
                View Events
              </Button>
              <Button variant="outline">
                Dice Roller
              </Button>
            </div>
          </div>
        </ScrollArea>

        {/* Chat Input Area */}
        <div className="p-4 bg-gray-800 border-t border-gray-700">
          <div className="flex items-center space-x-2">
            <Input 
              placeholder="Type a message..." 
              className="flex-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
            />
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              Send
            </Button>
          </div>
        </div>
      </div>
    </DiscordStyleLayout>
  );
}
