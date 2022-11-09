import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./Components/AddUser";
import EditUser from "./Components/EditUser";
import UserList from "./Components/UserList";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="add" element={<AddUser />} />
      <Route path="edit/:id" element={<EditUser />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
