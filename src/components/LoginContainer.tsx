import './HomeContainer.css';
import { IonButton, IonRouterLink, IonInput, IonItem, IonLabel,useIonAlert, IonCard, IonCardContent, IonText, IonIcon, useIonLoading} from '@ionic/react';
import {useState} from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";
import { setUserSession } from '../js/Common';
// import { Router } from '@ionic/router';
interface ContainerProps { }
const LoginContainer: React.FC<ContainerProps> = () => {
  const history = useHistory();
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  // const [ token, setToken ] = useState('');
  const [ presentAlert ] = useIonAlert();
  const [present, dismiss] = useIonLoading();
  function LoginFrom(){
    // console.log(username);
    present({
        message: 'Loading...',
        spinner: 'circles'
    });
    if (!username) {
        presentAlert({
          header: 'Lỗi',
          message: 'Vui lòng nhập tài khoản',
          buttons: ['OK'],
        })
    }
    else if (!password) {
        presentAlert({
          header: 'Lỗi',
          message: 'Vui lòng nhập mật khẩu',
          buttons: ['OK'],
        })
    }
    const loginData = {
      "name": username,
      "password": password
  }

  const api = axios.create({
      baseURL: "https://dev.cam.eclo.io/user"
  })
  api.post("/login", loginData).then(res => {     
    if(res.data.status=='403'){ 
      dismiss();
      presentAlert({
        header: 'Lỗi',
        message: res.data.message,
        buttons: ['OK'],
      });
    }
    else if(res.data.status=='200'){
      console.log(res.data.accessToken);
      dismiss();
      setUserSession(res.data.accessToken);
      // localStorage.setItem("token", res.data.token);
      history.push("/Home");
    }
  }).catch(error=>{
    dismiss();
     presentAlert({
        header: 'Lỗi',
        message: 'không thể kết nối đến máy chủ',
        buttons: ['OK'],
      })
  })
    
  }
  return (
    <div className="container text-center">
      <IonIcon icon="assets/eclo.svg" size="large" className="logo mb-2 mt-5" />
      <IonCard className="Welcome">
        <IonCardContent className="text-center p-0">
          <IonText color="dark" className="text-center fw-bold pt-1 mb-3 fs-2 d-block">Đăng nhập</IonText>
          <p>Vui lòng đăng nhập để sử dụng ứng dụng này.</p>
          <div className="p-0 mb-4 pt-0">
            <IonItem className="from-controll">
              <IonLabel position="floating">Email / Số điện thoại</IonLabel>
              <IonInput placeholder="Email  / Số điện thoại" onIonChange={(e:any) => setUsername(e.target.value)}></IonInput>
            </IonItem>
            <IonItem className="from-controll">
              <IonLabel position="floating">Mật khẩu</IonLabel>
              <IonInput placeholder="Mật khẩu" type="password" onIonChange={(e:any) => setPassword(e.target.value)}></IonInput>
            </IonItem>
          </div>
          <div className="ps-4 pe-4 pb-2 pt-2">
            <IonButton onClick={LoginFrom}  shape="round" expand="block">Đăng nhập</IonButton>
            <IonRouterLink className="fw-bold mt-4 d-block " routerLink="/Register">Tôi chưa có tài khoản</IonRouterLink>
            <IonRouterLink className="fw-bold mt-4 d-block " routerLink="/Forgot-Password">Quên mật khẩu?</IonRouterLink>
          </div>
        </IonCardContent>
      </IonCard>
      <div className="copyright" style={{marginTop: "40px"}}>
        © 2023 Bản quyền và thiết kế bởi ECLO CO.,LTD
      </div>
    </div>
  );
};

export default LoginContainer;
