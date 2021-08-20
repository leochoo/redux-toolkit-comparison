export interface State {
  todos: Todo[];
  selectedTodo: string | null;
  counter: number;
}

export interface Todo {
  id: string;
  desc: string;
  isComplete: boolean;
}
