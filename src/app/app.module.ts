import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InodeComponent } from './tree-node/tree-node.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { ViewModeDirective } from './directives/view-mode.directive';
import { EditModeDirective } from './directives/edit-mode.directive';

@NgModule({
  declarations: [
    AppComponent,
    InodeComponent,
    TreeViewComponent,
    ViewModeDirective,
    EditModeDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
