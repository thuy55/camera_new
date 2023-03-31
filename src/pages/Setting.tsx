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
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  alertCircleOutline,
  arrowForwardOutline,
  closeOutline,
  helpCircleOutline,
  helpOutline,
  keyOutline,
  lockClosedOutline,
  mailOpenOutline,
  person,
  personOutline,
} from "ionicons/icons";
import { getCardStyle } from "../js/utils";
import { getPolls } from "../js/Selectors";
import { PollStore } from "../js/PollStore";
// import styles from "../theme/Area.module.scss";
// import "../theme/Setting.css";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  useRef,
  useState,
} from "react";
import { add } from "ionicons/icons";
import { Link } from "react-router-dom";
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
          <IonTitle>Cài đặt</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonItem
          button
          detail={true}
          className=" mt-3"
          id="open-modal-account"
          onClick={openModal}
        >
          <IonAvatar>
            <IonIcon
              icon={personOutline}
              color="tertiary"
              size="large"
              style={{
                marginBottom: 1,
              }}
            ></IonIcon>
          </IonAvatar>
          <IonCardHeader className="py-4 ps-2">
            <IonCardTitle className="title-setting">Tài khoản</IonCardTitle>
          </IonCardHeader>
        </IonItem>

        <IonItem button detail={true} id="open-modal-update">
          <IonAvatar>
            <IonIcon
              icon={keyOutline}
              color="tertiary"
              size="large"
              style={{
                marginBottom: 1,
              }}
            ></IonIcon>
          </IonAvatar>
          <IonCardHeader className="py-4 ps-2">
            <IonCardTitle className="title-setting">Đổi mật khẩu</IonCardTitle>
          </IonCardHeader>
        </IonItem>
        <Link to="/page/InfomationCamera" style={{textDecoration: "none"}}>
          <IonItem button detail={true} className="">
            <IonAvatar>
              <IonIcon
                icon={alertCircleOutline}
                color="tertiary"
                size="large"
                style={{
                  marginBottom: 1,
                }}
              ></IonIcon>
            </IonAvatar>
            <IonCardHeader className="py-4 ps-2">
              <IonCardTitle className="title-setting">
                Thông tin về ECLO Camera
              </IonCardTitle>
            </IonCardHeader>
          </IonItem>
        </Link>
        <Link to="/page/PrivacyPolicy" style={{textDecoration: "none"}}>
        <IonItem button detail={true} className="">
          <IonAvatar>
            <IonIcon
              icon={lockClosedOutline}
              color="tertiary"
              size="large"
              style={{
                marginBottom: 1,
              }}
            ></IonIcon>
          </IonAvatar>
          <IonCardHeader className="py-4 ps-2">
            <IonCardTitle className="title-setting">
              Chính sách bảo mật
            </IonCardTitle>
          </IonCardHeader>
        </IonItem>
        </Link>
        <Link to="/page/Question" style={{textDecoration: "none"}}>
        <IonItem button detail={true} className="">
          <IonAvatar>
            <IonIcon
              icon={helpCircleOutline}
              color="tertiary"
              size="large"
              style={{
                marginBottom: 1,
              }}
            ></IonIcon>
          </IonAvatar>
          <IonCardHeader className="py-4 ps-2">
            <IonCardTitle className="title-setting">
              Câu hỏi thường gặp ?
            </IonCardTitle>{" "}
            <IonCardSubtitle></IonCardSubtitle>
          </IonCardHeader>
        </IonItem>
        </Link>
        <Link to="/page/Contact" style={{textDecoration: "none"}}>
        <IonItem button detail={true} className="">
          <IonAvatar>
            <IonIcon
              icon={mailOpenOutline}
              color="tertiary"
              size="large"
              style={{
                marginBottom: 1,
              }}
            ></IonIcon>
          </IonAvatar>
          <IonCardHeader className="py-4 ps-2">
            <IonCardTitle className="title-setting">
              Liên hệ với chúng tôi
            </IonCardTitle>
          </IonCardHeader>
        </IonItem>
        </Link>
        <IonRow className="justify-content-center d-flex mt-3">
          <IonButton className="fw-bold w-75 fs-6" color="tertiary">
            ĐĂNG XUẤT
          </IonButton>
        </IonRow>
      </IonContent>

      <IonModal
        ref={modal}
        isOpen={isOpen}
        trigger="open-modal-account"
        enterAnimation={enterAnimation}
        leaveAnimation={leaveAnimation}
        style={{ alignItems: "start" }}
        className="overflow-hidden h-75 border border-3 rounded-4 mt-2"
      >
        <IonContent className="overflow-hidden ">
          <IonToolbar>
            <IonTitle
              color={"antiquewhite"}
              style={{ textAlign: "center" }}
              className="fw-bolder fs-3"
            >
              Tài khoản
            </IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={closeModal}>
                <IonIcon color={"white"} icon={closeOutline}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
          <IonList className="p-2 mx-1 rounded-3 pb-2 list-account">
            <div className=" d-flex justify-content-center mb-2">
              <IonAvatar slot="center" className="w-50 h-50 border border-2">
                <img
                  alt="Avatar"
                  src="https://timbaby.net/wp-content/uploads/2022/11/anh-avatar-dep-cho-con-gai.jpg"
                />
              </IonAvatar>
            </div>

            <IonRow className="align-items-center">
              <IonCol className=" text-secondary">Nhân viên:</IonCol>
              <IonCol size="8">
                <IonInput value="Nguyễn Thị Thanh Thúy"></IonInput>
              </IonCol>
            </IonRow>
            <IonRow className="align-items-center">
              <IonCol className=" text-secondary">Giới tính:</IonCol>
              <IonCol size="8">
                <IonSelect
                  className="ps-2 py-1 bg-white border border-2"
                  value={1}
                >
                  <IonSelectOption value={0}>Nam</IonSelectOption>
                  <IonSelectOption value={1}>Nữ</IonSelectOption>
                </IonSelect>
              </IonCol>
            </IonRow>
            <IonRow className="align-items-center">
              <IonCol className=" text-secondary">Ngày sinh:</IonCol>
              <IonCol size="8">
                <IonInput
                  type="date"
                  className=" bg-white border border-2 py-0"
                  value="2000-05-05"
                ></IonInput>
              </IonCol>
            </IonRow>
            <IonRow className="align-items-center">
              <IonCol className=" text-secondary">Số điện thoại:</IonCol>
              <IonCol size="8">
                <IonInput value="0334838641"></IonInput>
              </IonCol>
            </IonRow>
            <IonRow className="align-items-center">
              <IonCol className=" text-secondary">Email:</IonCol>
              <IonCol size="8">
                <IonTextarea
                  className="p-0"
                  value="thuynguyen.050500@gmail.com"
                ></IonTextarea>
              </IonCol>
            </IonRow>
          </IonList>
          <IonRow class="mt-2">
            <IonCol className="justify-content-center d-flex">
              <IonButton
                className="fw-bold w-75"
                color="medium"
                onClick={closeModal}
              >
                CANCEL
              </IonButton>
            </IonCol>
            <IonCol className="justify-content-center d-flex">
              <IonButton className="fw-bold w-75" color="primary">
                SỬA
              </IonButton>
            </IonCol>
          </IonRow>
        </IonContent>
      </IonModal>
      <IonModal
        id="example-modal"
        ref={modal}
        trigger="open-modal-update"
        enterAnimation={enterAnimation}
        leaveAnimation={leaveAnimation}
        style={{ alignItems: "start" }}
        className="overflow-hidden h-75 border border-3 rounded-4 mt-2"
      >
        <IonContent className="overflow-hidden ">
          <IonToolbar>
            <IonTitle
              color={"antiquewhite"}
              style={{ textAlign: "center" }}
              className="fw-bolder fs-3"
            >
              Đổi mật khẩu
            </IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => dismiss()}>
                <IonIcon color={"white"} icon={closeOutline}></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
          <IonList className="p-3">
            <IonLabel>Nhập mật khẩu cũ :</IonLabel>
            <IonItem fill="outline" className="mt-2 mb-3">
              <IonInput
                className="ps-3"
                id="passwordold"
                type="password"
                placeholder="******"
              ></IonInput>
            </IonItem>
            <IonLabel>Nhập mật khẩu mới :</IonLabel>
            <IonItem fill="outline" className="mt-2 mb-3">
              <IonInput
                className="ps-3"
                type="password"
                placeholder="******"
              ></IonInput>
            </IonItem>
            <IonLabel>Nhập lại mật khẩu mới :</IonLabel>
            <IonItem fill="outline" className="mt-2 mb-3">
              <IonInput
                className="ps-3"
                type="password"
                placeholder="******"
              ></IonInput>
            </IonItem>
          </IonList>
          <IonRow class="mt-2">
            <IonCol className="justify-content-center d-flex">
              <IonButton
                onClick={() => dismiss()}
                color="medium"
                style={{ width: "110px" }}
              >
                CANCEL
              </IonButton>
            </IonCol>
            <IonCol className="justify-content-center d-flex">
              <IonButton className="fw-bold w-75" color="primary">
                CẬP NHẬT
              </IonButton>
            </IonCol>
          </IonRow>
        </IonContent>
      </IonModal>
    </IonPage>
  );
};

export default Area;
