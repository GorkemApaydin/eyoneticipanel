import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonButton,
  IonInput,
  IonList,
  IonToast
} from "@ionic/react";

import "./girisIos.css"


const GirisIos: React.FC = () => {
  document.title = "Giriş | E-Yönetici"

  const [kullaniciKodu, setKullaniciKodu] = useState("");
  const [sifre, setSifre] = useState("");
  const [showToast, setShowToast] = useState(false);

  const history = useHistory()
  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      history.push("/panel")
    } else {
      history.push("/index")
    }
  })

  async function login() {
    console.log(kullaniciKodu + " + " + sifre)

    let raw = JSON.stringify({
      "key": "gb95Sjkecu5XtYYL",
      "kullaniciKodu": kullaniciKodu,
      "sifre": sifre,
      "dil": "string"
    });

    fetch("https://e-yonetici.com.tr/api/Giris", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: raw
    }).then(response => {
      return response.json();
    }).then(responseData => {
      if (responseData.aciklama === "Giriş başarılı") {
        localStorage.setItem("user-info", responseData)
        history.push("/panel")
      } else {
        setShowToast(true)
      }
    })

    // localStorage.setItem("user-info", JSON.stringify(result))
    // history.push("/panel")

  }

  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard className="girisCard responsiveCard">
                <IonCardHeader>
                  <IonCardTitle>
                    <img
                      src="https://www.e-yonetici.com.tr/img/e-yonetici-logo.png"
                      alt="Logo"
                    />
                  </IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                  <IonList style={{borderRadius:"12px"}}>
                    <IonItem className="iosInputs">
                      <IonInput placeholder="Kullanıcı Kodu" required onIonChange={(e: any) => setKullaniciKodu(e.target.value)}></IonInput>
                      </IonItem>
                      <IonItem className="iosInputs">
                      <IonInput placeholder="Şifre" required onIonChange={(e: any) => setSifre(e.target.value)} type="password"></IonInput>
                    </IonItem>
                  </IonList>
                  <br />
                  <IonButton onClick={login} color="primary" className="loginButton">Giriş Yap</IonButton>
                  <br /><br />
                  <p>Şifremi Unuttum</p>
                  <IonToast
                    isOpen={showToast}
                    color="danger"
                    onDidDismiss={() => setShowToast(false)}
                    message="Kullanıcı Kodu veya Şifreniz Yanlış"
                    duration={3000}
                  />
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}


export default GirisIos;
