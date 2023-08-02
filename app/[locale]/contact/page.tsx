import ContactForm from "../components/ContactForm";
import { PageTransition } from "../components/PageTransition";

export default function PageProjects() {
  return (
    <main>
      <PageTransition>
        <ContactForm />
      </PageTransition>
    </main>
  );
}
