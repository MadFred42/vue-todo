export interface User {
  id: number;
  email: string;
  todos: ToDo[];
  name: string;
  phone: string;
  isPaid: boolean;
  amount: string;
}

export interface ToDo {
  isDone: false;
  title: string;
  id: string;
  dateCreated: string;
  dateCompleted: string;
}

export const users: User[] = [
  {
    id: 1,
    email: 'test@email.com',
    todos: [],
    name: 'John Doe',
    phone: '+05355437828',
    isPaid: true,
    amount: '30$',
  },
  {
    id: 2,
    email: 'jane@email.com',
    todos: [],
    name: 'Jane Doe',
    phone: '+88005553535',
    isPaid: false,
    amount: '0$',
  },
  {
    id: 3,
    email: 'bond@james.bond',
    todos: [],
    name: 'James Bond',
    phone: '+777777007',
    isPaid: true,
    amount: '007$',
  },
  {
    id: 3,
    email: 'i@am.groot',
    todos: [],
    name: 'I am Groot',
    phone: '+3042131342',
    isPaid: true,
    amount: '1 branch and 3 leafs',
  },
];
