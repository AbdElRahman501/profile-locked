import Image from "next/image";
import { Flag } from "lucide-react";
import { user } from "@/constants/header";
import Button from "@/components/ui/button";
import { EducationCard } from "@/components/ui/card-education";
import { ExperienceCard } from "@/components/ui/card-experience";
import InfoSection from "@/components/ui/info-section";
import Languages from "@/components/ui/languages";
import { UserHeader } from "@/components/ui/user-header";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-5 p-5 font-epilogue md:ml-14 md:flex-row lg:ml-0">
      {/* Left Section - Main Content */}
      <div className="w-full md:w-3/4">
        {/* User Header */}
        <UserHeader />

        {/* About Section */}
        <InfoSection title="About">
          <ul className="list-disc pl-5">
            <li
              className="pl-3 text-sm font-semibold text-black/75"
              aria-label="About user"
            >
              {user.about}
            </li>
          </ul>
        </InfoSection>

        {/* Work Experience */}
        <InfoSection title="Work Experience" className="pb-0">
          {user.workExperience.map((exp, index) => (
            <ExperienceCard
              key={index}
              {...exp}
              aria-label={`Work experience item ${index + 1}`}
            />
          ))}
          <button className="text-light-primary w-full py-2 text-center font-semibold hover:underline">
            <p>Show 2 more educations</p>
          </button>
        </InfoSection>

        {/* Education Section */}
        <InfoSection title="Education">
          {user.education.map((edu, index) => (
            <EducationCard
              key={index}
              {...edu}
              aria-label={`Education item ${index + 1}`}
            />
          ))}
        </InfoSection>

        {/* Skills Section */}
        <InfoSection title="Skills">
          <div className="flex flex-wrap gap-4">
            {user.skills.map((skill) => (
              <Button
                key={skill}
                variant="secondary"
                size="md"
                aria-label={`Skill: ${skill}`}
              >
                {skill}
              </Button>
            ))}
          </div>
        </InfoSection>

        {/* Placeholder Sections */}
        <InfoSection title="Activities" />
        <InfoSection title="Achievements" />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/4 md:min-w-[360px]">
        {/* Profile Lock Section */}
        <InfoSection className="mt-0">
          <Image
            src="https://img.freepik.com/free-vector/gradient-shield-with-padlock-check-mark_78370-4401.jpg"
            alt="Shield with padlock and check mark indicating profile security"
            width={50}
            height={50}
            className="mx-auto object-contain mix-blend-multiply"
          />
          <p
            className="my-4 text-center text-sm font-semibold"
            aria-label="Unlock profile message"
          >
            Unlock to Access Full Profile and Contact Details
          </p>
          <div className="flex justify-center">
            <Button className="text-sm" aria-label="Unlock profile">
              Unlock Profile
            </Button>
          </div>
        </InfoSection>

        {/* Languages Section */}
        <Languages aria-label="Languages spoken by user" />

        {/* Report Button */}
        <Button variant="destructive" size="xl" aria-label="Report user">
          <Flag className="mr-2" />
          Report
        </Button>
      </div>
    </div>
  );
}
