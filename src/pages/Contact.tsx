import {
  createAnimation,
  IonAccordion,
  IonAccordionGroup,
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
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
import { callSharp, locationSharp, mailOutline, mailSharp, phoneLandscapeOutline } from "ionicons/icons";

const Contact = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Liên hệ với chúng tôi</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
      <div className="fs-5 text-dark mt-3 fw-bold text-center"> CÔNG TY TNHH ECLO</div>
        <IonCard className="rounded-4 border border-2 border-bottom-0">
          <IonCardContent className=" p-3 text-center "
          style={{
            color: "rgb(7 47 158)",
            fontWeight: "550",
            fontSize: "0.9em",
            backgroundColor:"#e5e7f6"
          }}>
          ECLO có những chuyên viên kỹ thuật và chăm sóc khách hàng luôn tận tâm
          trong việc tư vấn và hỗ trợ khách hàng, chỉ cần bạn hỏi chúng tôi sẽ
          trả lời và tư vấn bạn mọi lúc.
          </IonCardContent>
        </IonCard>

        <div className="px-3 text-secondary" style={{fontWeight:"550"}}>
           
            <div className="mt-3">Địa chỉ:</div>
            <IonRow className="ps-2">
              <IonCol className="text-center">
                <IonIcon
                  icon={locationSharp}
                  style={{
                    fontSize: "1.5em",
                    marginBottom: 1,
                    color: "#bb0024",
                  }}
                ></IonIcon>
              </IonCol>
              <IonCol size="10">54 Bàu Cát 6, phường 14, quận Tân Bình, TP.HCM</IonCol>
            </IonRow>
            
            <div className="mt-3">Số điện thoại:</div>
            <IonRow className="ps-2">
              <IonCol className="text-center">
                <IonIcon
                  icon={callSharp}
                  style={{
                    fontSize: "1.5em",
                    marginBottom: 1,
                    color: "#228B22",
                  }}
                ></IonIcon>
              </IonCol>
              <IonCol size="10">02862 802 696</IonCol>
            </IonRow>
            <IonRow className="ps-2">
              <IonCol className="text-center">
                <IonIcon
                  icon={callSharp}
                  style={{
                    fontSize: "1.5em",
                    marginBottom: 1,
                    color: "#228B22",
                  }}
                ></IonIcon>
              </IonCol>
              <IonCol size="10">0903 679 678</IonCol>
            </IonRow>
            <IonRow className="ps-2">
              <IonCol className="text-center">
                <IonIcon
                  icon={callSharp}
                  style={{
                    fontSize: "1.5em",
                    marginBottom: 1,
                    color: "#228B22",
                  }}
                ></IonIcon>
              </IonCol>
              <IonCol size="10">0938 987 888</IonCol>
            </IonRow>
            <div className="mt-3">Email:</div>
            <IonRow className="ps-2">
              <IonCol className="text-center">
                <IonIcon
                  icon={mailOutline}
                  style={{
                    fontSize: "1.5em",
                    marginBottom: 1,
                    color: "rgb(31 27 137)",
                  }}
                ></IonIcon>
              </IonCol>
              <IonCol size="10">info@eclo.vn</IonCol>
            </IonRow>
            <IonRow className="ps-2">
              <IonCol className="text-center">
                <IonIcon
                  icon={mailOutline}
                  style={{
                    fontSize: "1.5em",
                    marginBottom: 1,
                    color: "rgb(31 27 137)",
                  }}
                ></IonIcon>
              </IonCol>
              <IonCol size="10">support@eclo.vn</IonCol>
            </IonRow>
            <IonRow className="ps-2">
              <IonCol className="text-center">
                <IonIcon
                  icon={mailOutline}
                  style={{
                    fontSize: "1.5em",
                    marginBottom: 1,
                    color: "rgb(31 27 137)",
                  }}
                ></IonIcon>
              </IonCol>
              <IonCol size="10">sales@eclo.vn</IonCol>
            </IonRow>
            </div>
      </IonContent>
    </IonPage>
  );
};

export default Contact;
