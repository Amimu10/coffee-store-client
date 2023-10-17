import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = (id) => {
    // Make sure user is deleted
    fetch(`https://coffee-store-server-jx86h99yx-amimul211-gmailcom.vercel.app/user/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.deletedCount > 0) {
          console.log('Deleted successfully');

          // Remove the user from UI
          const remaining = users.filter(user => user._id !== id);
          setUsers(remaining);
        }
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  return (
    <div className="text-center px-14">
      <h2>Users: {loadedUsers.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Created At</th>
              <th>Action</th>
              <th>Last Login</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.email}</td>
                <td>{user.createAt}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}  
                    className="btn"
                  >
                    X
                  </button>
                </td>
                <td>{user.lastLogin}</td>  
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
