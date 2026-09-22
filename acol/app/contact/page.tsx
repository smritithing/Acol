import ContentPage from "../components/ContentPage";

export const metadata = { title: "Contact | Asian College of Law", description: "Contact Asian College of Law." };

export default function ContactPage() {
  return <ContentPage eyebrow="Contact" title="Start a conversation with the college." intro="[Official contact overview to be provided by Asian College of Law.]" sections={[
    { label: "Visit", title: "[College address to be provided]", description: "[Official address, map location, office hours, and visitor information to be provided.]" },
    { label: "Call or write", title: "[College phone and email to be provided]", description: "[Official phone numbers, email addresses, and department contacts to be provided.]" },
    { label: "Online enquiry", title: "[Contact form to be connected]", description: "A secure contact form will be connected after the college confirms the receiving office and submission process." },
  ]} />;
}
