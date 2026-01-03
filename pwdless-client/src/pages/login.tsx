// src/pages/Login.tsx
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-80 md:w-96 ">
        <CardHeader>
          <h2 className="text-xl font-semibold">Login</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Username</Label>
            <Input placeholder="username" />
          </div>

          <div>
            <Label>Password</Label>
            <Input type="password" placeholder="••••••" />
          </div>

          <Button className="w-full cursor-pointer">Login</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;