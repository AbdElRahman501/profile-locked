import { Award, Lock, MapPin, MessageCircle, SaveAllIcon } from "lucide-react";
import Image from "next/image";
import Button from "./button";
import { user } from "@/constants/header";

export const UserHeader: React.FC = () => {
  return (
    <div className="w-full border p-5">
      {/* Header Section: User Profile */}
      <div className="flex flex-wrap justify-center gap-3 pb-5 text-center md:text-left">
        {/* User Profile Image */}
        <Image
          src={user.image}
          alt={`${user.name}'s profile image`}
          width={100}
          height={100}
          className="aspect-square h-[100px] w-[100px] rounded-full object-cover"
        />

        {/* User Details */}
        <div className="flex min-w-60 flex-1 flex-col justify-center gap-2">
          {/* User Name */}
          <h3
            className="text-2xl font-bold text-primary"
            aria-label={`User name: ${user.name}`}
          >
            {user.name}
            <Lock
              className="ml-2 inline h-5 w-5 text-red-500"
              aria-label="Profile locked"
            />
          </h3>

          {/* Address and Experience */}
          <div className="flex w-full flex-wrap justify-center gap-4 text-xs text-secondary md:justify-start">
            <p aria-label={`User location: ${user.address}`}>
              <MapPin className="mr-2 inline h-5 w-5 text-primary" />
              {user.address}
            </p>
            <p aria-label={`User experience: ${user.experience} years`}>
              <Award className="mr-2 inline h-5 w-5 text-primary" />
              {user.experience} years Experience
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex h-fit items-center gap-2">
          <Button variant="secondary" size="sm" aria-label="Save user profile">
            <SaveAllIcon className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="sm" aria-label="Message user">
            <MessageCircle className="h-4 w-4" />
          </Button>
          <Button
            className="ml-2 h-12 text-sm"
            aria-label="Invite user to apply"
          >
            Invite to Apply
          </Button>
        </div>
      </div>

      {/* Information and Career Interests Section */}
      <div className="bg-foreground-primary border-secondary-border flex flex-wrap gap-10 border p-5">
        {/* Information Section */}
        <div className="flex-1">
          <p
            className="mb-2 text-sm font-semibold text-primary"
            aria-label="User information heading"
          >
            Information
          </p>
          <ul
            className="list-disc pl-5 text-xs"
            aria-label="User information list"
          >
            <li aria-label="Nationality: Egypt">Nationality: Egypt</li>
            <li aria-label="Education Level: Master's Degree">
              Education Level: Master's Degree
            </li>
            <li aria-label="Gender: Male">Gender: Male</li>
            <li aria-label="Military Status: Completed">
              Military Status: Completed
            </li>
            <li aria-label="Marital Status: Single">Marital Status: Single</li>
          </ul>
        </div>

        {/* Career Interests Section */}
        <div className="flex-1">
          <p
            className="mb-2 text-sm font-semibold text-primary"
            aria-label="Career interests heading"
          >
            Career Interests
          </p>
          <ul
            className="list-disc pl-5 text-xs"
            aria-label="Career interests list"
          >
            <li aria-label="Job Type: Full Time, Part Time, Internship, Shift Based Job">
              Job Type: Full Time, Part Time, Internship, Shift Based Job
            </li>
            <li aria-label="Categories: Medical/Healthcare">
              Categories: Medical/Healthcare
            </li>
            <li aria-label="Keywords: doctor, obstetrician, Medical Approval Officer, Medical Auditor">
              Keywords: doctor, obstetrician, Medical Approval Officer, Medical
              Auditor
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
