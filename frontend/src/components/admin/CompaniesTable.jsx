import React from "react";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  // Avatar,
} from "../ui/table";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { MoreHorizontal } from "lucide-react";
import { Edit2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
const CompaniesTable = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableCell>
            <Avatar>
              <AvatarImage src="https://res.cloudinary.com/dmos6g8x2/image/upload/v1752675624/ghjegejpy7zuh6gxt4rp.jpg" />
            </Avatar>
          </TableCell>
          <TableCell>Google</TableCell>
          <TableCell>18-07-2025</TableCell>
          <TableCell className="text-right cursor-pointer">
            <Popover>
              <PopoverTrigger>
                <MoreHorizontal />
              </PopoverTrigger>
              <PopoverContent className="w-32">
                <div
                  onClick={() => navigate(`/admin/companies/${company._id}`)}
                  className="flex items-center gap-2 w-fit cursor-pointer"
                >
                  <Edit2 className="w-4" />
                  <span>Edit</span>
                </div>
              </PopoverContent>
            </Popover>
          </TableCell>
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
