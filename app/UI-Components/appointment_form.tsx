"use client";
import React, { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select, SelectGroup, SelectLabel } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function Appointment_Form() {

  const [state, handleSubmit] = useForm("xpzvkdpa");
  if (state.succeeded) {
      return <>
      {/* Background blur */}
      <div
        className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-filter backdrop-blur-md"
      ></div>

      {/* Notification */}
      <div className="fixed inset-0 flex justify-center items-center z-50">
        <div className="w-full sm:w-auto max-w-sm bg-blue-500 shadow-md rounded-lg z-50 transition duration-300 ease-in-out transform translate-y-0 sm:translate-y-0 sm:scale-100">
          <div className="p-4">
            <h1 className=" text-white text-xl font-bold mb-2">
              Thank you for booking an appointment
            </h1>
            <p className="text-white text-base font-light">We will contact you shortly. If you have any questions, please do not hesitate to contact us. If you want to more information, please contact our Med Care ChatBot. If You have emergency, please call our emergency numbers or come to our hospital. </p>
            <p className="text-white text-base font-light">THANK YOU!</p>
            <Button className="w-full mt-4" onClick={() => window.location.reload()}>Close</Button>
          </div>
        </div>
      </div>
    </>;
  }
  const departments = [
    { id: 1, name: "Cardiology" },
    { id: 2, name: "Dermatology" },
    { id: 3, name: "InternalMedicine" },
    { id: 4, name: "Gynaecology" },
    { id: 5, name: "Neurology" },
    { id: 6, name: "Oncology" },
    { id: 7, name: "Orthopedics" },
    { id: 8, name: "Ophthalmology" },
    { id: 9, name: "Pediatrics" },
    { id: 10, name: "Psychiatry" },
  ];

  const doctorsByDepartment :any= [
      { id: 1, name: "Dr. John Smith" , name2: "Dr. Jane Johnson",departments: "Cardiology" },
      { id: 2, name: "Dr. Alejandro Rodriguez", name2: "Dr. Lucia Gonzalez" ,departments: "Dermatology"},
      { id: 3, name: "Dr. Michael Lee", name2: "Dr. Sarah Kim" ,departments: "InternalMedicine"},
      { id: 4, name: "Dr. Maria Garcia", name2: "Dr. Juan Martinez" ,departments: "Gynaecology"},
      { id: 5, name: "Dr. Michael Scott", name2: "Dr. Pam Beesly" ,departments: "Neurology"},
      { id: 6, name: "Dr. Dwight Schrute", name2: "Dr. Angela Martin" ,departments: "Oncology"},
      { id: 7, name: "Dr. Stanley Hudson", name2: "Dr. Phyllis Vance" ,departments: "Orthopedics"},
      { id: 8, name: "Dr. Kelly Kapoor", name2: "Dr. Ryan Howard" ,departments: "Ophthalmology"},
      { id: 9, name: "Dr. Andy Bernard", name2: "Dr. Cassandra Clark" ,departments: "Pediatrics"},
      { id: 10, name: "Dr. Paulie Walker", name2: undefined ,departments: "Psychiatry"},
  ];
  return (
    <div className="w-full h-full bg-form p-4 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Book an Appointment</h1>
        <p className="text-gray-500 dark:text-gray-400">Fill out the form below to schedule your appointment.</p>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit} action="https://formspree.io/f/xpzvkdpa" method="POST">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" >Name</Label>
            <Input id="name" type="text" name="name" placeholder="John Doe"  required/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="john@example.com" type="email" name="email"/>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="gender">Gender</Label>
            <Select required name="gender">
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent >
                <SelectItem value="male" >Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input id="age" placeholder="Enter your age" type="number"  name="age"/>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Mobile Number</Label>
            <Input id="phone" required placeholder="+1 (555) 555-5555" name="phone"/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="department">Department</Label>
            <Select required name="department">
              <SelectTrigger>
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                {
                  departments.map((department) => (
                    <SelectItem key={department.id} value={department.name}>{department.name}</SelectItem>
                  ))
                }
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="doctor">Doctor Name</Label>
            <Select required name="doctor">
              <SelectTrigger>
                <SelectValue placeholder="Select doctor" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {
                    doctorsByDepartment.map((doctor:any) => (
                      <div key={doctor.id}>
                      <SelectLabel >{doctor.departments}</SelectLabel>
                      <SelectItem value={doctor.name}>{doctor.name}</SelectItem>
                      
                        
                      <SelectItem value={doctor.name2}>{doctor.name2}</SelectItem>
                        
                      </div>                    
                    ))
                  }
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Appointment Date</Label>
            <Input id="date" type="date" name="date"  required/>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="reason">Reason for Appointment</Label>
          <Textarea id="reason" name="reason" placeholder="Enter brief reason for appointment" />
        </div>
        <div className="flex justify-center align-middle items-center">
        <Button className="" type="submit">
          Book Appointment
        </Button>
        </div>
      </form>
    </div>
  );
}
