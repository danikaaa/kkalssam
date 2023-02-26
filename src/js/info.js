

function Info() {

    const peopleArr = [];

    function handleClick(e){
        e.preventDefault();
        console.log('클릭');
        document.getElementById('name').classList.remove('none');
        // 클래스 명에 따라 css처리
    }

    function peoplePlus(e){
        e.preventDefault();

        const name = document.getElementById("people").value;

        peopleArr.push(name);

        console.log(document.getElementById("people").value);
        console.log(peopleArr);
    }

    return (
      <div className="info">
        깔쌈하게 나눠볼까요?
        <div className="people-box">
            <span className="plus-btn" onClick={handleClick}>함께한 사람 추가 +</span>
        </div>
        <div className="input-box none" id="name">
            <input type="text" placeholder="함께한 사람의 이름을 적어주세요." id="people"></input><span onClick={peoplePlus}>+</span>
        </div>
        <div>
            <span>함께한 사람</span>
            <ul>
                <li>사람1</li>
                <li>사람2</li>
            </ul>
        </div>
        <div className="food-box">
            <span className="plus-btn" onClick={handleClick}>내용 추가 +</span>
        </div>
        <div className="food">
            <div className="input-box none">
            <input type="text" placeholder="내용을 입력해주세요." id="food-content"></input>
            </div>
            <div className="input-box none">
            <input type="text" placeholder="금액을 입력해주세요." id="food-price"></input>원
            </div>
            <div className="input-box none">여긴 for문 돌려서 체크박스스</div>
        </div>
        
      </div>
    );
  }
  
  export default Info;