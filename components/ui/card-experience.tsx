import Image from "next/image";

interface ExperienceCardProps {
  logo: string;
  title: string;
  start: string;
  end: string;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  logo,
  title,
  start,
  end,
}) => {
  // Calculate duration dynamically
  const currentYear = new Date().getFullYear();
  const isCurrent = end === "current";
  const durationInYears = isCurrent
    ? currentYear - parseInt(start, 10)
    : parseInt(end, 10) - parseInt(start, 10);
  const duration = `${start} - ${end === "current" ? "Present" : end} (${durationInYears} years)`;

  return (
    <div
      className="border-b-secondary-border flex items-center gap-5 border-b py-2"
      aria-label={`${title} from ${start} to ${end}`}
    >
      {/* Organization Logo */}
      <Image
        src={logo}
        alt={`Logo of ${title}`}
        width={50}
        height={50}
        className="rounded object-cover"
      />

      {/* Experience Details */}
      <div>
        <p className="text-sm font-semibold text-black/80">{title}</p>
        <p className="text-xs text-black/30">{duration}</p>
      </div>
    </div>
  );
};
