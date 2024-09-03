import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import Header from "./common/Header"
import Sidebarx from "./common/Sidebarx"
import {LinechartChart,BarchartChart} from "./common/Icon";

export function Dashbord() {
  const pendingInquiries = 5;  // Dummy data
  const followup = 20;  // Dummy data

 
  return (
    (<div className="flex min-h-screen w-full flex-col bg-muted/40">
        <Sidebarx/>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header/>
        <main
          className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">

          <div className="lg:col-span-3">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Welcome, User!</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  You have {pendingInquiries} new inquiries, {followup} follow Up Currently.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
           
            <Card>
              <CardHeader>
                <CardTitle>Inquiry Analytics</CardTitle>
                <CardDescription className="max-w-lg text-balance leading-relaxed">
                  View, respond, and track the status of student inquiries.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
              
                  <BarchartChart className="aspect-[4/3]" />
                </div>
              </CardContent>
            </Card>
            </div>
            
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
            
         
        </main>
      </div>
    </div>)
  );
}

