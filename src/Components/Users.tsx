import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../Services/FetchUsers';
import { User } from '../Types/User';


const Users: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetchUsers()
            .then((data) => {
                setUsers(data);
                console.log(data);

                setLoading(false);
            })
            .catch((error) => {
                console.error('Failed to fetch users:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading users...</p>
            ) : (
                <div>
                    {users.map((user) => (
                        <div key={user.id}>
                            <img src={user.photo} alt={user.username} width="100" />
                            <p>{user.username}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Users;
