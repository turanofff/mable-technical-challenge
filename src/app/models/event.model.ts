export interface INodeEvent {
    id?: string;
    name?: string;
    type?: 'folder' | 'file' | 'unset' | null;
}