import { Component, Input, OnInit } from '@angular/core';
import { INodeEvent } from '../models/event.model';
import { INodeModel } from '../models/node.model';
import { DirectoryService } from '../services/directory.service';

@Component({
  selector: 'tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent implements OnInit {

  constructor(private dir: DirectoryService) { }

  @Input() root!: INodeModel | null;

  isRoot(node:INodeModel){
    return node?.id === 'root'
  }

  addNode(event:INodeEvent){
    if (this.root) this.dir.createNewNode(this.root,event.id,event.type)
  }

  delNode(event:INodeEvent){
    if (this.root) this.dir.deleteById(this.root, event.id)
  }

  setType(event:INodeEvent){
    if(this.root && event.id && event.type) this.dir.setTypeById(this.root,event.id,event.type)
  }

  setName(event:INodeEvent){
    if (this.root && event.name) this.dir.renameById(this.root,event.name,event.id)
  }

  ngOnInit(): void {
  }

}
