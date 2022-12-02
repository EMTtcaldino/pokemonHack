import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '@shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ItemCardComponent } from '@app/components/item-card/item-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    IonicModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [HomeComponent, ItemCardComponent],
  exports: [ItemCardComponent],
})
export class HomeModule {}
