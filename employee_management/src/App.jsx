import { useState } from "react";
import employees from "./data/employee.json";
import './App.css';

const App = () => {
  const [employee, setEmployee] = useState(employees);
  const [selectedid, setSelectedId] = useState(null);
  const [flag, setFlag] = useState(false);
  const [newEmp,setNewEmp]=useState({
    id: "",
  firstName: "",
  lastName: "",
  email: "",
  contactNumber: "",
  age: "",
  dob: "",
  salary: "",
  address: "",
  imageUrl: ""

  })
  const handleProfile = (empid) => {
    if (selectedid == empid) {
      setFlag(!flag);
    } else {
      setSelectedId(empid);
      setFlag(true);
    }
  };
  const handleDel = (empID) => {
    const updated = employee.filter((emp) => emp.id !== empID);
    setEmployee(updated);
  };
  const handleChange2=(e)=>{
    setNewEmp({...newEmp,[e.target.name]:e.target.value})

  }
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setNewEmp({ ...newEmp, imageUrl });
    }
  };
  const handleAdd = () => {
    if (!newEmp.id || !newEmp.firstName) return alert("ID and First Name are required");

    setEmployee([...employee, newEmp]);
    setNewEmp({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: "",
      age: "",
      dob: "",
      salary: "",
      address: "",
      imageUrl: ""
    });
  };
  return (
    <>
      <div className="container">
      <div className="form">
      <h1>Add new employee</h1>
      <input
            name="id"
            placeholder="ID"
            value={newEmp.id}
            onChange={handleChange2}
          />
          <input
            name="firstName"
            placeholder="First Name"
            value={newEmp.firstName}
            onChange={handleChange2}
          />
          <input
            name="lastName"
            placeholder="Last Name"
            value={newEmp.lastName}
            onChange={handleChange2}
          />
          <input
            name="email"
            placeholder="Email"
            value={newEmp.email}
            onChange={handleChange2}
          />
          <input
            name="contactNumber"
            placeholder="Contact"
            value={newEmp.contactNumber}
            onChange={handleChange2}
          />
          <input
            name="age"
            placeholder="Age"
            value={newEmp.age}
            onChange={handleChange2}
          />
          <input
            name="dob"
            placeholder="DOB"
            value={newEmp.dob}
            onChange={handleChange2}
          />
          <input
            name="salary"
            placeholder="Salary"
            value={newEmp.salary}
            onChange={handleChange2}
          />
          <input
            name="address"
            placeholder="Address"
            value={newEmp.address}
            onChange={handleChange2}
          />
          <input type="file" accept="image/" onChange={handleImage} />
          {
            newEmp.imageUrl && (
              <div>
             <img src={newEmp.imageUrl} alt="Preview" width={20} />
              </div>
            )
          }
          <button onClick={handleAdd}>Add Employee</button>
      </div>
        {employee.map((emp) => (
          <div className="emp-id">
            <div
              style={{ cursor: "pointer" }}
              onClick={() => handleProfile(emp.id)}
            >
              {emp.id}
            </div>
            {selectedid == emp.id && flag && (
              <div className="emp-details">
                <img src={emp.imageUrl} alt="Nothing" />
                <h1>{emp.firstName}</h1>
                <h1>{emp.lastName}</h1>
                <h1>{emp.email}</h1>
                <h1>{emp.contactNumber}</h1>
                <h1>{emp.age}</h1>
                <h1>{emp.dob}</h1>
                <h1>{emp.salary}</h1>
                <h1>{emp.address}</h1>
                <button onClick={() => handleDel(emp.id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
export default App;
