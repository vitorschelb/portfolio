import { PageTransition } from "../components/PageTransition";
import Projects from "../../modules/Projects";
import { ProjectsProvider } from "@/app/contexts/ProjectsContext";

export default function PageProjects() {
  return (
    <main>
      <ProjectsProvider >
        <PageTransition>
          <Projects/>
        </PageTransition>
      </ProjectsProvider>
    </main>
  );
}
