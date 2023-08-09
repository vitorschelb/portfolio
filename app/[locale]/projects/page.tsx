import { PageTransition } from "../components/PageTransition";
import Projects from "../../modules/Projects";
import { ProjectsProvider } from "@/app/contexts/ProjectsContext";
import projectsData from "@/app/shared/Data";

export default function PageProjects() {
  return (
    <main>
      <ProjectsProvider slides={projectsData.length}>
        <PageTransition>
          <Projects/>
        </PageTransition>
      </ProjectsProvider>
    </main>
  );
}
