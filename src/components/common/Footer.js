

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="container">
      <h3 className="footer-text opacity-100 fs-6">Alex Chan <span className="fs-5">&copy;</span> {currentYear}</h3>
    </div>
  )
}

export default Footer