import ContentList from "../components/ContentList";


const ContentTemplate = ({contents, userlist, onContentInsert}) => {

    return (
        <div className="Template">
            <ContentList contents={contents} userlist={userlist} onContentInsert={onContentInsert}/>
        </div>
    );

};

export default ContentTemplate;