import {
    createAnimation,
    IonAccordion,
    IonAccordionGroup,
    IonAvatar,
    IonButton,
    IonButtons,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCol,
    IonContent,
    IonFab,
    IonFabButton,
    IonFooter,
    IonHeader,
    IonIcon,
    IonImg,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonMenuButton,
    IonModal,
    IonPage,
    IonRow,
    IonSelect,
    IonSelectOption,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
  import { arrowForwardOutline, closeOutline } from "ionicons/icons";
  import { getCardStyle } from "../js/utils";
  import { getPolls } from "../js/Selectors";
  import { PollStore } from "../js/PollStore";
  import styles from "../theme/Area.module.scss";
  import "../theme/People.css";
  import {
    ReactElement,
    JSXElementConstructor,
    ReactFragment,
    ReactPortal,
    useRef,
    useState,
  } from "react";
  import { add } from "ionicons/icons";
  const Log = () => {
    const modal = useRef<HTMLIonModalElement>(null);
    const [isOpen, setIsOpen] = useState(false);
  
    const openModal = () => {
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };
    const polls = PollStore.useState(getPolls);
    function dismiss() {
      modal.current?.dismiss();
    }
    const enterAnimation = (baseEl: HTMLElement) => {
      const root = baseEl.shadowRoot;
  
      const backdropAnimation = createAnimation()
        .addElement(root?.querySelector("ion-backdrop")!)
        .fromTo("opacity", "0.01", "var(--backdrop-opacity)");
  
      const wrapperAnimation = createAnimation()
        .addElement(root?.querySelector(".modal-wrapper")!)
        .keyframes([
          { offset: 0, opacity: "0", transform: "scale(0)" },
          { offset: 1, opacity: "0.99", transform: "scale(1)" },
        ]);
  
      return createAnimation()
        .addElement(baseEl)
        .easing("ease-out")
        .duration(500)
        .addAnimation([backdropAnimation, wrapperAnimation]);
    };
  
    const leaveAnimation = (baseEl: HTMLElement) => {
      return enterAnimation(baseEl).direction("reverse");
    };
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Lịch sử nhận diện</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent fullscreen>
  
  
          <IonAccordionGroup className="mt-3 mx-2">
            <IonAccordion value="1" className="mt-3 acc">
              <IonItem slot="header" color="red" className="item-project">
                {/* <div className="item-count bg-color-green">K</div> */}
                <IonAvatar slot="start" className="avatar_ns">
                  <img
                    alt="Avatar"
                    src="https://timbaby.net/wp-content/uploads/2022/11/anh-avatar-dep-cho-con-gai.jpg"
                  />
                </IonAvatar>
                <IonLabel className="fw-bold">
                  <p style={{ fontSize: "17px" }}>Nguyễn Thị Thanh Thúy</p>
                  <p className="mt-2 text-secondary">Loại: Nhân Viên</p>
                </IonLabel>
              </IonItem>
              <div className="ion-padding p-0 pe-2" slot="content">
                <ol id="accordion" className="rounded-list accordion">
                  <li>
                    <ol>
                      <li>
                        <p className="link">
                          <IonRow className="row text-align-center">
                            <IonCol>
                              <IonLabel className="lable-name">
                                Dự án:
                              </IonLabel>
                            </IonCol>
                            <IonCol size="8" className="nd">
                             ECLO
                            </IonCol>
                          </IonRow>
                        </p>
                      </li>
                      <li>
                        <p className="link">
                          <IonRow className="row text-align-center">
                            <IonCol>
                              <IonLabel className="lable-name">Khu vực :</IonLabel>
                            </IonCol>
                            <IonCol size="8" className="nd">
                             Lầu 1
                            </IonCol>
                          </IonRow>
                        </p>
                      </li>
                      <li>
                        <p className="link">
                          <IonRow className="row text-align-center">
                            <IonCol>
                              <IonLabel className="lable-name">Thiết bị:</IonLabel>
                            </IonCol>
                            <IonCol size="8" className="nd">
                            Cam 1
                            </IonCol>
                          </IonRow>
                        </p>
                      </li>
                      <li>
                        <p className="link">
                          <IonRow className="row text-align-center">
                            <IonCol>
                              <IonLabel className="lable-name">Thời gian:</IonLabel>
                            </IonCol>
                            <IonCol size="8" className="nd">
                            28/03/23 13:40:26
                            </IonCol>
                          </IonRow>
                        </p>
                      </li>
                      <li style={{height:"250px"}}>
                        <p className="link">
                          <IonRow className="row justify-content-center d-flex">
                             <img src="https://phunugioi.com/wp-content/uploads/2020/01/anh-avatar-supreme-dep-lam-dai-dien-facebook.jpg" style={{width:"90%", height:"220px"}}></img>
                          </IonRow>
                        </p>
                      </li>
                    </ol>
                  </li>
                </ol>
              </div>
            </IonAccordion>
          </IonAccordionGroup>
          <IonAccordionGroup className="mt-3 mx-2">
            <IonAccordion value="1" className="mt-3 acc">
              <IonItem slot="header" color="red" className="item-project">
                {/* <div className="item-count bg-color-green">K</div> */}
                <IonAvatar slot="start" className="avatar_ns">
                  <img
                    alt="Avatar"
                    src="https://timbaby.net/wp-content/uploads/2022/11/anh-avatar-dep-cho-con-gai.jpg"
                  />
                </IonAvatar>
                <IonLabel className="fw-bold">
                  <p style={{ fontSize: "17px" }}>Nguyễn Thị Thanh Thúy</p>
                  <p className="mt-2 text-secondary">Loại: Nhân Viên</p>
                </IonLabel>
              </IonItem>
              <div className="ion-padding p-0 pe-2" slot="content">
                <ol id="accordion" className="rounded-list accordion">
                  <li>
                    <ol>
                      <li>
                        <p className="link">
                          <IonRow className="row text-align-center">
                            <IonCol>
                              <IonLabel className="lable-name">
                                Họ và tên:
                              </IonLabel>
                            </IonCol>
                            <IonCol size="8" className="nd">
                              Nguyễn hị Thanh Thúy
                            </IonCol>
                          </IonRow>
                        </p>
                      </li>
                      <li>
                        <p className="link">
                          <IonRow className="row text-align-center">
                            <IonCol>
                              <IonLabel className="lable-name">Loại :</IonLabel>
                            </IonCol>
                            <IonCol size="8" className="nd">
                              Nhân viên
                            </IonCol>
                          </IonRow>
                        </p>
                      </li>
                      <li>
                        <p className="link">
                          <IonRow className="row text-align-center">
                            <IonCol>
                              <IonLabel className="lable-name">Dự án:</IonLabel>
                            </IonCol>
                            <IonCol size="8" className="nd">
                              Camera tầng 1 công ty Eclo
                            </IonCol>
                          </IonRow>
                        </p>
                      </li>
                      <li>
                        <p className="link">
                          <IonRow className="row text-align-center">
                            <IonCol>
                              <IonLabel className="lable-name">Khu vực:</IonLabel>
                            </IonCol>
                            <IonCol size="8" className="nd">
                              Tầng 1
                            </IonCol>
                          </IonRow>
                        </p>
                      </li>
                      <li>
                        <p className="link">
                          <IonRow className="row text-align-center">
                            <IonCol>
                              <IonLabel className="lable-name">
                                Trạng thái :
                              </IonLabel>
                            </IonCol>
                            <IonCol size="8" className="nd">
                              Hoạt động
                            </IonCol>
                          </IonRow>
                        </p>
                      </li>
                    </ol>
                  </li>
                </ol>
                <div className="row d-flex justify-content-center mt-3 mb-2 ">
                  <IonButton
                    className="fw-bold w-50"
                    size="small"
                    color="primary"
                    id="open-modal-update"
                    onClick={openModal}
                  >
                    Sửa
                  </IonButton>
                </div>
              </div>
            </IonAccordion>
          </IonAccordionGroup>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Log;
  