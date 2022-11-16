import React, {useState} from "react";
import {IonContent, IonPage, IonSelectOption, IonSelect, IonImg, IonButton} from "@ionic/react";
import "./Main.css";
import condoLogo from "../../assets/condo-logo.png";
import homeImg from "../../assets/home.png";
import nappleLogo from "../../assets/napple-logo.png";

const Main = () => {
  const [status, setStatus] = useState("");

  const handleClick = e => {
    setStatus(e);
  };

  const handleChange = e => {
    debugger;
    setStatus(e);
  };

  return (
    <IonPage id="home-page">
      {status === "salesperson" && (
        <IonContent className="ion-padding text-center">
          <IonImg src={homeImg} alt="Home"></IonImg>
          <h1>
            Welcome to <span>CMS Condo</span>
          </h1>
          <IonButton routerLink={`/customer`}>Client Registration</IonButton>
          <IonButton routerLink={`/customer`}>Broker Registration</IonButton>
        </IonContent>
      )}
      {status === "" && (
        <IonContent className="ion-padding text-center">
          <h1>Select Your Desired Community</h1>
          <div className="condoLogo" onClick={() => handleClick("selectCondo")}>
            <IonImg src={condoLogo} alt="Home"></IonImg>
            <h1>CMS Condo</h1>
          </div>
          <div className="nappleLogo" onClick={() => handleClick("selectTownhomes")}>
            <IonImg src={nappleLogo} alt="Home"></IonImg>
            <h1>CMS Townhomes</h1>
          </div>
        </IonContent>
      )}
      {status === "selectCondo" && (
        <IonContent className="ion-padding text-center">
          <IonImg src={homeImg} alt="Home"></IonImg>
          <h1>
            Welcome to <span>CMS Condo</span>
          </h1>
          <div className="selectPerson">
            <div>Select a sales person </div>
            <div>
              <IonSelect placeholder="Please select" ionChange={handleChange}>
                <IonSelectOption value="Next Up">Next Up</IonSelectOption>
                <IonSelectOption value="Mike Banson">Mike Banson</IonSelectOption>
                <IonSelectOption value="Claudia">Claudia</IonSelectOption>
              </IonSelect>
            </div>
          </div>
        </IonContent>
      )}
      {status === "selectTownhomes" && (
        <IonContent className="ion-padding text-center">
          <IonImg src={nappleLogo} alt="Home"></IonImg>
          <h1>
            Welcome to <span>CMS Townhomes</span>
          </h1>
          <IonButton routerLink={`/customer`}>Client Registration</IonButton>
          <IonButton routerLink={`/customer`}>Broker Registration</IonButton>
        </IonContent>
      )}
    </IonPage>
  );
};

export default Main;
