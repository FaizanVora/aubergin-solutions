import React, { useEffect, useState } from "react";
import axios from "axios";
import UserDetailPage from './UserDetailPage';

const Card = () => {
  const [allemp, setallemp] = useState([]);

  useEffect(() => {
    getallemp();
  }, []);

  const getallemp = async () => {
    try {
      const response = await axios.get("https://reqres.in/api/users?page=2");
      setallemp(response.data.data);
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  const handleImageClick = (empId) => {
    setallemp(prevState =>
      prevState.map(emp =>
        emp.id === empId ? { ...emp, selected: true } : emp
      )
    );
  };

  return (
    <div>
      {allemp.map((emp) => (
        <div className="card" key={emp.id}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={emp.avatar}
                alt="Profile"
                className="card-img"
                onClick={() => handleImageClick(emp.id)}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h4 className="card-title">
                  {emp.first_name} {emp.last_name}
                </h4>
                <p className="card-text">{emp.profession}</p>
                <p className="card-text">Email: {emp.email}</p>
                {emp.selected && <UserDetailPage user={emp} />}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
