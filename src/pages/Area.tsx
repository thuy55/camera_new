import {
  createAnimation,
  IonAccordion,
  IonAccordionGroup,
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
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  useRef,
  useState,
} from "react";
import { add } from "ionicons/icons";
const Area = () => {
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
          <IonTitle>Khu Vực</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Khu Vực</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonAccordionGroup className="mt-3 mx-2">
          <IonAccordion value="1" className="mt-3 acc">
            <IonItem slot="header" color="red" className="item-project">
              <div className="item-count bg-color-green">K</div>
              <IonLabel className="fw-bold">
                <p style={{ fontSize: "17px" }}>Khu vực: Tầng 1</p>
                <p className="mt-2 text-secondary">
                  Dự án: Camera tầng 1 công ty Eclo
                </p>
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
                              Tên khu vực:
                            </IonLabel>
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
                              Địa chỉ :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            54 Bàu Cát 6, phường 14, Tân Bình
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
                  Sửa khu vực
                </IonButton>

               
              </div>
            </div>
          </IonAccordion>
        </IonAccordionGroup>
		<IonAccordionGroup className="mt-3 mx-2">
          <IonAccordion value="1" className="mt-3 acc">
            <IonItem slot="header" color="red" className="item-project">
              <div className="item-count bg-color-green">K</div>
              <IonLabel className="fw-bold">
                <p style={{ fontSize: "17px" }}>Khu vực: Tầng 1</p>
                <p className="mt-2 text-secondary">
                  Dự án: Camera tầng 1 công ty Eclo
                </p>
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
                              Tên khu vực:
                            </IonLabel>
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
                              Địa chỉ :
                            </IonLabel>
                          </IonCol>
                          <IonCol size="8" className="nd">
                            54 Bàu Cát 6, phường 14, Tân Bình
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
                  Sửa khu vực
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
                        SỬA KHU VỰC
                      </IonTitle>
                      <IonButtons slot="end">
                        <IonButton onClick={closeModal}>
                          <IonIcon
                            color={"white"}
                            icon={closeOutline}
                          ></IonIcon>
                        </IonButton>
                      </IonButtons>
                    </IonToolbar>
                    <IonList className="p-3">
                      <IonLabel>
                        Khu vực <b className="text-danger">*</b> :
                      </IonLabel>
                      <IonItem fill="outline" className="mt-2 mb-3">
                        <IonInput
                          id="passwordold"
                          placeholder="Khu vực"
                        ></IonInput>
                      </IonItem>
                      <IonLabel>
                        Địa chỉ <b className="text-danger">*</b> :
                      </IonLabel>
                      <IonItem fill="outline" className="mt-2 mb-3">
                        <IonInput
                          id="passwordold"
                          placeholder="Địa chỉ"
                        ></IonInput>
                      </IonItem>
                      <IonLabel>
                        Dự án <b className="text-danger">*</b> :
                      </IonLabel>
                      <IonItem fill="outline" className="mt-2 mb-3">
                        <IonSelect
                          className="select-name w-100 me-0"
                          color="primary"
                          slot="start"
                          interface="popover"
                          placeholder="Dự án"
                        >
                          <IonSelectOption value="0">
                            ECLO tầng 1
                          </IonSelectOption>
                          <IonSelectOption value="1">
                            ECLO tầng trệt
                          </IonSelectOption>
                        </IonSelect>
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
                          <IonSelectOption value="1">
                            Không kích hoạt
                          </IonSelectOption>
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
                            SỬA KHU VỰC
                          </IonButton>
                        </IonCol>
                      </IonRow>
                    </IonList>
                  </IonContent>
                </IonModal>
      {/* <IonFooter className="ion-padding-bottom"> */}

      <IonFab slot="fixed" vertical="bottom" horizontal="end">
        <IonFabButton id="open-modal">
          <IonIcon icon={add}></IonIcon>
        </IonFabButton>
      </IonFab>

      <IonModal
        id="example-modal"
        ref={modal}
        trigger="open-modal"
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
              THÊM KHU VỰC
            </IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => dismiss()}>
                <IonIcon color={"white"} icon={closeOutline}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
          <IonList className="p-3">
            <IonLabel>
              Khu vực <b className="text-danger">*</b> :
            </IonLabel>
            <IonItem fill="outline" className="mt-2 mb-3">
              <IonInput id="passwordold" placeholder="Khu vực"></IonInput>
            </IonItem>
            <IonLabel>
              Địa chỉ <b className="text-danger">*</b> :
            </IonLabel>
            <IonItem fill="outline" className="mt-2 mb-3">
              <IonInput id="passwordold" placeholder="Địa chỉ"></IonInput>
            </IonItem>
            <IonLabel>
              Dự án <b className="text-danger">*</b> :
            </IonLabel>
            <IonItem fill="outline" className="mt-2 mb-3">
              <IonSelect
                className="select-name w-100 me-0"
                color="primary"
                slot="start"
                interface="popover"
                placeholder="Dự án"
              >
                <IonSelectOption value="0">ECLO tầng 1</IonSelectOption>
                <IonSelectOption value="1">ECLO tầng trệt</IonSelectOption>
              </IonSelect>
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
                  THÊM KHU VỰC
                </IonButton>
              </IonCol>
            </IonRow>
          </IonList>

         
        </IonContent>
      </IonModal>
     
    </IonPage>
  );
};

export default Area;
