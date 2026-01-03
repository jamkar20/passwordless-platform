// src/pages/Sessions.tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export function Sessions() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>IP</TableHead>
          <TableHead>Device</TableHead>
          <TableHead>Last Activity</TableHead>
          <TableHead />
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow>
          <TableCell>192.168.1.10</TableCell>
          <TableCell>Chrome / Windows</TableCell>
          <TableCell>2 minutes ago</TableCell>
          <TableCell>
            <Button variant="destructive" className="cursor-pointer">
              <LogOut />
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default Sessions;
