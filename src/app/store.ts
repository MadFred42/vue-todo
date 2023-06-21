import { reactive } from 'vue';
import { User, users } from '@/shared/users/users.ts';
// import { User } from '@/shared/users/users.ts';

interface Store {
  isTodo: boolean;
  isSettings: boolean;
  activeUser: string;
}

export const store: Store = reactive({
  isTodo: false,
  isSettings: false,
  activeUser: '',
});

export const userStore: { users: User[] } = reactive({
  users: users,
});
// предположим это все приходит из БД
export const usersTodoStore = reactive([
  {
    name: 'John Doe',
    todos: [],
  },
  {
    name: 'Jane Doe',
    todos: [],
  },
  {
    name: 'James Bond',
    todos: [],
  },
  {
    name: 'I am Groot',
    todos: [],
  },
]);
