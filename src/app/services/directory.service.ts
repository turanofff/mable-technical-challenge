import { Injectable } from '@angular/core';
import { INodeModel } from '../models/node.model';

@Injectable({
  providedIn: 'root'
})
export class DirectoryService {

  constructor() {}

  private findNode(children?:INodeModel[], id?: string, modificator?: any) {
      return children?.map(child => {
        if ( child.children ) child.children = this.findNode(child.children, id, modificator);
        if ( child.id === id && modificator ) modificator(child)
        return child;
    }) 
  }

  private findAndDeleteNode(children?:INodeModel[], id?:string){
      return children?.map(child => { return {...child}}).filter(child => {
        if ( child.children ){
          child.children = this.findAndDeleteNode(child.children,id);
        }
        return id ? child.id !== id : child.name !== '';
    })
  }


  public setTypeById (fs:INodeModel, id:string, type: 'folder' | 'file' | 'unset' | null){
      fs.children = this.findNode(fs.children,id,(child:INodeModel) => {
        child.type = type
      })
  }

  public deleteUnnamed(fs:INodeModel){
      fs.children = this.findAndDeleteNode(fs.children)
  }

  public deleteById(fs:INodeModel, id?:string){
      fs.children = this.findAndDeleteNode(fs.children,id)
  }

  public renameById (fs:INodeModel, name:string, id?:string){
      fs.children = this.findNode(fs.children,id, (child:INodeModel) => {
        child.name = name
      })
  }

  public createNewNode(fs:INodeModel, parentId?:string, type?: 'folder' | 'file' | 'unset' | null) {
    const newNode: INodeModel = {
      id: Math.floor(Math.random() * Math.pow(10,10)).toString(),
      name: '',
      type: type ? type : 'unset',
    }

    if(parentId) {
      this.findNode(fs.children!,parentId, (child:INodeModel) => {
        child.children = [... child.children ? child.children: [], newNode]
      })
    } else {
       this.deleteUnnamed(fs)
       newNode.type = 'folder'
       if (fs.children) {
        fs.children.push(newNode)
       } else {
         fs.children = [newNode]
       }
    }
  }
}
