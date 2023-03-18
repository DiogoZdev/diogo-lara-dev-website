import { Component, OnInit } from "@angular/core";
import { ThemeService } from "src/app/services/theme.service";

@Component({
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  selector: 'app-header',
})
export class HeaderComponent implements OnInit {

  public imageUrl = "";

  constructor(
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    const theme = this.themeService.getTheme();
    this.imageUrl = theme === "light" ? "assets/images/diogo-light.svg" : "assets/images/diogo-dark.svg";
  }

}