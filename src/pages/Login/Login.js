import React, {useState} from "react";
import "./Login.css";
import {IonPage, IonButton, IonContent, IonInput, IonItem, IonLabel, IonList} from "@ionic/react";

const Login = () => {
  const [form, setForm] = useState({username: "", password: ""});
  const handleChange = e => {};

  const handleLogin = () => {};
  return (
    <IonPage id="login-page">
      <IonContent className="ion-padding text-center">
        <h1>CMS Registration</h1>
        <IonList>
          <IonItem>
            <IonLabel position="stacked">Username</IonLabel>
            <IonInput placeholder="Enter Username" onChange={handleChange}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Password</IonLabel>
            <IonInput placeholder="Enter Password"></IonInput>
          </IonItem>
          <IonButton routerLink={`/home`}>Login</IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Login;
