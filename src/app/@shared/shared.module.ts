import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { LoaderComponent } from './loader/loader.component';
import { filterSample } from './filter-pipes/sample-filter.pipe';
import { SearchFilterPipe } from './filter-pipes/search-filter.pipe';

@NgModule({
  imports: [IonicModule, TranslateModule, CommonModule],
  declarations: [LoaderComponent, filterSample],
  exports: [LoaderComponent, SearchFilterPipe],
})
export class SharedModule {}
