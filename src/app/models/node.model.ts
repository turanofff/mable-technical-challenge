export interface INodeModel {
    type: 'folder' | 'file' | 'unset' | null;
    name?: string;
    children?: INodeModel[];
    id: string;
}