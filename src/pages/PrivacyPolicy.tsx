import {
    createAnimation,
    IonAccordion,
    IonAccordionGroup,
    IonAvatar,
    IonBackButton,
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

  const PrivacyPolicy = () => {
    
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton></IonBackButton>
            </IonButtons>
            <IonTitle>Chính sách bảo mật</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent fullscreen>
        Chính sách bảo mật
        </IonContent>
      </IonPage>
    );
  };
  
  export default PrivacyPolicy;
  