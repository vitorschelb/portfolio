import { PageTransition } from "../components/PageTransition";
import Projects from "../components/Projects";

export default function PageProjects() {
  return (
    <main>
      <PageTransition>
        <Projects />
      </PageTransition>
    </main>
  );
}
