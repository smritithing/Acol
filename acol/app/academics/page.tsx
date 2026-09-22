import ContentPage from "../components/ContentPage";

export const metadata = { title: "Academics | Asian College of Law", description: "Academic information and resources from Asian College of Law." };

export default function AcademicsPage() {
  return <ContentPage eyebrow="Academics" title="A clear path through legal education." intro="[Official academic overview to be provided by Asian College of Law.]" sections={[
    { label: "Academic overview", title: "[Academic approach to be provided]", description: "[Approved information about teaching, learning, departments, and academic standards to be provided.]" },
    { label: "Calendar and resources", title: "[Academic calendar to be provided]", description: "[Approved calendars, examination information, policies, and academic resources to be added here.]" },
    { label: "Research", title: "[Research information to be provided]", description: "[Approved research areas, publications, seminars, and academic activities to be provided.]" },
  ]} />;
}
