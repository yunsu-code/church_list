import Header from "@components/common/Header";
import Container from "@components/view/Container";
import styles from "./DeleteDataGuide.module.scss";
import step1 from "@assets/img/step1.png"
import step2_1 from "@assets/img/step2-1.png"
import step2_2 from "@assets/img/step2-2.png"
import step3 from "@assets/img/step3.png"

const DeleteDataGuide = () => {
  return (
    <>
      <Header title={"데이터 지우는 방법"} />
      <Container className={styles.DeleteDataGuide}>
        <p className={styles.desc}>1. 키보드 맨 윗줄에 위치한 F12 누르기 (아래와 같이 알림창이 뜬다면 '열기 DevTools' 누르기)</p>
        <img src={step1} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p className={styles.desc}>2. 오른쪽에 화면이 뜨면 아래 사진과 같이 순서 진행해주기</p>
        <p>- 빨간 화살표로 표시한 아이콘을 클릭해주세요</p>
        <img src={step2_1} />
        <div className={styles.subInfoBox}>
          <p className={styles.descRed}>※ 혹시 위 아이콘이 보이지 않는다면?<br />+모양 아이콘 클릭 → 응용프로그램 버튼을 클릭해주세요
          </p>
          <img className={styles.subImg} src={step2_2} />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <p className={styles.desc}>3. 왼쪽 메뉴들에서 '로컬 저장소' 클릭 → 'https://yunsu-code.github.io/' 우클릭 → '지우기' 버튼 클릭</p>
        <img src={step3} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p className={styles.desc}>4. 새로고침 하기</p>
        <br />
        <br />
        <br />
        <p className={styles.descRed}>※ 주의사항 : 데이터 삭제 작업 직후에는 주보만들기에서 '이전 내역 불러오기'가 불가능함<br />
          데이터 삭제하기 후에는 이전에 입력한 주보 내용이 없어졌기 때문에 새로 입력해야하며<br />
          입력 후 주보를 만든 다음부터 '이전 내역 불러오기'가 가능합니다.</p>
      </Container>
    </>
  )
}

export default DeleteDataGuide