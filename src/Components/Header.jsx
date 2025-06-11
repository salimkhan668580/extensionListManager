import moonicon from "../assets/images/icon-moon.svg"
import logo from "../assets/images/logo.svg"
import sunicon from "../assets/images/icon-sun.svg"


function Header({theme,setTheme}) {
    
  return (
    <div className={`flex   ${theme=="light"?"bg-neutral-100":"bg-neutral-800"} rounded-2xl justify-between items-center p-4`} >
        <div>
<img
  src={logo}
  alt="Logo"
  className={`w-24 ${theme === "light" ? "bg-neutral-100" : "bg-neutral-800 invert"}`}
/>

        </div>
    <div
  className={`cursor-pointer rounded-full p-1
    focus:outline-none focus:ring-2 focus:ring-offset-2 
    ${theme === "light" ? "focus:ring-red-600 focus:ring-offset-white" : "focus:ring-red-500 focus:ring-offset-gray-800"}
  `}
  tabIndex={0}
  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
>
  {
    theme === "light"
      ? <img src={moonicon} alt="Moon Icon" />
      : <img src={sunicon} alt="Sun Icon" />
  }
</div>

    </div>

  )
}

export default Header