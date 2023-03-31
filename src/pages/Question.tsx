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
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import { caretDownCircle } from "ionicons/icons";

const Question = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Câu hỏi thường gặp</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonLabel className="p-3 text-center ">
          <p className=" fw-bold lh-sm" style={{color: "#05179f", fontSize:"1.2em"}}>
            Hệ thống nhận diện khuôn mặt ECLO mang lại những lợi ích gì?
          </p>
        </IonLabel>

        <IonAccordionGroup className="px-2">
          <IonAccordion
            className=" border border-2 rounded-3"
            value="1"
            toggleIcon={caretDownCircle}
          >
            <IonItem slot="header" color="red" className="bg-item">
              <b style={{ fontSize: "1em" }} className="py-3">
                Hệ thống hoạt động như thế nào?
              </b>
            </IonItem>
            <div
              className="ion-padding"
              slot="content"
              style={{ textAlign: "justify", fontSize: "0.9em" }}
            >
              Hệ thống nhận diện khuôn mặt hoạt động bằng cách sử dụng các thuật
              toán máy học để phân tích và so sánh các đặc trưng trên khuôn mặt
              của một cá nhân với các dữ liệu mẫu được lưu trữ trước đó trong hệ
              thống.
            </div>
          </IonAccordion>
          <IonAccordion
            className=" border border-2  rounded-3 mt-3"
            value="2"
            toggleIcon={caretDownCircle}
          >
            <IonItem slot="header" color="red" className="bg-item">
              <b style={{ fontSize: "1em" }} className="py-3">
                Hệ thống có độ chính xác cao không?
              </b>
            </IonItem>
            <div
              className="ion-padding"
              slot="content"
              style={{ textAlign: "justify", fontSize: "0.9em" }}
            >
              Tùy thuộc vào chất lượng dữ liệu và phương pháp huấn luyện mà hệ
              thống có độ chính xác khác nhau. Tuy nhiên, trong điều kiện lý
              tưởng và với dữ liệu đủ chất lượng, hệ thống nhận diện khuôn mặt
              có thể đạt độ chính xác rất cao.
            </div>
          </IonAccordion>
          <IonAccordion
            className=" border border-2 rounded-3 mt-3"
            value="3"
            toggleIcon={caretDownCircle}
          >
            <IonItem slot="header" color="red" className="bg-item">
              <b
                style={{ fontSize: "1em", lineHeight: "1.5em" }}
                className="py-3"
              >
                Hệ thống có thể phân biệt giữa các cá nhân cùng một gia đình hay
                không?
              </b>
            </IonItem>
            <div
              className="ion-padding"
              slot="content"
              style={{ textAlign: "justify", fontSize: "0.9em" }}
            >
              Tùy thuộc vào độ tương đồng giữa các khuôn mặt trong cùng một gia
              đình. Nếu các khuôn mặt khác nhau đủ lớn về mặt đặc trưng, hệ
              thống nhận diện khuôn mặt có thể phân biệt được giữa các cá nhân
              trong cùng một gia đình.
            </div>
          </IonAccordion>
          <IonAccordion
            className=" border border-2 rounded-3 mt-3"
            value="4"
            toggleIcon={caretDownCircle}
          >
            <IonItem slot="header" color="red" className="bg-item">
              <b
                style={{ fontSize: "1em", lineHeight: "1.5em" }}
                className="py-3"
              >
                Hệ thống có an toàn và đảm bảo quyền riêng tư không?
              </b>
            </IonItem>
            <div
              className="ion-padding"
              slot="content"
              style={{ textAlign: "justify", fontSize: "0.9em" }}
            >
              Việc đảm bảo an toàn và quyền riêng tư phụ thuộc vào cách thức xử
              lý và bảo vệ dữ liệu. Tuy nhiên, việc sử dụng hệ thống nhận diện
              khuôn mặt có thể đặt ra nhiều thách thức về quyền riêng tư và an
              ninh, và cần được quản lý và bảo vệ đúng cách.
            </div>
          </IonAccordion>
          <IonAccordion
            className=" border border-2 rounded-3 mt-3"
            value="5"
            toggleIcon={caretDownCircle}
          >
            <IonItem slot="header" color="red" className="bg-item">
              <b
                style={{ fontSize: "1em", lineHeight: "1.5em" }}
                className="py-3"
              >
                Hệ thống mang lại những lợi ích gì ?
              </b>
            </IonItem>
            <div
              className="ion-padding"
              slot="content"
              style={{ textAlign: "justify", fontSize: "0.9em" }}
            >
              Hệ thống nhận diện khuôn mặt có nhiều ứng dụng khác nhau trong
              cuộc sống hàng ngày, bao gồm đăng nhập vào các hệ thống, giám sát
              an ninh, quản lý dân số, nhận diện khách hàng tiềm năng, và ứng
              dụng trong lĩnh vực y tế.
            </div>
          </IonAccordion>
          <IonAccordion
            className=" border border-2 rounded-3 mt-3"
            value="6"
            toggleIcon={caretDownCircle}
          >
            <IonItem slot="header" color="red" className="bg-item">
              <b
                style={{ fontSize: "1em", lineHeight: "1.5em" }}
                className="py-3"
              >
                Hệ thống có thể được sử dụng để giám sát nhân viên trong công ty
                không?
              </b>
            </IonItem>
            <div
              className="ion-padding"
              slot="content"
              style={{ textAlign: "justify", fontSize: "0.9em" }}
            >
              Hệ thống nhận diện khuôn mặt có thể được sử dụng để giám sát hoạt
              động của nhân viên trong công ty, như đăng nhập vào hệ thống, kiểm
              tra thời gian làm việc, hoặc giám sát an ninh.
            </div>
          </IonAccordion>
          <IonAccordion
            className=" border border-2 rounded-3 mt-3"
            value="7"
            toggleIcon={caretDownCircle}
          >
            <IonItem slot="header" color="red" className="bg-item">
              <b
                style={{ fontSize: "1em", lineHeight: "1.5em" }}
                className="py-3"
              >
                Chi phí để sử dụng hệ thống này là bao nhiêu?
              </b>
            </IonItem>
            <div
              className="ion-padding"
              slot="content"
              style={{ textAlign: "justify", fontSize: "0.9em" }}
            >
              Chi phí để sở hữu hệ thống này tùy thuộc vào nhiều yếu tố như công
              nghệ, độ phân giải, độ phức tạp...
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
};

export default Question;
