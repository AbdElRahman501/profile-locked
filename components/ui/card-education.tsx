import Image from "next/image";

interface EducationCardProps {
  logo: string; // Path to the institution logo
  title: string; // Institution name
  start: string; // Start year of education
  end: string; // End year of education
  degree: string; // Degree obtained
}

export const EducationCard: React.FC<EducationCardProps> = ({
  logo,
  title,
  start,
  end,
  degree,
}) => {
  // Format duration text
  const duration = `${start} - ${end === "current" ? "Present" : end}`;

  return (
    <div
      className="border-b-secondary-border flex items-center gap-5 border-b py-2"
      role="listitem"
      aria-label={`${degree} at ${title} (${duration})`}
    >
      {/* Institution Logo */}
      <Image
        src={logo}
        alt={`Logo of ${title}`}
        width={50}
        height={50}
        className="rounded object-cover"
      />

      {/* Education Details */}
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-xs font-bold text-black/50">{degree}</p>
        <p className="text-xs text-black/30">{duration}</p>
      </div>
    </div>
  );
};
