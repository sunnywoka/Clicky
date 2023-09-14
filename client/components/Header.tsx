function Header() {
  return (
    <div className="flex justify-center items-center gap-80">
      <img className="w-64 h-full" src="images/gun.png" alt="gun" />
      <h1 className="text-8xl m-4 text-primary font-bold">Blicky</h1>
      <img
        className="w-64 h-full transform -scale-x-100"
        src="images/gun.png"
        alt="gun"
      />
    </div>
  )
}
export default Header
