export type Category = 'work' | 'personal' | 'other';


export class Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  category: Category;
}
