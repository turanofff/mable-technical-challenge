import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { INodeModel } from '../models/node.model';

@Injectable({
  providedIn: 'root'
})
export class ApiMockService {

  private apiResponseNoStruct:INodeModel = {
    id: 'root',
    type: 'folder'
  }

  private apiResponseSampleStruct:INodeModel = {
    id: 'root',
    type: 'folder',
    children: [{
      id: '1',
      type: 'folder',
      name: 'New Directory 1',
      children: [{
        id: '111',
        type: 'file',
        name: 'abc.bin'
      },{
        id: '222',
        type: 'file',
        name: 'xyz.bin'
      }]
    },{
      id: '2',
      type: 'folder',
      name: 'New Directory 2',
      children:[{
        id: '3',
        type: 'folder',
        name: 'New Directory 3',
        children:[{
          id: '444',
          type: 'file',
          name: 'Test File.png'
        }]
      }]
    }]
  }

  constructor() {}

  public fetchEmptyTreeStructureData():Observable<INodeModel>{
    return of(JSON.parse(JSON.stringify(this.apiResponseNoStruct)))
  }

  public fetchSampleTreeStructureData():Observable<INodeModel>{
    return of(JSON.parse(JSON.stringify(this.apiResponseSampleStruct)))
  }
}
