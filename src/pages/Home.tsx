import React from "react";
import {
  IonSlides,
  IonSlide,
  IonContent,
  IonHeader,
  IonPage,
  IonMenuButton,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonIcon,
} from "@ionic/react";
import {
  cameraOutline,
  earthOutline,
  locationOutline,
  peopleOutline,
  saveOutline,
  serverOutline,
  settingsOutline,
} from "ionicons/icons";
import "../theme/Meals.css";
import { Link } from "react-router-dom";
const slideOpts = {
  initialSlide: 1,
  speed: 400,
};

const Home: React.FC = () => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Home</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonSlides pager={true} options={slideOpts}>
        <IonSlide>
          <IonCard>
            <img
              src="https://cdn.tgdd.vn/Products/Images/4728/285251/camera-ip-ngoai-troi-3mp-ezviz-c3tn-trang-thumb-600x600.jpg"
              alt=""
            />
          </IonCard>
        </IonSlide>
        <IonSlide>
          <IonCard className="rounded-3 border border-2 shardow-sm">
            <img
              src="https://cdn.tgdd.vn/Products/Images/4728/285251/camera-ip-ngoai-troi-3mp-ezviz-c3tn-trang-thumb-600x600.jpg"
              alt=""
            />
          </IonCard>
        </IonSlide>
        <IonSlide>
          <img
            src="https://cdn.tgdd.vn/Products/Images/4728/285251/camera-ip-ngoai-troi-3mp-ezviz-c3tn-trang-thumb-600x600.jpg"
            alt=""
          />
        </IonSlide>
      </IonSlides>
      <IonGrid className="list-home">
        <IonRow className="list-row">
          <IonCol className="test">
            <Link to={"/page/Project"} style={{textDecoration: "none"}}>
              <IonCard
                className="card-grid-dashboard item-list-dashboard"
                button
              >
                <IonCardContent className="card-content-grid">
                  <IonIcon
                    icon={serverOutline}
                    size="large"
                    style={{
                      marginBottom: 1,
                      color: "#4B0082",
                      
                    }}
                  ></IonIcon>
                  <h6 className="fw-bold text-black text-center" >Dự Án</h6>
                </IonCardContent>
              </IonCard>
            </Link>
          </IonCol>
          <IonCol className="test">
            <Link to={"/page/Area"} style={{textDecoration: "none"}}>
              <IonCard
                className="card-grid-dashboard item-list-dashboard"
                button
              >
                <IonCardContent className="card-content-grid">
                  <IonIcon
                    icon={earthOutline}
                    size="large"
                    color="tertiary"
                    style={{
                      marginBottom: 1,
                      color: "#FF1493",
                      
                    }}
                  ></IonIcon>
                  <h6  className="fw-bold text-black text-center">Khu Vực</h6>
                </IonCardContent>
              </IonCard>
            </Link>
          </IonCol>
        </IonRow>
        <IonRow className="list-row">
          <IonCol className="test">
            <Link to="/page/People" style={{textDecoration: "none"}}>
            <IonCard className="card-grid-dashboard item-list-dashboard" button>
              <IonCardContent className="card-content-grid">
                <IonIcon
                  icon={peopleOutline}
                  size="large"
                  style={{
                    marginBottom: 1,
                    color: "#A52A2A",
                    
                  }}
                ></IonIcon>
                <h6  className="fw-bold text-black text-center">Nhân Sự</h6>
              </IonCardContent>
            </IonCard>
            </Link>
          </IonCol>
          <IonCol className="test">
          <Link to={"/page/Logs"} style={{textDecoration: "none"}}>
            <IonCard className="card-grid-dashboard item-list-dashboard" button>
              <IonCardContent className="card-content-grid">
                <IonIcon
                  icon={saveOutline}
                  size="large"
                  style={{
                    marginBottom: 1,
                    color: "#228B22",
                    
                  }}
                ></IonIcon>
                <h6  className="fw-bold text-black text-center">Lịch sử nhận diện</h6>
              </IonCardContent>
            </IonCard>
            </Link>
          </IonCol>
        </IonRow>
        <IonRow className="list-row">
          <IonCol className="test">
          <Link to={"/page/ListCam"} style={{textDecoration: "none"}}>
            <IonCard className="card-grid-dashboard item-list-dashboard" button>
              <IonCardContent className="card-content-grid">
                <IonIcon
                  icon={cameraOutline}
                  size="large"
                 
                  style={{
                    marginBottom: 1,
                    color: "#800080",
                    
                  }}
                ></IonIcon>
                <h6  className="fw-bold text-black text-center mt-1">Danh Sách Camera</h6>
              </IonCardContent>
            </IonCard>
            </Link>
          </IonCol>
          <IonCol className="test">
          <Link to={"/page/Setting"} style={{textDecoration: "none"}}>
            <IonCard className="card-grid-dashboard item-list-dashboard" button>
              <IonCardContent className="card-content-grid">
                <IonIcon
                  icon={settingsOutline}
                  size="large"
                  color="dark"
                  className="text-center"
                  style={{
                    marginBottom: 1, color: "#FF1493",
                    // 
                  }}
                ></IonIcon>
                <h6  className="fw-bold text-black text-center">Cài đặt</h6>
              </IonCardContent>
            </IonCard>
            </Link>
          </IonCol>
        </IonRow>
        <div className="copyright" style={{ marginTop: "40px" }}>
          © 2023 Bản quyền và thiết kế bởi ECLO CO.,LTD
        </div>
      </IonGrid>
    </IonContent>
  </IonPage>
);
export default Home;
