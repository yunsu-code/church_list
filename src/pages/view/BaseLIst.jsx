import { useSelector } from "react-redux";
import Header from "@components/common/Header";
import litany from "@data/litany.json";
import styles from "./BaseLIst.module.scss";
import Container from "@components/view/Container";
import DashFlexList from "../../components/view/DashFlexList";
import { RiCrossFill, RiPrinterLine } from "@remixicon/react";

const BaseLIst = () => {
  const basicList = useSelector((state) => state.basicList);
  const notice = useSelector((state) => state.notice);

  const onPrint = () => {
    window.print();
  };

  return (
    <>
      <div className={styles.listWrap}>
        <Header className={styles.listHeader} title={"예배 순서지"}>
          <button type="button" className={styles.printBtn} onClick={onPrint}>
            <RiPrinterLine size={27} />
          </button>
        </Header>
        <div className={styles.page}>
          <Container type="leftSide">
            <div className={styles.bigTitle}>주일 낮 예배</div>
            <div className={styles.time}>
              <div>오전 11:00</div>
              <div>인도자 : 황 우기 목사</div>
            </div>
            <div>
              <DashFlexList
                label="찬 송 가"
                tail="다 같 이"
                center={basicList.주일낮예배.찬송가.value[0]}
              />
              <DashFlexList
                label="찬 송 가"
                tail="다 같 이"
                center={basicList.주일낮예배.찬송가.value[1]}
              />
              <DashFlexList
                label="찬 송 가"
                tail="다 같 이"
                center={basicList.주일낮예배.찬송가.value[2]}
              />
              <DashFlexList
                label="찬 송 가"
                tail="다 같 이"
                center={basicList.주일낮예배.찬송가.value[3]}
              />
              <DashFlexList
                label="성 경 봉 독"
                tail="황맹심 전도사"
                center={`[ ${basicList.주일낮예배.성경봉독.value} ]`}
              />
              <DashFlexList
                label="교 독 문"
                tail="다 같 이"
                center={`${basicList.주일낮예배.교독문.value}.${
                  litany[basicList.주일낮예배.교독문.value].name
                }`}
              />
            </div>
            <div className={styles.litany}>
              {basicList.주일낮예배.교독문.value !== "" ? (
                <>
                  {litany[basicList.주일낮예배.교독문.value].text.map(
                    (el, idx) => {
                      if (idx % 2 == 0) {
                        return (
                          <div className={styles.pastor} key={idx}>
                            <RiCrossFill size={11} /> {el}
                          </div>
                        );
                      } else {
                        return (
                          <div className={styles.person} key={idx}>
                            {el}
                          </div>
                        );
                      }
                    }
                  )}
                  {litany[basicList.주일낮예배.교독문.value].all ? (
                    <div className={styles.all}>
                      <RiCrossFill size={11} />
                      {litany[basicList.주일낮예배.교독문.value].all}
                    </div>
                  ) : null}
                </>
              ) : null}
            </div>
            <div>
              <DashFlexList
                label="특 송"
                tail={basicList.주일낮예배.특송.value}
              />
              <DashFlexList
                label="찬 송 가"
                tail="다 같 이"
                center={basicList.주일낮예배.찬송가.value[1]}
              />
              <DashFlexList
                label="찬 송 가"
                tail="다 같 이"
                center={basicList.주일낮예배.찬송가.value[2]}
              />
              <DashFlexList
                label="찬 송 가"
                tail="다 같 이"
                center={basicList.주일낮예배.찬송가.value[3]}
              />
              <DashFlexList
                label="성 경 봉 독"
                tail="황맹심 전도사"
                center={`[ ${basicList.주일낮예배.성경봉독.value} ]`}
              />
              <DashFlexList
                label="교 독 문"
                tail="다 같 이"
                center={`${basicList.주일낮예배.교독문.value}.${
                  litany[basicList.주일낮예배.교독문.value].name
                }`}
              />
              <DashFlexList
                label="특 송"
                tail={basicList.주일낮예배.특송.value}
              />
              <DashFlexList
                label="찬 송 가"
                tail="다 같 이"
                center={basicList.주일낮예배.찬송가.value[1]}
              />
              <DashFlexList
                label="찬 송 가"
                tail="다 같 이"
                center={basicList.주일낮예배.찬송가.value[2]}
              />
              <DashFlexList
                label="찬 송 가"
                tail="다 같 이"
                center={basicList.주일낮예배.찬송가.value[3]}
              />
              <DashFlexList
                label="성 경 봉 독"
                tail="황맹심 전도사"
                center={`[ ${basicList.주일낮예배.성경봉독.value} ]`}
              />
              <DashFlexList
                label="교 독 문"
                tail="다 같 이"
                center={`${basicList.주일낮예배.교독문.value}.${
                  litany[basicList.주일낮예배.교독문.value].name
                }`}
              />
              <DashFlexList
                label="특 송"
                tail={basicList.주일낮예배.특송.value}
              />
              <DashFlexList
                label="찬 송 가"
                tail="다 같 이"
                center={basicList.주일낮예배.찬송가.value[1]}
              />
              <DashFlexList
                label="찬 송 가"
                tail="다 같 이"
                center={basicList.주일낮예배.찬송가.value[2]}
              />
            </div>
          </Container>
          <Container type="rightSide">
            <ul>
              <li>
                * 주일찬양예배 찬송 : {basicList.주일찬양예배.찬송가.value}
              </li>
              <li>
                * 주일찬양예배 성경봉독 :{" "}
                {basicList.주일찬양예배.성경봉독.value}
              </li>
              <li>* 주일찬양예배 기도 : {basicList.주일찬양예배.기도.value}</li>
              <br />
              <li>* 수요예배 찬송 : {basicList.수요예배.찬송가.value}</li>
              <li>* 수요예배 말씀 : {basicList.수요예배.성경봉독.value}</li>
              <li>* 수요예배 기도 : {basicList.수요예배.기도.value}</li>
              <br />
              <li>* 금요예배 찬송 : {basicList.금요예배.찬송가.value}</li>
              <li>* 금요예배 말씀 : {basicList.금요예배.성경봉독.value}</li>
              <li>* 금요예배 기도 : {basicList.금요예배.기도.value}</li>
              <li>
                * 공지사항 :
                <br />
                {notice.map((el, idx) => {
                  return <p key={idx}>{el}</p>;
                })}
              </li>
            </ul>
          </Container>
        </div>
      </div>
    </>
  );
};

export default BaseLIst;
