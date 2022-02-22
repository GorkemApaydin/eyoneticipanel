import './ExploreContainer.css';
import {useHistory} from "react-router-dom"
import {useEffect} from "react"

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {

  function cikis() {
    localStorage.removeItem("user-info");
    window.location.href="/index"

  }

  const history = useHistory()

  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      history.push("/panel")
    } else {
      history.push("/index")
    }
  })

  
    return (
      <div className="container">
        <strong>E-Yönetici'ye Hoşgeldiniz!</strong>
        <p><button onClick={cikis}>Çıkış Yap</button></p>
      </div>
    )
};

export default ExploreContainer;
