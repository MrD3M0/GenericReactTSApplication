import AboutMeEle from "@/lib/reusable/AboutMeEle";
import {
  BriefcaseBusiness,
  Clock2,
  FileUser,
  Github,
  Link,
  Mail,
  MapPin,
} from "lucide-react";

const AboutMe = () => {
  return (
    <div className="w-full bg-black border-b border-gray-500/50 flex justify-center items-center">
      <div className="h-full w-[90%] md:w-[80%] lg:w-[40%] grid grid-cols-2 gap-0.5! md:gap-2! border-gray-500/50 border-l border-r py-2! px-1!">
        <AboutMeEle
          icon={BriefcaseBusiness}
          label={"Full Stack Developer"}
          isCompany={false}
          className="col-span-2"
        />
        <AboutMeEle
          icon={MapPin}
          isCompany={true}
          companyName={"@Bhaktapur, Nepal"}
          companyLink="https://www.google.com/maps/place/Bhaktapur/@27.678201,85.324009,13z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d27.678201!4d85.324009"
        />
        <AboutMeEle
          icon={Mail}
          isCompany={true}
          companyName={"sumitkarki1000@gmail.com"}
          companyLink="mailto:sumitkarki1000@gmail.com"
        />
        <AboutMeEle
          icon={Github}
          isCompany={true}
          companyName={"Mr D3M0"}
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
          companyName={"sumitkarki2061.com.np"}
          companyLink="https://sumitkarki2061.com.np"
        />
        <AboutMeEle icon={Clock2} label="GMT+5:45" />
      </div>
    </div>
  );
};

export default AboutMe;
