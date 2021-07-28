export class Todo {
  id: number | undefined;
  title: string;
  complete: boolean;
  constructor(
    title?:string,
    complete?:boolean
  ) {
    this.title = title || '';
    this.complete = complete || false
  }
}
