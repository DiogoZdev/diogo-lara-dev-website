import { Component, Input } from "@angular/core";

@Component({
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.scss'],
  selector: 'app-network',
})
export class NetworkComponent {

  @Input() iconsClass?: 'light-icons' | 'dark-icons';

}
