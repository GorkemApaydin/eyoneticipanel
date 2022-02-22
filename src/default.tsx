import { isPlatform } from '@ionic/react';
import Girisdesktop from "./pages/giris/girisDesktop"
import GirisIos from "./pages/giris/girisIos"
import GirisAndroid from "./pages/giris/girisAndroid"

/* Theme variables */
import './theme/variables.css';


const Default: React.FC = () => {
  if (isPlatform("ios")) {
    return (
      <GirisIos />
    )
  }

  else if (isPlatform("android")) {
    return (
      <GirisAndroid />
    )
  }

  else if (isPlatform("desktop")) {
    return (
      <Girisdesktop />
    )
  }

  else {
    return (
      <div>Cihazınız E-Yönetici İle Uyumlu Değil. Lütfen, Anroid, IOS veya Desktop işletim sistemli bir cihazla giriş yapınız.</div>
    )
  }
}


export default Default;
