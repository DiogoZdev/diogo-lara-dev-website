import { Component } from "@angular/core";

interface IProject {
  title: string;
  description: string;
  github: string;
  link: string;
  images: string[];
  hasWebsite: boolean;
  hasStar?: boolean;
}

@Component({
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
  selector: "app-projects"
})
export class ProjectsComponent {

  public projects: IProject[] = [
    {
      title: "Andressa Ilustra",
      description: "Personal portfolio website",
      github: "https://github.com/diogozdev/ilustra",
      link: "https://andressailustra.art",
      images: [
        "assets/thumbnails/ilustra-1.png",
      ],
      hasWebsite: true,
      hasStar: true
    },
    {
      title: "Sergio Genealogia",
      description: "",
      github: "https://github.com/sergiogenealogia/sergiogenealogia.github.io",
      link: "https://sergiogenealogia.github.io",
      images: [
        "assets/thumbnails/sergio-genealogia.png",
      ],
      hasWebsite: true,
    },
    {
      title: "Social Orbit",
      description: "Social website for devs",
      github: "https://github.com/diogozdev/social-orbit",
      link: "#",
      images: [
        "assets/thumbnails/orbit.png",
      ],
      hasWebsite: false,
      hasStar: true
    },
  ]

}

