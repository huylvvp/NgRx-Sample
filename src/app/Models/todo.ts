export class Todo {
  id!: number;
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

