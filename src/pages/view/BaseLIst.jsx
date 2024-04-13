import { useSelector } from "react-redux";
import Header from "@components/common/Header";
import litany from "@data/litany.json";
import styles from "./BaseLIst.module.scss";
import Container from "@components/view/Container";
import DashFlexList from "../../components/view/DashFlexList";
import { RiCrossFill, RiPrinterLine, RiAsterisk, RiSunLine, RiSeedlingLine, RiCrossLine, RiAwardFill } from "@remixicon/react";
import cx from 'classnames'
import { useState } from "react";
import { useEffect } from "react";

const BaseLIst = () => {
  const [today, setToday] = useState("")
  const basicList = useSelector((state) => state.basicList);
  const notice = useSelector((state) => state.notice);

  const onPrint = () => {
    window.print();
  };

  useEffect(()=> {
    setToday(`${new Date().getFullYear()}.${new Date().getMonth()+1}.${new Date().getDate()}`)
  }, [])

  return (
    <>
      <div className={styles.listWrap}>
        <Header className={styles.listHeader} title={"예배 순서지"}>
          <button type="button" className={styles.printBtn} onClick={onPrint}>
            <RiPrinterLine size={27} />
          </button>
        </Header>
        {/* S : 뒷면 */}
        <div className={styles.page}>
          {/* S : leftSide */}
          <Container type="leftSide">
            <div>
              <div className={styles.bigTitle}>주일 낮 예배</div>
              <div className={styles.time}>
                <div>오전 11:00</div>
                <div>인도자 : 황 우기 목사</div>
              </div>
              <DashFlexList
                asterisk
                label="묵 도"
                tail="다 같 이"
              />
              <DashFlexList
                asterisk
                label="기 원"
                tail="인 도 자"
              />
              <DashFlexList
                asterisk
                label="찬 송"
                tail="다 같 이"
                center={basicList.주일낮예배.찬송가.value[0]}
              />
              <DashFlexList
                asterisk
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
                asterisk
                label="신 앙 고 백"
                tail="다 같 이"
                center="사도신경"
              />
              <DashFlexList
                label="찬 송"
                tail="다 같 이"
                center={basicList.주일낮예배.찬송가.value[1]}
              />
              <DashFlexList
                label="대 표 기 도"
                tail="신 승호 집사" 
              />
              <DashFlexList
                label="성 경 봉 독"
                tail="황 맹심 전도사"
                center={`[ ${basicList.주일낮예배.성경봉독.value} ]`}
              />
              <DashFlexList
                label="특 송"
                tail={basicList.주일낮예배.특송.value}
              />
              <DashFlexList
                label="설 교"
                tail="인 도 자"
                center={`[ ${basicList.주일낮예배.설교제목.value} ]`}
              />
              <DashFlexList
                label="목 회 기 도"
                tail="인 도 자"
              />
              <DashFlexList
                label="봉 헌 찬 송"
                tail="다 같 이"
                center={basicList.주일낮예배.찬송가.value[2]}
              />
              <DashFlexList
                label="봉 헌 기 도"
                tail="인 도 자"
              />
              <DashFlexList
                label="교 회 소 식"
                tail="인 도 자"
              />
              <DashFlexList
                label="성도의 교제"
                tail="인 도 자"
              />
              <DashFlexList
                asterisk
                label="찬 송"
                tail="다 같 이"
                center={basicList.주일낮예배.찬송가.value[3]}
              />
              <DashFlexList
                asterisk
                label="축 도"
                tail="담임 목사"
              />
              <p className={styles.infoText}>
                <RiAsterisk size={10} color="#000" />
                예배 10분전에 참석하여 기도로 준비하시기 바랍니다.
              </p>
            </div>
          </Container>
          {/* E : leftSide */}

          {/* S : rightSide */}
          <Container type="rightSide" className={styles.backRightSide}>
              <p className={styles.infoText}>
                "야곱아 너를 창조하신 여호와께서 이제 말씀 하시느니라. 이스라엘아 너를 조성하신 자가 이제 말씀하시느니라. 너는 두려워 말라. 내가 너를 구속하였고 내가 너를 지명하여 불렀나니 너는 내 것이라. (시:43:1)"
              </p>
            <div className={styles.contentBoxWrap}>
              <div className={styles.contentBoxRow}>
                {/* S : 주일 찬양 예배 */}
                <div className={styles.contentBox}>
                  <div>
                    <div className={styles.bigTitle}>주일 찬양 예배</div>
                    <div className={styles.time}>
                      <div>오후 2:00</div>
                      <div>인도자</div>
                    </div>
                  </div>
                  <DashFlexList
                    part2
                    label="묵 도"
                    tail="담임 목사"
                  />
                  <DashFlexList
                    part2
                    label="찬 송"
                    center={basicList.주일찬양예배.찬송가.value[0]}
                    tail="다 같 이"
                  />
                  <DashFlexList
                    part2
                    label="신앙고백"
                    tail="다 같 이"
                    center="사도신경"
                  />
                  <DashFlexList
                    part2
                    label="찬 송"
                    tail="다 같 이"
                    center={basicList.주일찬양예배.찬송가.value[1]}
                  />
                  <DashFlexList
                    part2
                    label="기 도"
                    tail={basicList.주일찬양예배.기도.value}
                  />
                  <DashFlexList
                    part2
                    sermon
                    label="성경봉독"
                    tail={`[ ${basicList.주일찬양예배.성경봉독.value} ]`}
                  />
                  <DashFlexList
                    part2
                    sermon
                    label="설 교"
                    tail={`[${basicList.주일찬양예배.설교제목.value}]`}
                  />
                  <DashFlexList
                    part2
                    label="기 도"
                    tail="인 도 자"
                  />
                  <DashFlexList
                    part2
                    label="찬 송"
                    tail="다 같 이"
                    center={basicList.주일찬양예배.찬송가.value[2]}
                  />
                  <DashFlexList
                    part2
                    label="축 도"
                    tail="담임 목사"
                  />
                </div>
                {/* E : 주일 찬양 예배 */}

                {/* S : 수요 예배 */}
                <div className={styles.contentBox}>
                  <div>
                    <div className={styles.bigTitle}>수요 기도회</div>
                    <div className={styles.time}>
                      <div>오후 7:00</div>
                      <div>인도자</div>
                    </div>
                  </div>
                  <DashFlexList
                    part2
                    label="묵 도"
                    tail="담임 목사"
                  />
                  <DashFlexList
                    part2
                    label="찬 송"
                    center={basicList.수요예배.찬송가.value[0]}
                    tail="다 같 이"
                  />
                  <DashFlexList
                    part2
                    label="신 앙 고 백"
                    tail="다 같 이"
                    center="사도신경"
                  />
                  <DashFlexList
                    part2
                    label="찬 송"
                    tail="다 같 이"
                    center={basicList.수요예배.찬송가.value[1]}
                  />
                  <DashFlexList
                    part2
                    label="기 도"
                    tail={basicList.수요예배.기도.value}
                  />
                  <DashFlexList
                    part2
                    sermon
                    label="성 경 봉 독"
                    tail={`[ ${basicList.수요예배.성경봉독.value} ]`}
                  />
                  <DashFlexList
                    part2
                    sermon
                    label="설 교"
                    tail={`[${basicList.수요예배.설교제목.value}]`}
                  />
                  <DashFlexList
                    part2
                    label="기 도"
                    tail="인 도 자"
                  />
                  <DashFlexList
                    part2
                    label="찬 송"
                    tail="다 같 이"
                    center={basicList.수요예배.찬송가.value[2]}
                  />
                  <DashFlexList
                    part2
                    label="축 도"
                    tail="담임 목사"
                  />
                </div>
                {/* E : 수요 예배 */}
              </div>
              <div className={styles.contentBoxRow}>
                {/* S : 금요 예배 */}
                <div className={styles.contentBox}>
                  <div>
                    <div className={styles.bigTitle}>금요 철야 예배</div>
                    <div className={styles.time}>
                      <div>오후 7:00</div>
                      <div>인도자</div>
                    </div>
                  </div>
                  <DashFlexList
                    part2
                    label="묵 도"
                    tail="담임 목사"
                  />
                  <DashFlexList
                    part2
                    label="찬 송"
                    center={basicList.금요예배.찬송가.value[0]}
                    tail="다 같 이"
                  />
                  <DashFlexList
                    part2
                    label="신 앙 고 백"
                    tail="다 같 이"
                    center="사도신경"
                  />
                  <DashFlexList
                    part2
                    label="찬 송"
                    tail="다 같 이"
                    center={basicList.금요예배.찬송가.value[1]}
                  />
                  <DashFlexList
                    part2
                    label="기 도"
                    tail={basicList.금요예배.기도.value}
                  />
                  <DashFlexList
                    part2
                    sermon
                    label="성 경 봉 독"
                    tail={`[ ${basicList.금요예배.성경봉독.value} ]`}
                  />
                  <DashFlexList
                    part2
                    sermon
                    label="설 교"
                    tail={`[${basicList.금요예배.설교제목.value}]`}
                  />
                  <DashFlexList
                    part2
                    label="기 도"
                    tail="인 도 자"
                  />
                  <DashFlexList
                    part2
                    label="찬 송"
                    tail="다 같 이"
                    center={basicList.금요예배.찬송가.value[2]}
                  />
                  <DashFlexList
                    part2
                    label="축 도"
                    tail="담임 목사"
                  />
                </div>
                {/* E : 금요 예배 */}

                {/* S :  다음주 예배 위원 */}
                <div className={cx(styles.contentBox, styles.nextWeek)}>
                  <div>
                    <div className={styles.bigTitle}>다음주 예배 위원</div>
                    <div className={styles.desc}>
                      "맡은 자에게 구할 것은 충성"<br />(고전.4:1)
                    </div>
                  </div>
                  <DashFlexList
                    part2
                    className={styles.nextWeekList}
                    label={
                      <span className={styles.nextWeekLabel}>
                        <RiSeedlingLine size={14} color="#000" />
                        주일 낮 대표 기도
                      </span>
                    }
                    tail="신 승호 집사"
                  />
                  <DashFlexList
                    part2
                    className={styles.nextWeekList}
                    label={
                      <span className={styles.nextWeekLabel}>
                        <RiSeedlingLine size={14} color="#000" />
                        주일 찬양예배 기도
                      </span>
                    }
                    tail={basicList.다음주예배위원.주일낮예배기도.value}
                  />
                  <DashFlexList
                    part2
                    className={styles.nextWeekList}
                    label={
                      <span className={styles.nextWeekLabel}>
                        <RiSeedlingLine size={14} color="#000" />
                        삼일 수요 기도
                      </span>
                    }
                    tail={basicList.다음주예배위원.수요예배기도.value}
                  />
                  <DashFlexList
                    part2
                    className={styles.nextWeekList}
                    label={
                      <span className={styles.nextWeekLabel}>
                        <RiSeedlingLine size={14} color="#000" />
                        금요 철야 기도
                      </span>
                    }
                    tail={basicList.다음주예배위원.금요예배기도.value}
                  />
                  <DashFlexList
                    part2
                    className={styles.nextWeekList}
                    label={
                      <span className={styles.nextWeekLabel}>
                        <RiSeedlingLine size={14} color="#000" />
                        새벽 기도
                      </span>
                    }
                    tail="황 맹례 권사"
                  />
                  <DashFlexList
                    part2
                    className={styles.nextWeekList}
                    label={
                      <span className={styles.nextWeekLabel}>
                        <RiSeedlingLine size={14} color="#000" />
                        헌금 위원
                      </span>
                    }
                    tail="황 맹심 전도사"
                  />
                  <DashFlexList
                    part2
                    className={styles.nextWeekList}
                    label={
                      <span className={styles.nextWeekLabel}>
                        <RiSeedlingLine size={14} color="#000" />
                        다음주 특송
                      </span>
                    }
                    tail={basicList.다음주예배위원.특송.value}
                  />
                </div>
                {/* E :  다음주 예배 위원 */}
              </div>
            </div>
            <div className={styles.dawnWorship}>
              <p>
                <RiSunLine size={13} color="#000" />
                새벽 기도 -------- 매일 오전 5:00시 / 황 우기 목사 (대표 기도 : 황 맹례 권사)
              </p>
              <p>
                "내가 새벽을 꺠우리로다"(시편 57:8) &#60;히.12 : 13 ~ 13:16~22&#62; 강해 설교<br/>
              </p>
            </div>
          </Container>
          {/* E : rightSide */}
        </div>
        {/* E : 뒷면 */}
        
        {/* S : 앞면 */}
        <div className={styles.page}>
          {/* S : leftSide */}
          <Container type="leftSide" className={styles.notice}>
            <div>
              <div className={styles.title}>
                <RiCrossLine size={20} color="#000" />
                <span>교회 소식</span>
                <RiCrossLine size={20} color="#000" />
              </div>
              <div className={styles.desc}>"하나님은 당신을 사랑하십니다."</div>
              <ol className={styles.noticeLIst}>
              <li>
                <span>1.</span>
                <span>
                  영광교회를 처음 찾아주신 형제 자매님을 진심으로 환영합니다.
                </span>
              </li>
              <li>
                <span>2.</span>
                <span>
                  금년은 한 사람이 2명이상 전도하여 교회를 채웁시다.
                </span>
              </li>
              <li>
                <span>3.</span>
                <span>
                  전도 목표 : 장년 50명, 청년 20명, 중고등부 10명 씩, 초등부 20, 유치부가 세워질 수 있도록 기도하면서 전도하시길 바랍니다.
                </span>
              </li>
              <li>
                <span>4.</span>
                <span>
                  환난을 당한 성도나 교회에 보이지 않는 성도들을 위해 기도하시고 찾아가 위로와 권면이 있으시길 바랍니다.
                </span>
              </li>
                {notice.map((el, idx) => {
                   return (<li key={idx}>
                    <span>{idx + 5}.</span>
                    <span>{el}</span>
                  </li>)
                })}
            </ol>
            </div>

            <div className={styles.bibleWord}>
              <p>"너는 말씀을 전파하라. 때를 얻는지 못 얻든지 항상 힘쓰라." (딤후.4:2)</p>
              <p>"여호와는 내게 복을 주시고 너를 지키시기를 원하며<br />여호와는 그 얼굴로 내게 비취사 은혜 베푸시기를 원하며<br />여호와는 그 얼굴로 네게로 향하여 드사 평강주시기를 원하노라." (민.6:24~26)</p>
            </div>
            
            <div>
              <div className={styles.title}>
                <RiCrossLine size={20} color="#000" />
                <span>기도 제목</span>
                <RiCrossLine size={20} color="#000" />
              </div>
              <ol className={styles.noticeLIst}>
                <li>
                  <span>1.</span>
                  <span>
                    나라와 민족을 위해서 대통령과 국무위원을 위해서 해외의 선교사님을 위해서 기도해 주시기 바랍니다.
                  </span>
                </li>
                <li>
                  <span>2.</span>
                  <span>
                    해외에서 선교하시는 선교사님들을 위해서 기도해 주시길 바랍니다.
                  </span>
                </li>
                <li>
                  <span>3.</span>
                  <span>
                    영광교회와 담임 목사님을 위해서 이웃의 믿지않는 영혼들을 위해 기도해 주시길 바랍니다.
                  </span>
                </li>
                <li>
                  <span>4.</span>
                  <span>
                    영광교회 주변의 믿지 않는 불신자들을 위해서 기도해 주시길 바랍니다.
                  </span>
                </li>
              </ol>
              <div className={styles.worshipTime}>
                <div className={styles.worshipTimeTitle}>예배시간 안내</div>
                <div>
                  <p>주일 낮 예배 - 오전 11:00</p>
                  <p>주일 찬양 예배 - 오후 2:00</p>
                </div>
                <div>
                  <p>수요 기도회 - 오후 7:00</p>
                  <p>새벽 기도회 - (매일) 오전 5:00</p>
                </div>
                <div>
                  <p>유 초등부 - (주일) 오전 9:00</p>
                  <p>중 고등부 - (주일) 오후 4:30</p>
                </div>
                <div>
                  <p>청 년 부 - (토) 오후 7:00</p>
                  <p>금요 철야 기도회 - 오후 7:00</p>
                </div>
              </div>
            </div>
          </Container>
          {/* E : leftSide */}

          {/* S : rightSide */}
          <Container type="rightSide" className={styles.frontRightSide}>
            <div className={styles.date}>
                <p>{today}</p>
                <p>설립일 2005.11.23</p>
            </div>
            <div>
              <div className={styles.churchName}>
                <span>대한예수교 장로회</span>
                <p>영광 교회</p>
              </div>
              <div className={styles.slogan}>
                표어 : 위에서 부르신 부름의 상을 위하여
              </div>
            </div>
            <div className={styles.goal}>
              <div>목표 : </div>
              <div className="">
                <p><RiAwardFill size={22} color="#000" />말씀 중심</p>
                <p><RiAwardFill size={22} color="#000" />교회 중심</p>
                <p><RiAwardFill size={22} color="#000" />기도 중심</p>
              </div>
            </div>
            <div className={styles.memberInfo}>
              <p>담임 목사 : 황 우기 목사 (H.P 010-7196-9433)</p>
              <p>전도사 : 황 맹심 전도사 (H.P 010-7588-2148)</p>
              <p>교회 : TEL 032-423-0691</p>
              <p>주소 : 인천광역시 남동수 간석1동 901-8호 3층</p>
            </div>
          </Container>
          {/* E : rightSide */}
        </div>
        {/* E : 뒷면 */}
      </div>
    </>
  );
};

export default BaseLIst;
