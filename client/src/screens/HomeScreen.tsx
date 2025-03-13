import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

function HomeScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2.5">
      <div className="grid max-w-sm w-full items-center gap-1.5">
        <Label htmlFor="username">Username</Label>
        <Input id="username" type="text" placeholder="Enter a username" />
      </div>
      <div className="grid max-w-sm w-full items-center gap-1.5">
        <Label htmlFor="code">Room code</Label>
        <Input id="code" type="text" placeholder="Enter the room code" />
      </div>
      <Button>Enter</Button>
    </div>
  );
}

export default HomeScreen;
