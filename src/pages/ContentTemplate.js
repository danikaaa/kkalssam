import ContentList from "../components/ContentList";


const ContentTemplate = ({contents, userlist}) => {

    return (
        <div className="Template">
            <ContentList contents={contents} userlist={userlist}/>
        </div>
    );

};

export default ContentTemplate;