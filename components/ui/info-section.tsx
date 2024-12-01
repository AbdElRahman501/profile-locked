import { cn } from "@/lib/utils";
import Image from "next/image";

interface InfoSectionProps {
  title?: string;
  className?: string;
  children?: React.ReactNode;
}

const InfoSection: React.FC<InfoSectionProps> = ({
  title,
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "bg-foreground-primary border-secondary-border mt-5 w-full border p-10 py-5",
        className,
      )}
      role="region"
      aria-label={title || "Information section"}
    >
      {/* Title Section */}
      {title && (
        <h3
          className="mb-2 text-xl font-semibold text-primary"
          aria-label={`Section title: ${title}`}
        >
          {title}
        </h3>
      )}

      {/* Content or Empty State */}
      {children ? (
        <div>{children}</div>
      ) : (
        <div className="text-center">
          <Image
            src="https://www.em-hr.co.id/images/empty.png"
            alt={`${title || "Data"} not available`}
            width={150}
            height={150}
            className="mx-auto object-contain mix-blend-multiply"
          />
          <p className="text-secondary">
            Candidate has no {title || "available data"}
          </p>
        </div>
      )}
    </div>
  );
};

export default InfoSection;
