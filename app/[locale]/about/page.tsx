import About from "../components/About";
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
