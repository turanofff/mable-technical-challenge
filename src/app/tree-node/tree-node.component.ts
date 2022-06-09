import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { INodeEvent } from '../models/event.model';
import { INodeModel } from '../models/node.model';

@Component({
  selector: 'tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class InodeComponent implements OnInit {

  constructor() { }

  public newItemName:string = ''
  @Input() node?: INodeModel;
  @Output() addNode: EventEmitter<INodeEvent> = new EventEmitter<INodeEvent>();
  @Output() delNode: EventEmitter<INodeEvent> = new EventEmitter<INodeEvent>();
  @Output() setType: EventEmitter<INodeEvent> = new EventEmitter<INodeEvent>();
  @Output() setName: EventEmitter<INodeEvent> = new EventEmitter<INodeEvent>();
  @ViewChild('newItemNameInput',{ static: false }) newNode!: ElementRef<HTMLInputElement>;
  @ViewChild('fileOrFolder',    { static: false }) fileOrFolder!: ElementRef<HTMLInputElement>;

  addChildNode(type?: 'folder' | 'file' | 'unset' | null){
    this.addNode.emit({id: this.node?.id, type: type})
  }

  setNodeType(type: 'folder' | 'file' | 'unset' | null){
    this.setType.emit({id:this.node?.id, type:type})
  }

  setNodeName(){
    if (this.newItemName === '') {
      this.delNode.emit({id:this.node?.id})
    } else {
      this.setName.emit({id: this.node?.id, name: this.newItemName})
    }
  }

  deleteNode() {
    this.delNode.emit({id: this.node?.id})
  }

  ngOnInit(): void {
  }
 
  ngAfterViewInit(){
    if (this.newNode) {
      this.newNode.nativeElement.focus()
    }
    if(this.fileOrFolder) {
      this.fileOrFolder.nativeElement.focus()
    }
  }

}
