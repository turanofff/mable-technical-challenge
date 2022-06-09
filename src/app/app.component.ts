import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { INodeModel } from './models/node.model';
import { ApiMockService } from './services/api-mock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public filesystem$:Observable<INodeModel>
  
  constructor (private api: ApiMockService){
    this.filesystem$ = this.api.fetchEmptyTreeStructureData()
  }
}
