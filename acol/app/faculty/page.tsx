import ContentPage from "../components/ContentPage";
import Image from "next/image";
import principalImage from "./481213988_122106454862783676_7071450643687038717_n.jpg";

export const metadata = { title: "Faculty | Asian College of Law", description: "Meet the faculty of Asian College of Law." };

export default function FacultyPage() {
  return <ContentPage eyebrow="Faculty" title="People who bring perspective to the classroom." heroAside={<div className="principal-hero-card">
      <div className="principal-hero-card__image"><Image src={principalImage} alt="Principal of Asian College of Law" sizes="(max-width: 760px) 100vw, 40vw" priority /></div>
      <div className="principal-hero-card__content"></div>
  </div>} sections={[
      { label: "Faculty directory", title: "[Faculty names to be provided]", description: "[Approved faculty names, positions, departments, and profile photographs to be provided.]" },
      { label: "Expertise", title: "[Areas of expertise to be provided]", description: "[Approved qualifications, specializations, publications, and biographies to be provided.]" },
      { label: "Academic community", title: "[Faculty activities to be provided]", description: "[Approved information about seminars, research, legal practice, and academic contribution to be provided.]" },
  ]} intro="" />;
}
