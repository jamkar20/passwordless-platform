// src/pages/Dashboard.tsx
import { Card, CardContent } from "@/components/ui/card";
import {
  CalendarClock,
  LaptopMinimalCheck,
  ShieldCheck,
  ShieldX,
} from "lucide-react";

export function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card>
        <CardContent className="p-4">
          <CalendarClock size={48} />
          <p className="text-sm text-muted-foreground">Active Sessions</p>
          <p className="text-2xl font-bold">3</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <LaptopMinimalCheck size={48} />
          <p className="text-sm text-muted-foreground">Trusted Devices</p>
          <p className="text-2xl font-bold">2</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <ShieldCheck size={48} className="text-emerald-600" />
          {/* <ShieldX size={48} className="text-rose-600" /> */}
          <p className="text-sm text-muted-foreground">MFA Status</p>
          <p className="text-2xl font-bold text-emerald-600">Enabled</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default Dashboard;
