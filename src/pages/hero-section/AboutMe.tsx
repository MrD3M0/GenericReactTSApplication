import AboutMeEle from "@/lib/reusable/AboutMeEle";
import {
  BriefcaseBusiness,
  Clock2,
  FileUser,
  Lightbulb,
  Link,
  Mail,
  MapPin,
} from "lucide-react";

const AboutMe = () => {
  return (
    <div className="w-full bg-black border-b border-gray-500/50 flex justify-center items-center">
      <div className="min-w-0 h-full w-[90%] md:w-[80%] lg:w-[40%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1! sm:gap-1.5! md:gap-2! border-gray-500/50 border-l border-r py-1.5! sm:py-2! px-1! sm:px-2!">
          {" "}
          <AboutMeEle
            icon={BriefcaseBusiness}
            label={"Full Stack Developer"}
            isCompany={false}
            className="md:col-span-2"
          />
          <AboutMeEle
            icon={MapPin}
            isCompany={true}
            companyName={"Nepal"}
            companyLink="https://maps.app.goo.gl/GRVr8kPD7VHJLjwW7"
          />
          <AboutMeEle
            icon={Mail}
            isCompany={true}
            companyName={"sumitkarki047@gmail.com"}
            companyLink="mailto:sumitkarki047@gmail.com"
          />
          <AboutMeEle
            icon={Lightbulb}
            isCompany={true}
            label="Founder "
            companyName={"@Zippos"}
            companyLink="https://github.com/MrD3M0"
          />
          <AboutMeEle
            icon={FileUser}
            isCompany={true}
            companyName={"Find My Resume"}
            companyLink="https://github.com/MrD3M0"
          />
          <AboutMeEle
            icon={Link}
            isCompany={true}
            companyName={"sumitkarki1.com.np"}
            companyLink="https://sumitkarki1.com.np/"
          />
          <AboutMeEle icon={Clock2} label="GMT+5:45" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
