import UserList from "../components/UserList";
import '../styles/UserTemplate.scss';

const UserTemplate = ({users, onUserInsert}) => {

    return (
        <div className="Template">
            <UserList users={users} onUserInsert={onUserInsert}></UserList>
            
        </div>
        
    );
};

export default UserTemplate;