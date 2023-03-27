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
          <IonTitle>Nhân sự</IonTitle>
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
              SỬA NHÂN SỰ
            </IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={closeModal}>
                <IonIcon color={"white"} icon={closeOutline}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
          <IonList className="p-3">
            <div className=" d-flex justify-content-center mb-2">
              <IonAvatar slot="center" className="w-50 h-50 border border-2">
                <img
                  alt="Avatar"
                  src="https://timbaby.net/wp-content/uploads/2022/11/anh-avatar-dep-cho-con-gai.jpg"
                />
              </IonAvatar>
            </div>
            <IonLabel>
              Tên <b className="text-danger">*</b> :
            </IonLabel>
            <IonItem fill="outline" className="mt-2 mb-2">
              <IonInput id="passwordold" placeholder="Khu vực"></IonInput>
            </IonItem>
            <IonLabel>
              Mã nhân viên <b className="text-danger">*</b> :
            </IonLabel>
            <IonItem fill="outline" className="mt-2 mb-2">
              <IonInput id="passwordold" placeholder="Địa chỉ"></IonInput>
            </IonItem>
            <IonLabel>
              Dự án <b className="text-danger">*</b> :
            </IonLabel>
            <IonItem fill="outline" className="mt-2 mb-2">
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
              Khu vực <b className="text-danger">*</b> :
            </IonLabel>
            <IonItem fill="outline" className="mt-2 mb-2">
              <IonSelect
                className="select-name w-100 me-0"
                color="primary"
                slot="start"
                interface="popover"
                placeholder="Dự án"
              >
                <IonSelectOption value="0">Tầng 1</IonSelectOption>
                <IonSelectOption value="1">Tầng trệt</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonLabel>
              Loại<b className="text-danger">*</b> :
            </IonLabel>
            <IonItem fill="outline" className="mt-2 mb-2">
              <IonSelect
                className="select-name w-100 me-0"
                color="primary"
                slot="start"
                interface="popover"
                placeholder="Dự án"
              >
                <IonSelectOption value="0">Nhân viên</IonSelectOption>
                <IonSelectOption value="1">Khách hàng</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonLabel>
              Trạng thái <b className="text-danger">*</b> :
            </IonLabel>
            <IonItem fill="outline" className="mt-2 mb-2">
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
                  CẬP NHẬT
                </IonButton>
              </IonCol>
            </IonRow>
          </IonList>
        </IonContent>
      </IonModal>
      {/* <IonFooter className="ion-padding-bottom"> */}

      <IonFab slot="fixed" vertical="bottom" horizontal="end">
        <IonFabButton id="open-modal" onClick={openModal}>
          <IonIcon icon={add}></IonIcon>
        </IonFabButton>
      </IonFab>

      <IonModal
        id="example-modal"
        ref={modal}
        isOpen={isOpen}
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
              THÊM NHÂN SỰ
            </IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={closeModal}>
                <IonIcon color={"white"} icon={closeOutline}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
          <IonList className="p-3">
            <div className=" d-flex justify-content-center mb-2">
              <IonAvatar slot="center" className="w-50 h-50 border border-2">
                <img
                  alt="Avatar"
                  src="https://timbaby.net/wp-content/uploads/2022/11/anh-avatar-dep-cho-con-gai.jpg"
                />
              </IonAvatar>
            </div>
            <IonLabel>
              Tên <b className="text-danger">*</b> :
            </IonLabel>
            <IonItem fill="outline" className="mt-2 mb-2">
              <IonInput id="passwordold" placeholder="Khu vực"></IonInput>
            </IonItem>
            <IonLabel>
              Mã nhân viên <b className="text-danger">*</b> :
            </IonLabel>
            <IonItem fill="outline" className="mt-2 mb-2">
              <IonInput id="passwordold" placeholder="Địa chỉ"></IonInput>
            </IonItem>
            <IonLabel>
              Dự án <b className="text-danger">*</b> :
            </IonLabel>
            <IonItem fill="outline" className="mt-2 mb-2">
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
              Khu vực <b className="text-danger">*</b> :
            </IonLabel>
            <IonItem fill="outline" className="mt-2 mb-2">
              <IonSelect
                className="select-name w-100 me-0"
                color="primary"
                slot="start"
                interface="popover"
                placeholder="Dự án"
              >
                <IonSelectOption value="0">Tầng 1</IonSelectOption>
                <IonSelectOption value="1">Tầng trệt</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonLabel>
              Loại<b className="text-danger">*</b> :
            </IonLabel>
            <IonItem fill="outline" className="mt-2 mb-2">
              <IonSelect
                className="select-name w-100 me-0"
                color="primary"
                slot="start"
                interface="popover"
                placeholder="Dự án"
              >
                <IonSelectOption value="0">Nhân viên</IonSelectOption>
                <IonSelectOption value="1">Khách hàng</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonLabel>
              Trạng thái <b className="text-danger">*</b> :
            </IonLabel>
            <IonItem fill="outline" className="mt-2 mb-2">
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
                  THÊM NHÂN SỰ
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
