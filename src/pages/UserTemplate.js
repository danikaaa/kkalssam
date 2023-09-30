import UserList from "../components/UserList";
import '../styles/UserTemplate.scss';

const UserTemplate = ({users, onInsert}) => {

    return (
        <div className="Template">
            <UserList users={users} onInsert={onInsert}></UserList>
            
        </div>
        
    );
};

export default UserTemplate;