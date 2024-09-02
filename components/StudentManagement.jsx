
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import Header from "./common/Header"
import Sidebarx from "./common/Sidebarx"
import {MoveHorizontalIcon,LinechartChart} from "./common/Icon";


export function StudentManagement() {
  return (
    (<div className="flex min-h-screen w-full flex-col bg-muted/40">
       <Sidebarx/>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <Header/>
        <main
          className="grid grid-cols-1 gap-4 p-4 sm:px-6 sm:py-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          <Card className="sm:col-span-2" x-chunk="student-dashboard-chunk-0">
            <CardHeader className="pb-3">
              <CardTitle>Student Management</CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                View and manage student information, enrollment, and progress.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Student ID</TableHead>
                    <TableHead>Program</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">John Doe</TableCell>
                    <TableCell>S001</TableCell>
                    <TableCell>Bachelor of Business Administration</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Active</Badge>
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
                          <DropdownMenuItem>View Profile</DropdownMenuItem>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Suspend</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Jane Smith</TableCell>
                    <TableCell>S002</TableCell>
                    <TableCell>Master of Science in Computer Science</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Active</Badge>
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
                          <DropdownMenuItem>View Profile</DropdownMenuItem>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Suspend</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Michael Johnson</TableCell>
                    <TableCell>S003</TableCell>
                    <TableCell>Bachelor of Arts in Psychology</TableCell>
                    <TableCell>
                      <Badge variant="outline">Pending</Badge>
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
                          <DropdownMenuItem>View Profile</DropdownMenuItem>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Enroll</DropdownMenuItem>
                          <DropdownMenuItem>Suspend</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Student Attendance</CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                View and analyze student attendance data.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <LinechartChart className="aspect-[4/3]" />
              </div>
            </CardContent>
          </Card>
          <Card className="sm:col-span-3">
            <CardHeader className="pb-3">
              <CardTitle>Student Payment Management</CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                View and manage student payment information, including pending installments and upcoming payments.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student</TableHead>
                    <TableHead>Mobile</TableHead>
                    <TableHead>Program</TableHead>
                    <TableHead>Next Payment Due</TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">John Doe</TableCell>
                    <TableCell>+1 (555) 123-4567</TableCell>
                    <TableCell>Bachelor of Business Administration</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          new Date("2023-06-30") < new Date()
                            ? "danger"
                            : new Date("2023-06-30") < new Date(new Date().setDate(new Date().getDate() + 7))
                            ? "warning"
                            : "secondary"
                        }>
                        2023-06-30
                      </Badge>
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
                          <DropdownMenuItem>View Payment History</DropdownMenuItem>
                          <DropdownMenuItem>Suspend</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Jane Smith</TableCell>
                    <TableCell>+1 (555) 987-6543</TableCell>
                    <TableCell>Master of Science in Computer Science</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          new Date("2023-07-15") < new Date()
                            ? "danger"
                            : new Date("2023-07-15") < new Date(new Date().setDate(new Date().getDate() + 7))
                            ? "warning"
                            : "secondary"
                        }>
                        2023-07-15
                      </Badge>
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
                          <DropdownMenuItem>View Payment History</DropdownMenuItem>
                          <DropdownMenuItem>Suspend</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Michael Johnson</TableCell>
                    <TableCell>+1 (555) 456-7890</TableCell>
                    <TableCell>Bachelor of Arts in Psychology</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          new Date("2023-08-01") < new Date()
                            ? "danger"
                            : new Date("2023-08-01") < new Date(new Date().setDate(new Date().getDate() + 7))
                            ? "warning"
                            : "secondary"
                        }>
                        2023-08-01
                      </Badge>
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
                          <DropdownMenuItem>View Payment History</DropdownMenuItem>
                          <DropdownMenuItem>Suspend</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>)
  );
}

