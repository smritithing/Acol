import ContentPage from "../components/ContentPage";

export const metadata = { title: "Programs | Asian College of Law", description: "Explore academic programs at Asian College of Law." };

export default function ProgramsPage() {
  return <ContentPage eyebrow="Programs" title="Find the program that fits your purpose." intro="[Official program overview to be provided by Asian College of Law.]" sections={[
    { label: "Program 01", title: "[Program name]", description: "[Official program description, duration, eligibility, and curriculum to be provided.]" },
    { label: "Program 02", title: "[Program name]", description: "[Official program description, duration, eligibility, and curriculum to be provided.]" },
    { label: "Program 03", title: "[Program name]", description: "[Official program description, duration, eligibility, and curriculum to be provided.]" },
  ]} />;
}
