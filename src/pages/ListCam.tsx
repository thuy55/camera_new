import {
  IonButtons,
  IonItem,
  IonLabel,
  IonCol,
  IonGrid,
  IonModal,
  createAnimation,
  IonRow,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonFab,
  IonFabButton,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCardHeader,
  IonCardTitle,
  IonCard,
  IonCardSubtitle,
  IonButton,
  IonInput,
  IonList,
  IonSelect,
  IonSelectOption,
  IonAccordionGroup,
  IonAccordion,
  IonCardContent,
  IonRadioGroup,
} from "@ionic/react";
import { useParams } from "react-router";
//   import ExploreContainer from "../components/";
import { add, arrowForwardOutline, closeOutline } from "ionicons/icons";
import "../theme/project.css";
import React, {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useRef,
  useState,
} from "react";
import { getCardStyle } from "../js/utils";
import { PollStore } from "../js/PollStore";
import { getPolls } from "../js/Selectors";
import styles from "../theme/Area.module.scss";

const ListCam = () => {
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
          <IonTitle>Danh sách Cam</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Danh sách Cam</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonAccordionGroup className="mt-3 mx-2">
          <IonAccordion value="1" className="mt-3 acc">
            <IonItem slot="header" color="red" className="item-project">
              <div className="item-count bg-color-green">C1</div>
              <IonLabel className="fw-bold">
                <p style={{ fontSize: "17px" }}>Camera 01</p>
                <p className="mt-2 text-secondary">Công ty ECLO</p>
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
                              Tên dự án:
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            Công ty Eclo
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Khu vực :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            Tầng 1
                          </IonCol>
                        </IonRow>{" "}
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Tên wifi:
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            ECLo
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Mật khẩu wifi:
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            www.eclo.vn
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
                          <IonCol
                            size="8"
                            className="nd"
                            style={{ color: "red" }}
                          >
                            Chưa kích hoạt
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">IP:</IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            171.233.212.239
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
                  Tùy chỉnh
                </IonButton>
              </div>
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonContent>
      <IonModal
        id="example-modal"
        ref={modal}
        isOpen={isOpen}
        trigger="open-modal-update"
        enterAnimation={enterAnimation}
        leaveAnimation={leaveAnimation}
        style={{ alignItems: "start", marginTop: "10%" }}
        className="overflow-hidden h-50 rounded-4"
      >
        <IonContent className="overflow-hidden  border border-3">
          <IonToolbar>
            <IonTitle
              color={"white"}
              style={{ textAlign: "start" }}
              className="fw-bolder fs-3"
            >
              TÙY CHỈNH
            </IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={closeModal}>
                <IonIcon color={"white"} icon={closeOutline}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>

          <IonList className="p-3">
            <IonLabel>
              Cài đặt âm thanh <b className="text-danger">*</b> :
            </IonLabel>
            <IonItem fill="outline" className="mt-2 mb-3">
              <IonSelect
                className="select-name w-100 me-0"
                color="primary"
                slot="start"
                interface="popover"
                placeholder="Tắt âm thanh"
              >
                <IonSelectOption value="0">Tắt âm thanh</IonSelectOption>
                <IonSelectOption value="1">Bật âm thanh</IonSelectOption>
                <IonSelectOption value="1">Đổ chuông</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonRow>
              <IonCol className="me-2">
                <IonLabel>
                  Xoay cam <b className="text-danger">*</b> :
                </IonLabel>
                <IonItem fill="outline" className="mt-2 mb-3">
                  <IonSelect
                    className="select-name w-100  me-0"
                    color="primary"
                    slot="start"
                    interface="popover"
                    placeholder="0°"
                  >
                    <IonSelectOption value="0">0°</IonSelectOption>
                    <IonSelectOption value="1">180°</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonCol>
              <IonCol className="ms-2">
                <IonLabel>
                  Độ chỉnh xác <b className="text-danger">*</b> :
                </IonLabel>
                <IonItem fill="outline" className="mt-2 mb-3">
                  <IonSelect
                    className="select-name w-100  me-0"
                    color="primary"
                    slot="start"
                    interface="popover"
                    placeholder="Vừa"
                  >
                    <IonSelectOption value="0">Vừa</IonSelectOption>
                    <IonSelectOption value="1">Cao</IonSelectOption>
                    <IonSelectOption value="1">Rất cao</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow class="mt-2">
              <IonCol className="justify-content-center d-flex">
                <IonButton
                  className="fw-bold w-75"
                  onClick={closeModal}
                  color="medium"
                >
                  HỦY
                </IonButton>
              </IonCol>
              <IonCol className="justify-content-center d-flex">
                <IonButton className="fw-bold w-75" color="primary">
                  SỬA
                </IonButton>
              </IonCol>
            </IonRow>
          </IonList>
        </IonContent>
      </IonModal>
    </IonPage>
  );
};

export default ListCam;
