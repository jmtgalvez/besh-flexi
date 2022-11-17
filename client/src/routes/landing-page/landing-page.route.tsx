import {Navigation} from "../../components";
import {layout, styleBanner1, styleDiv1, styleFigure1} from "./styles";
import {ReactComponent as BannerLogo} from "../../assets/svg/logo-no-background.svg";

export default function LandingPage() {
  return (
    <main className={layout}>
      <Navigation />
      <div className={styleDiv1}>
        <figure className={styleFigure1}>
          <BannerLogo className={styleBanner1} />
        </figure>
      </div>
    </main>
  );
}
