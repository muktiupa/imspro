import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Header from "./common/Header";
import Sidebarx from "./common/Sidebarx";
import { MoveHorizontalIcon } from "./common/Icon";

export function EnquiryManagement({ adminapi, isAuthenticated }) {
  const [inquiries, setInquiries] = useState([]);
  const [followUpInquiries, setFollowUpInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [followUpCurrentPage, setFollowUpCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [followUpTotalPages, setFollowUpTotalPages] = useState(1);
  const [totalInquiries, setTotalInquiries] = useState(0);
  const [followUpTotalInquiries, setFollowUpTotalInquiries] = useState(0);

  useEffect(() => {
    if (isAuthenticated) {
      fetchInquiries(currentPage);
      fetchFollowUpInquiries(followUpCurrentPage);
    }
  }, [isAuthenticated, currentPage, followUpCurrentPage]);

  const fetchInquiries = async (page) => {
    setLoading(true);
    try {
      const response = await adminapi.get("/inquiriesbyfilter", {
        params: {
          filter: JSON.stringify({ status: "New" }),
          page: page,
        }
      });
      const data = response?.data?.inquiries ?? [];
      setInquiries(data);
      setCurrentPage(response?.data?.currentPage);
      setTotalPages(response?.data?.totalPages);
      setTotalInquiries(response?.data?.totalInquiries);
    } catch (error) {
      console.error("Error fetching inquiries:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchFollowUpInquiries = async (page) => {
    setLoading(true);
    try {
      const response = await adminapi.get("/followupinquiries", {
        params: {
          page: page,
        }
      });
      setFollowUpInquiries(response?.data?.inquiries ?? []);
      setFollowUpCurrentPage(response?.data?.currentPage);
      setFollowUpTotalPages(response?.data?.totalPages);
      setFollowUpTotalInquiries(response?.data?.totalInquiries);
    } catch (error) {
      console.error("Error fetching follow-up inquiries:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page, isFollowUp = false) => {
    if (isFollowUp) {
      if (page >= 1 && page <= followUpTotalPages) {
        setFollowUpCurrentPage(page);
      }
    } else {
      if (page >= 1 && page <= totalPages) {
        setCurrentPage(page);
      }
    }
  };

  const renderPaginationButtons = (currentPage, totalPages, isFollowUp = false) => {
    const buttons = [];
    const maxButtons = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxButtons - 1);

    if (endPage - startPage + 1 < maxButtons) {
      startPage = Math.max(1, endPage - maxButtons + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <Button
          key={i}
          onClick={() => handlePageChange(i, isFollowUp)}
          variant={i === currentPage ? "default" : "outline"}
        >
          {i}
        </Button>
      );
    }

    return buttons;
  };

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
                {loading ? (
                  <p>Loading inquiries...</p>
                ) : (
                  <>
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
                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-sm text-muted-foreground">
                        Showing {inquiries.length} of {totalInquiries} inquiries
                      </p>
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handlePageChange(currentPage - 1)}
                          disabled={currentPage === 1}
                        >
                          Previous
                        </Button>
                        {renderPaginationButtons(currentPage, totalPages)}
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handlePageChange(currentPage + 1)}
                          disabled={currentPage === totalPages}
                        >
                          Next
                        </Button>
                      </div>
                    </div>
                  </>
                )}
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
                  {loading ? (
                    <p>Loading follow-up inquiries...</p>
                  ) : (
                    <>
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
                      <div className="mt-4 flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">
                          Showing {followUpInquiries.length} of {followUpTotalInquiries} follow-up inquiries
                        </p>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handlePageChange(followUpCurrentPage - 1, true)}
                            disabled={followUpCurrentPage === 1}
                          >
                            Previous
                          </Button>
                          {renderPaginationButtons(followUpCurrentPage, followUpTotalPages, true)}
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handlePageChange(followUpCurrentPage + 1, true)}
                            disabled={followUpCurrentPage === followUpTotalPages}
                          >
                            Next
                          </Button>
                        </div>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}