import { BrowserRouter, Routes, Route} from "react-router-dom";
import CompForm from "./ComplaintForm";
import CustomizedTables from "./CustomizedTables";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomizedTables />} />
        <Route path="/add" element={<CompForm />} />
      </Routes>
    </BrowserRouter>
  );
}
