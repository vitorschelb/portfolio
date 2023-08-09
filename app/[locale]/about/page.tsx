import About from "../../modules/About";
import { PageTransition } from "../components/PageTransition";

export default function PageAbout() {
  return (
    <main>
      <PageTransition>
        <About />
      </PageTransition>
    </main>
  );
}
