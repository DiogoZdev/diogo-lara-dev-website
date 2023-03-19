import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NetworkComponent } from "./network.component";

@NgModule({
  imports: [CommonModule],
  declarations: [NetworkComponent],
  exports: [NetworkComponent]
})
export class NetworkModule {}