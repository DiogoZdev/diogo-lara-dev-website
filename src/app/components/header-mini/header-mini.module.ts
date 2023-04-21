import { NgModule } from "@angular/core";
import { NetworkModule } from "../network/network.module";
import { HeaderMiniComponent } from "./header-mini.component";

@NgModule({
  imports: [ NetworkModule ],
  declarations: [ HeaderMiniComponent ],
  exports:[ HeaderMiniComponent ],
})
export class HeaderMiniModule {}