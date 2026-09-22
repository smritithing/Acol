import ContentPage from "../components/ContentPage";

export const metadata = { title: "News | Asian College of Law", description: "Official notices and updates from Asian College of Law." };

export default function NoticesPage() {
  return <ContentPage eyebrow="Notices" title="The information your college community needs." intro="[Official notices overview to be provided by Asian College of Law.]" sections={[
    { label: "Students", title: "[Student notice title to be provided]", description: "[Official notice date, summary, full content, and attachment to be provided.]" },
    { label: "Applicants", title: "[Admissions notice title to be provided]", description: "[Official admissions update, date, summary, and attachment to be provided.]" },
    { label: "College community", title: "[General notice title to be provided]", description: "[Official announcement, date, summary, and attachment to be provided.]" },
  ]} />;
}
