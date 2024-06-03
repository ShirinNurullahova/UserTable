interface User {
  id: number;
  initials: string;
  name: string;
  email: string;
  date: string;
  color: string;
}

interface TableColumn {
  field: string;
  headerName: string;
  width: string;
}

interface UserTableProps {
  rows: User[];
  columns: TableColumn[];
}
