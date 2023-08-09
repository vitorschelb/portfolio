import { PageTransition } from "../components/PageTransition";
import Blog from "../../modules/Blog";

export default function PageBlog() {
  return (
    <main>
      
      <PageTransition>
      <Blog />
      </PageTransition>
    </main>
  );
}
