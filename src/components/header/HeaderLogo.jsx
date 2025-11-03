import Logo from "../../assets/logo.svg"

function HeaderLogo() {
  return (
    <div className="flex items-center">
      <img src={Logo} className="h-10" />
    </div>
  );
}

export default HeaderLogo;
