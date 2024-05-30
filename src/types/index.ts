interface User {
    id: number;
    initials: string;
    name: string;
    email: string;
    date: string;
    color: string;
  }
  interface UserTableProps {
    users: User[];
  }