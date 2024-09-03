import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Header from "./common/Header";
import Sidebarx from "./common/Sidebarx";
import { MoveHorizontalIcon } from "./common/Icon";

export function EnquiryManagement() {
  // Array of student inquiries
  const inquiries = [
    {
      name: "John Doe",
      email: "john@example.com",
      contactNumber: "+1 555-555-5555",
      program: "Bachelor of Business Administration",
      status: "New",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      contactNumber: "+1 555-555-5556",
      program: "Master of Science in Computer Science",
      status: "New",
    },
    {
      name: "Michael Johnson",
      email: "michael@example.com",
      contactNumber: "+1 555-555-5557",
      program: "Bachelor of Arts in Psychology",
      status: "New",
    },
  ];

  // Array of follow-up inquiries
  const followUpInquiries = [
    {
      name: "Emily Chen",
      email: "emily@example.com",
      contactNumber: "+1 555-555-5558",
      program: "Bachelor of Fine Arts",
      rescheduleDate: "2023-06-15",
    },
    {
      name: "David Lee",
      email: "david@example.com",
      contactNumber: "+1 555-555-5559",
      program: "Master of Engineering",
      rescheduleDate: "2023-07-01",
    },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebarx />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-1 xl:grid-cols-1">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <Card className="sm:col-span-2" x-chunk="lms-dashboard-chunk-0">
              <CardHeader className="pb-3">
                <CardTitle>New Inquiries</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  View and manage new inquiries from prospective students.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Contact Number</TableHead>
                      <TableHead>Program</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>
                        <span className="sr-only">Actions</span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {inquiries.map((inquiry, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{inquiry.name}</TableCell>
                        <TableCell>{inquiry.email}</TableCell>
                        <TableCell>{inquiry.contactNumber}</TableCell>
                        <TableCell>{inquiry.program}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{inquiry.status}</Badge>
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button aria-haspopup="true" size="icon" variant="ghost">
                                <MoveHorizontalIcon className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View</DropdownMenuItem>
                              <DropdownMenuItem>Respond</DropdownMenuItem>
                              <DropdownMenuItem>Mark as Contacted</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
                    <div className="auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
            <Card x-chunk="lms-dashboard-chunk-2">
              <CardHeader className="pb-3">
                <CardTitle>Follow Up Inquiry</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  View and manage upcoming rescheduled inquiries.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Contact Number</TableHead>
                      <TableHead>Program</TableHead>
                      <TableHead>Reschedule Date</TableHead>
                      <TableHead>
                        <span className="sr-only">Actions</span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {followUpInquiries.map((inquiry, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{inquiry.name}</TableCell>
                        <TableCell>{inquiry.email}</TableCell>
                        <TableCell>{inquiry.contactNumber}</TableCell>
                        <TableCell>{inquiry.program}</TableCell>
                        <TableCell>{inquiry.rescheduleDate}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button aria-haspopup="true" size="icon" variant="ghost">
                                <MoveHorizontalIcon className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View</DropdownMenuItem>
                              <DropdownMenuItem>Respond</DropdownMenuItem>
                              <DropdownMenuItem>Reschedule</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
