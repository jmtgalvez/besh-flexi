import {Link} from "react-router-dom";
import Logo from "../../assets/image/logo.png";

export default function Navigation() {
  return (
    <nav className="w-[100%] h-auto flex justify-between items-center p-2 min-h-[max-content]">
      <header className="grid place-content-center">
        <figure className="w-[50px] h-auto">
          <img src={Logo} alt="Besh logo" />
        </figure>
      </header>
      <div className="grid place-content-center">
        <Link
          to="/"
          className="p-2 font-semibold bg-pallette1 text-pallette2 rounded-lg hover:bg-pallette3 ease-out duration-300"
        >
          Home
        </Link>
      </div>
    </nav>
  );
}
