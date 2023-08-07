import { PageTransition } from "../components/PageTransition";
import Blog from "../components/Blog";

export default function BlogFunction() {
  return (
    <main>
      
      <PageTransition>
      <Blog />
      </PageTransition>
    </main>
  );
}
