import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,

  IonMenu,
  IonMenuToggle,

} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { powerOutline,
  homeOutline, 
  cameraOutline, 
  homeSharp, 
  cameraSharp, 
  settingsOutline, 
  settingsSharp,
  serverOutline,
  serverSharp,
  earthOutline,
  earthSharp,
  peopleOutline,
  peopleSharp,
  saveOutline,
  saveSharp,


} from 'ionicons/icons';
// import './Menu.css';
import './Menu.css'


interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
  color: string;
}

const appPages: AppPage[] = [
  {
    title: 'Nhà',
    url: '/Home',
    iosIcon: homeOutline,
    mdIcon: homeSharp,
    color: "red"
  },
  {
    title: 'Dự án',
    url: '/page/Project',
    iosIcon: serverOutline,
    mdIcon: serverSharp,
    color: "red"
  },
  {
    title: 'Khu vực',
    url: '/page/Area',
    iosIcon: earthOutline,
    mdIcon: earthSharp,
    color: "red"
  },
  {
    title: 'Nhân sự',
    url: '/page/People',
    iosIcon: peopleOutline,
    mdIcon: peopleSharp,
    color: "red"
  },
  {
    title: 'Danh sách camera',
    url: '/page/ListCam',
    iosIcon: cameraOutline,
    mdIcon: cameraSharp,
    color: "red"
  },
  {
    title: 'Lịch sử nhận diện',
    url: '/page/Trash',
    iosIcon: saveOutline,
    mdIcon: saveSharp,
    color: "red"
  },
  {
    title: 'Cài đặt',
    url: '/page/Setting',
    iosIcon: settingsOutline,
    mdIcon: settingsSharp,
    color: "red"
  },
];

const labels = ['Log out'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">

          <div className="mt-4 mb-3">
          <div className="row">
            <div className="col-auto">
              <figure className='avatar avatar-60 border-0'>
                    <img src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg" alt="user" />   
                    {/* <IonImg  src="../../public/assets/img/home.png" alt="user"></IonImg> */}
              </figure>
            </div>
            <div className="col pl-0 align-self-center">
                <h5 className='mb-1'>Eclo</h5>
                <p className='text-mute small'>VietNam</p>
              </div>
          </div>
          </div>
       
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon aria-hidden="true" slot="start" icon={powerOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
