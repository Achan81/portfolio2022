

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="container">
      <h3 className="bgClip footer-text opacity-75 fs-6">Alex Chan <span className="fs-5">&copy;</span> {currentYear}</h3>
    </div>
  )
}

export default Footer