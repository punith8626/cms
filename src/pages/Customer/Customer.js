import React, {useState, useEffect} from "react";
import {
  IonButton,
  IonContent,
  IonPage,
  IonList,
  IonItem,
  IonInput,
  IonImg,
  IonCheckbox,
  IonLabel
} from "@ionic/react";
import nappleLogo from "../../assets/napple-logo.png";
import "./Customer.css";

const Customer = () => {
  const [status, setStatus] = useState("");

  const handleFirstVisit = e => {
    setStatus(e);
  };

  useEffect(() => {
    setStatus("");
  }, []);

  return (
    <>
      <IonPage id="home-page">
        <div className="logo">
          <IonButton routerLink={`/home`}>
            <IonImg src={nappleLogo} alt="Home"></IonImg>
          </IonButton>
        </div>
        <IonContent className="ion-padding text-center">
          {status === "" && (
            <>
              <h1>
                Is this your <span>First Visit</span> ?
              </h1>
              <IonButton
                onClick={() => {
                  handleFirstVisit("firstTimeVisit");
                }}>
                Yes
              </IonButton>
              <IonButton
                onClick={() => {
                  handleFirstVisit("notFirstTimeVisit");
                }}>
                No
              </IonButton>
            </>
          )}
          {status === "firstTimeVisit" && (
            <>
              <h1>
                Are you working with a <span>Broker</span> ?
              </h1>
              <IonButton
                onClick={() => {
                  handleFirstVisit("yesPresent");
                }}>
                Yes - Present
              </IonButton>
              <IonButton
                onClick={() => {
                  handleFirstVisit("yesNotPresent");
                }}>
                Yes - Not Present
              </IonButton>
              <IonButton
                onClick={() => {
                  handleFirstVisit("No");
                }}>
                No
              </IonButton>
            </>
          )}

          {status === "notFirstTimeVisit" && (
            <>
              <h1>
                Welcome!
                <br />
                Let us find you.
                <br />
                What is <span> Your Name</span> ?
              </h1>
              <IonList>
                <IonItem>
                  <IonInput placeholder="First Name" required></IonInput>
                </IonItem>

                <IonItem>
                  <IonInput placeholder="Last Name"></IonInput>
                </IonItem>
              </IonList>
              <IonButton
                onClick={() => {
                  handleFirstVisit("find");
                }}>
                Find
              </IonButton>
            </>
          )}

          {status === "find" && (
            <>
              <h1>
                Welcome!
                <br />
                No user Found
              </h1>

              <IonButton
                onClick={() => {
                  handleFirstVisit("");
                }}>
                back
              </IonButton>
            </>
          )}

          {status === "yesPresent" && (
            <>
              <h1>
                Thanks for visiting
                <span> CMS Townhomes</span> !
              </h1>
              <h2>Tell us about yourself...</h2>
              <div>
                <h1>
                  What is <span>Your Name</span> and <span> Email</span>?
                </h1>
                <IonList>
                  <IonItem>
                    <IonInput placeholder="First Name" required></IonInput>
                  </IonItem>

                  <IonItem>
                    <IonInput placeholder="Last Name"></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonInput placeholder="Email"></IonInput>
                  </IonItem>
                </IonList>
              </div>
              <div>
                <h1>
                  Where do you <span>Live</span> ?
                </h1>
                <IonList>
                  <IonItem>
                    <IonInput placeholder="Street"></IonInput>
                  </IonItem>

                  <IonItem>
                    <IonInput placeholder="Zip"></IonInput>
                  </IonItem>
                </IonList>
              </div>

              <div>
                <h1>
                  How can we Contact <span>You?</span>
                </h1>
                <IonList>
                  <IonItem>
                    <IonInput placeholder="Cell Phone"></IonInput>
                  </IonItem>

                  <IonItem>
                    <IonInput placeholder="Work Phone"></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonInput placeholder="Home Phone"></IonInput>
                  </IonItem>
                </IonList>
              </div>
              <IonButton
                onClick={() => {
                  handleFirstVisit("AfterRegister");
                }}>
                Next
              </IonButton>
            </>
          )}

          {status === "AfterRegister" && (
            <>
              <div>
                <h1>
                  How did you hear about
                  <span> us</span>?
                </h1>
                <IonItem>
                  <IonCheckbox slot="start"></IonCheckbox>
                  <IonLabel>Airport</IonLabel>
                </IonItem>
                <IonItem>
                  <IonCheckbox slot="start"></IonCheckbox>
                  <IonLabel>Billboard</IonLabel>
                </IonItem>

                <IonItem>
                  <IonCheckbox slot="start"></IonCheckbox>
                  <IonLabel>Direct Mail</IonLabel>
                </IonItem>
                <IonItem>
                  <IonCheckbox slot="start"></IonCheckbox>
                  <IonLabel>Drive By</IonLabel>
                </IonItem>
                <IonItem>
                  <IonCheckbox slot="start"></IonCheckbox>
                  <IonLabel>Eblast</IonLabel>
                </IonItem>
                <IonItem>
                  <IonCheckbox slot="start"></IonCheckbox>
                  <IonLabel>Internet</IonLabel>
                </IonItem>
              </div>

              <IonButton
                onClick={() => {
                  handleFirstVisit("typeofhome");
                }}>
                Next
              </IonButton>
            </>
          )}

          {status === "typeofhome" && (
            <>
              <div>
                <h1>
                  What type of home are
                  <span> you looking for </span>?
                </h1>
                <IonItem>
                  <IonCheckbox slot="start"></IonCheckbox>
                  <IonLabel>Studio</IonLabel>
                </IonItem>
                <IonItem>
                  <IonCheckbox slot="start"></IonCheckbox>
                  <IonLabel>1 Bedroom</IonLabel>
                </IonItem>

                <IonItem>
                  <IonCheckbox slot="start"></IonCheckbox>
                  <IonLabel>2 Bedrooms</IonLabel>
                </IonItem>
                <IonItem>
                  <IonCheckbox slot="start"></IonCheckbox>
                  <IonLabel>3 Bedrooms</IonLabel>
                </IonItem>
                <IonItem>
                  <IonCheckbox slot="start"></IonCheckbox>
                  <IonLabel>4 Bedrooms</IonLabel>
                </IonItem>
                <IonItem>
                  <IonCheckbox slot="start"></IonCheckbox>
                  <IonLabel>5+ Bedrooms</IonLabel>
                </IonItem>
              </div>

              <IonButton
                onClick={() => {
                  handleFirstVisit("whatisurbudget");
                }}>
                Next
              </IonButton>
            </>
          )}

          {status === "whatisurbudget" && (
            <>
              <div>
                <h1>
                  What is
                  <span> your budget? </span>
                </h1>
                <IonItem>
                  <IonCheckbox slot="start"></IonCheckbox>
                  <IonLabel>less than $250k</IonLabel>
                </IonItem>
                <IonItem>
                  <IonCheckbox slot="start"></IonCheckbox>
                  <IonLabel>$250k - $350k</IonLabel>
                </IonItem>

                <IonItem>
                  <IonCheckbox slot="start"></IonCheckbox>
                  <IonLabel>$350k - $500k</IonLabel>
                </IonItem>
                <IonItem>
                  <IonCheckbox slot="start"></IonCheckbox>
                  <IonLabel>$500k - $750k</IonLabel>
                </IonItem>
                <IonItem>
                  <IonCheckbox slot="start"></IonCheckbox>
                  <IonLabel>$750k - $1m</IonLabel>
                </IonItem>
                <IonItem>
                  <IonCheckbox slot="start"></IonCheckbox>
                  <IonLabel> > $1m</IonLabel>
                </IonItem>
              </div>

              <IonButton
                onClick={() => {
                  handleFirstVisit("occupation");
                }}>
                Next
              </IonButton>
            </>
          )}

          {status === "occupation" && (
            <>
              <div>
                <h1>
                  What is your
                  <span> Occupation? </span>
                </h1>
              </div>
              <IonItem>
                <IonInput placeholder="Occupation" required></IonInput>
              </IonItem>

              <IonButton
                onClick={() => {
                  handleFirstVisit("planneduse");
                }}>
                Next
              </IonButton>
            </>
          )}
          {status === "planneduse" && (
            <>
              <div>
                <h1>
                  What is your
                  <span> Planned Use? </span>
                </h1>
              </div>
              <IonItem>
                <IonInput placeholder="Planned Use" required></IonInput>
              </IonItem>

              <IonButton
                onClick={() => {
                  handleFirstVisit("agerange");
                }}>
                Next
              </IonButton>
            </>
          )}
          {status === "agerange" && (
            <>
              <div>
                <h1>
                  What is your
                  <span> Age Range? </span>
                </h1>
              </div>
              <IonItem>
                <IonInput placeholder="Age Range" required></IonInput>
              </IonItem>

              <IonButton
                onClick={() => {
                  handleFirstVisit("amenities");
                }}>
                Next
              </IonButton>
            </>
          )}
          {status === "amenities" && (
            <>
              <div>
                <h1>
                  What <span> Amenities</span> are you interested in?
                </h1>
              </div>
              <IonItem>
                <IonCheckbox slot="start"></IonCheckbox>
                <IonLabel>Balcony</IonLabel>
              </IonItem>

              <IonButton
                onClick={() => {
                  handleFirstVisit("interests");
                }}>
                Next
              </IonButton>
            </>
          )}
          {status === "interests" && (
            <>
              <div>
                <h1>
                  What are your <span>Personal Interests?</span>
                </h1>
              </div>
              <IonItem>
                <IonInput placeholder="Interests" required></IonInput>
              </IonItem>

              <IonButton
                onClick={() => {
                  handleFirstVisit("Finish");
                }}>
                Finish
              </IonButton>
            </>
          )}
          {status === "Finish" && (
            <>
              <div>
                <h1>Thank you for visiting us</h1>
              </div>
            </>
          )}
        </IonContent>
      </IonPage>
    </>
  );
};

export default Customer;
