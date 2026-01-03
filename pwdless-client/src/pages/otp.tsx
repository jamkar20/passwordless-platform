// src/pages/Mfa.tsx
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";

export function Otp() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-90">
        <CardHeader>
          <h2 className="text-xl font-semibold">Two-Factor Authentication</h2>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <div className="w-full flex flex-col items-center">
            <Label className="mb-4">Enter OTP Code:</Label>
            <InputOTP maxLength={6} placeholder="Enter OTP code:">
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <Button className="w-full">Verify</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Otp;
