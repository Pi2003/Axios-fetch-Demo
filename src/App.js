import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/users`
        );
        setData(response.data);
        setError(null);
        console.log(data.users[0].firstName);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [loading]);
  return (
    <div>
      <table className="table" border={1} >
            <th>
                <tr>
                    <th>User id</th>
                    <th>First Name</th>
                    <th>Age</th>
                    <th>BirthDate</th>
                    <th>BloodGroup</th>
                </tr>
            </th>
                {data.users.map(user => (
                    <tr key={user.id}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.age}</td>
                        <td>{user.birthDate}</td>
                        <td>{user.bloodGroup}</td>
                    </tr>
                ))}
        </table>
    </div>
  );
}

export default App;
