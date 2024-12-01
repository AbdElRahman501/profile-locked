import InfoSection from "./info-section";
import ProgressBar from "./progress-bar";

// Define language data
const languages = [
  { name: "Arabic", level: "100%" },
  { name: "English", level: "70%" },
  { name: "French", level: "35%" },
];

const Languages: React.FC = () => {
  return (
    <InfoSection title="Languages" className="p-4">
      {languages.map(({ name, level }, index) => (
        <div key={index} className="my-4">
          <p className="text-[#03353C]">{name}</p>
          <ProgressBar score={level} />
        </div>
      ))}
    </InfoSection>
  );
};

export default Languages;
