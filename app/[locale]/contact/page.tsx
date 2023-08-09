import ContactForm from "../../modules/ContactForm";
import { PageTransition } from "../components/PageTransition";

export default function PageContact() {
  return (
    <main>
      <PageTransition>
        <ContactForm />
      </PageTransition>
    </main>
  );
}
