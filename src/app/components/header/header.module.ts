import { NgModule } from "@angular/core";
import { NetworkModule } from "../network/network.module";
import { HeaderComponent } from "./header.component";

@NgModule({
  imports: [NetworkModule],
  declarations: [ HeaderComponent ],
  exports:[ HeaderComponent ],
})
export class HeaderModule {}