export type Project = {
  id: string;
  image: StaticImageData;
  repoURL: string;
  deployURL: string;
  title: string;
  description: string;
  technologies: string;
};
//Por que é preciso desse tipo em project card, não teria outra forma de passar tudo?
export type ProjectProp = {
  project: Project;
};

export type ProjectCarouselProps = {
  projects: Project[];
};
