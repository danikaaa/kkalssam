import ContentTemplate from "./ContentTemplate";
import UserTemplate from "./UserTemplate";
import '../styles/Home.scss';
import Calculate from "../components/Calculate";


const Home = () =>{

    return (
        <div>
            <UserTemplate />
            <ContentTemplate />
            <Calculate />
        </div>
    );

};

export default Home;