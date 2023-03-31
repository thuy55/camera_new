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

const Page = () => {
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
          <IonTitle>Dự Án</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Dự Án</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonAccordionGroup className="mt-3 mx-2">
          <IonAccordion value="1" className="mt-3 acc">
            <IonItem slot="header" color="red" className="item-project">
              <div className="item-count bg-color-green">D</div>
              <IonLabel className="fw-bold">
                <p style={{ fontSize: "17px" }}>Camera tầng 1 công ty Eclo</p>
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
                            Camera tầng 1 công ty Eclo
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Công ty khách hàng :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            Công ty ECLO
                          </IonCol>
                        </IonRow>{" "}
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">Bắt đầu:</IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            27/03/2023
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Kết thúc:
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            27/05/2023
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
                  Sửa dự án
                </IonButton>
              </div>
            </div>
          </IonAccordion>
        </IonAccordionGroup>
        <IonAccordionGroup className="mt-3 mx-2">
          <IonAccordion value="1" className="mt-3 acc">
            <IonItem slot="header" color="red" className="item-project">
              <div className="item-count bg-color-green">D</div>
              <IonLabel className="fw-bold">
                <p style={{ fontSize: "17px" }}>Camera tầng 1 công ty Eclo</p>
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
                            Camera tầng 1 công ty Eclo
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Công ty khách hàng :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            Công ty ECLO
                          </IonCol>
                        </IonRow>{" "}
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">Bắt đầu:</IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            27/03/2023
                          </IonCol>
                        </IonRow>
                      </p>
                    </li>
                    <li>
                      <p className="link">
                        <IonRow className="row text-align-center">
                          <IonCol>
                            <IonLabel className="lable-name">
                              Kết thúc:
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            27/05/2023
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
                  Sửa dự án
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
        style={{ alignItems: "start" }}
        className="overflow-hidden"
      >
        <IonContent className="overflow-hidden">
          <IonToolbar>
            <IonTitle
              color={"white"}
              style={{ textAlign: "start" }}
              className="fw-bolder fs-3"
            >
              SỬA DỰ ÁN
            </IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={closeModal}>
                <IonIcon color={"white"} icon={closeOutline}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
          <IonList className="p-3">
            <IonLabel>
              Tên dự án <b className="text-danger">*</b> :
            </IonLabel>
            <IonItem fill="outline" className="mt-2 mb-3">
              <IonInput id="passwordold" placeholder="Tên dự án"></IonInput>
            </IonItem>
            <IonLabel>
              Công ty khách hàng <b className="text-danger">*</b> :
            </IonLabel>
            <IonItem fill="outline" className="mt-2 mb-3">
              <IonSelect
                className="select-name w-100 me-0"
                color="primary"
                slot="start"
                interface="popover"
                placeholder="Công ty khách hàng"
              >
                <IonSelectOption value="0">ECLO tầng 1</IonSelectOption>
                <IonSelectOption value="1">ECLO tầng trệt</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonLabel>
              Ngày bắt đầu <b className="text-danger">*</b> :
            </IonLabel>
            <IonItem fill="outline" className="mt-2 mb-3">
              <IonInput type="date"></IonInput>
            </IonItem>
            <IonLabel>
              Ngày kết thúc <b className="text-danger">*</b> :
            </IonLabel>
            <IonItem fill="outline" className="mt-2 mb-3">
              <IonInput type="date"></IonInput>
            </IonItem>
            <IonLabel>
              Trạng thái <b className="text-danger">*</b> :
            </IonLabel>
            <IonItem fill="outline" className="mt-2 mb-3">
              <IonSelect
                className="select-name w-100  me-0"
                color="primary"
                slot="start"
                interface="popover"
                placeholder="trạng thái"
              >
                <IonSelectOption value="0">Kích hoạt</IonSelectOption>
                <IonSelectOption value="1">Không kích hoạt</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonRow class="mt-4">
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
                  SỬA DỰ ÁN
                </IonButton>
              </IonCol>
            </IonRow>
          </IonList>
        </IonContent>
      </IonModal>
      <IonFab slot="fixed" vertical="bottom" horizontal="end">
        <IonFabButton id="open-modals">
          <IonIcon icon={add}></IonIcon>
        </IonFabButton>
      </IonFab>

      <IonModal
        id="example-modal"
        ref={modal}
        trigger="open-modals"
        enterAnimation={enterAnimation}
        leaveAnimation={leaveAnimation}
        style={{ alignItems: "start" }}
        className="overflow-hidden"
      >
        <IonContent className="overflow-hidden">
          <IonToolbar>
            <IonTitle
              color={"white"}
              style={{ textAlign: "start" }}
              className="fw-bolder fs-3"
            >
              THÊM DỰ ÁN
            </IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => dismiss()}>
                <IonIcon color={"white"} icon={closeOutline}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
          <IonList className="p-3">
            <IonLabel>
              Tên dự án <b className="text-danger">*</b> :
            </IonLabel>
            <IonItem fill="outline" className="mt-2 mb-3">
              <IonInput id="passwordold" placeholder="Tên dự án"></IonInput>
            </IonItem>
            <IonLabel>
              Công ty khách hàng <b className="text-danger">*</b> :
            </IonLabel>
            <IonItem fill="outline" className="mt-2 mb-3">
              <IonSelect
                className="select-name w-100 me-0"
                color="primary"
                slot="start"
                interface="popover"
                placeholder="Công ty khách hàng"
              >
                <IonSelectOption value="0">ECLO tầng 1</IonSelectOption>
                <IonSelectOption value="1">ECLO tầng trệt</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonLabel>
              Ngày bắt đầu <b className="text-danger">*</b> :
            </IonLabel>
            <IonItem fill="outline" className="mt-2 mb-3">
              <IonInput type="date"></IonInput>
            </IonItem>
            <IonLabel>
              Ngày kết thúc <b className="text-danger">*</b> :
            </IonLabel>
            <IonItem fill="outline" className="mt-2 mb-3">
              <IonInput type="date"></IonInput>
            </IonItem>
            <IonLabel>
              Trạng thái <b className="text-danger">*</b> :
            </IonLabel>
            <IonItem fill="outline" className="mt-2 mb-3">
              <IonSelect
                className="select-name w-100  me-0"
                color="primary"
                slot="start"
                interface="popover"
                placeholder="trạng thái"
              >
                <IonSelectOption value="0">Kích hoạt</IonSelectOption>
                <IonSelectOption value="1">Không kích hoạt</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonRow class="mt-4">
              <IonCol className="justify-content-center d-flex">
                <IonButton
                  className="fw-bold w-75"
                  onClick={() => dismiss()}
                  color="medium"
                >
                  HỦY
                </IonButton>
              </IonCol>
              <IonCol className="justify-content-center d-flex">
                <IonButton className="fw-bold w-75" color="primary">
                  THÊM DỰ ÁN
                </IonButton>
              </IonCol>
            </IonRow>
          </IonList>

          {/* </form> */}
          {/* </div>
          </div> */}
        </IonContent>
      </IonModal>
    </IonPage>
  );
};

export default Page;
