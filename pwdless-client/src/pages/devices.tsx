// src/pages/Devices.tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

export function Devices() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Device</TableHead>
          <TableHead>Platform</TableHead>
          <TableHead>Status</TableHead>
          <TableHead />
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow>
          <TableCell>Laptop</TableCell>
          <TableCell>Windows</TableCell>
          <TableCell>
            <Badge>Trusted</Badge>
          </TableCell>
          <TableCell>
            <Button variant="outline">
              <Trash />
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default Devices;
