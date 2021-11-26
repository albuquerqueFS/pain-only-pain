import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsComponent } from './projects.component';
import { CardModule } from 'src/app/components/card/card.module';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule, CardModule],
  exports: [ProjectsComponent],
})
export class ProjectsModule {}
