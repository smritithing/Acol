import ContentPage from "../components/ContentPage";

export const metadata = { title: "Admissions | Asian College of Law", description: "Admissions information and next steps for Asian College of Law." };

export default function AdmissionsPage() {
  return <ContentPage eyebrow="Admissions" title="Your next step starts with clear information." intro="[Official admissions overview to be provided by Asian College of Law.]" sections={[
    { label: "How to apply", title: "[Application process to be provided]", description: "[Approved application steps and application destination to be provided.]" },
    { label: "Requirements", title: "[Eligibility and documents to be provided]", description: "[Official eligibility requirements, required documents, fees, and dates to be provided.]" },
    { label: "Questions", title: "[Admissions contact to be provided]", description: "[Approved admissions office contact details and frequently asked questions to be provided.]" },
  ]} />;
}
