import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

import { useState, useEffect } from 'react'

const navItems = [
  { name: "Home", to: "/" },
  {
    name: "About", to: "", links: [
      { name: "About SCA", to: "/about" },
      { name: "Our Team", to: "/team" }
    ]
  },
  {
    name: "Community", to: "", links: [
      { name: "SCA Community", to: "/community" },
      { name: "SCA Chapters", to: "/chapters" }
    ]
  },
  { name: "Job", to: "/job" }

]

function App () {

  const [activeMenu, setActiveMenu] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // const classList = 

  const _window = window ? window : null


  useEffect(() => {
    if (_window) {
      if (isMenuOpen) {
        _window.document.body.classList.add('max-h-screen', 'overflow-hidden')
      } else {
        _window.document.body.classList.remove('max-h-screen', 'overflow-hidden')
      }
    }

    return () => {
      _window.document.body.classList.remove('max-h-screen', 'overflow-hidden')
    };


  }, [isMenuOpen, _window])




  return (
    <header>
      <nav className="bg-white shadow-lg py-8 sticky top-0 lg:block hidden">
        <ul aria-label="navigation list" className="flex justify-around w-10/12 mx-auto">
          {navItems.map((navItem, index) => (
            <li key={index} >
              {navItem?.links ?

                <div className="relative">
                  {/* use a button instead */}
                  <div
                    tabIndex={0}
                    onClick={() => {
                      activeMenu === navItem.name ? setActiveMenu(null) : setActiveMenu(navItem.name)
                    }}
                    onKeyUp={(e) => {
                      if (e.code === "Enter" || e.code === "Space") {
                        activeMenu === navItem.name ? setActiveMenu(null) : setActiveMenu(navItem.name)
                      }
                    }}
                    className="flex items-center gap-x-3 focus:outline-none focus:ring-2 focus:ring-pink-300">
                    <span>{navItem.name}</span>
                    <FontAwesomeIcon icon={faAngleDown} className={`${activeMenu === navItem.name ? 'rotate-180' : 'rotate-0'} transition-transform duration-700`} />
                  </div>


                  {activeMenu === navItem.name ?
                    <ul className="absolute top-12 w-max py-5 px-3 flex flex-col gap-y-4 bg-white">
                      {navItem.links.map((link, index) =>
                        <li key={index}><a href={link.to} className="text-blue-600 font-medium">{link.name}</a></li>
                      )}

                    </ul> : null}
                </div> :
                <a href="/" className="text-blue-600 font-medium focus:outline-none focus:ring-2 focus:ring-pink-300">{navItem.name}</a>}
            </li>
          ))}
        </ul>
      </nav>
      <nav className="lg:hidden flex justify-between items-center sticky top-0 z-50 bg-white shadow-lg p-4 text-xl">
        <a href="/">Home</a>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FontAwesomeIcon icon={faXmark} className="text-2xl" /> : <FontAwesomeIcon icon={faBars} className="text-2xl" />}
        </button>
      </nav>
      {isMenuOpen ?
        <ul className="lg:hidden py-8 px-5 flex flex-col gap-y-6 text-xl text-[#1A1A1A] overflow-y-auto h-[90vh]">
          {navItems.map((navItem, index) => (
            <li key={index}>
              {navItem?.links ?
                <>
                  <p className="font-medium mb-6">
                    {navItem.name}
                  </p>
                  <ul className="flex flex-col gap-y-6 ml-6">
                    {navItem.links.map((link, index) =>
                      <li key={index}><a href={link.to} className="">{link.name}</a></li>
                    )}

                  </ul>
                </>
                :
                <a href="/" className="font-medium focus:outline-none focus:ring-2 focus:ring-pink-300">{navItem.name}</a>}
            </li>
          ))}

        </ul> : null}

    </header>
  )
}

export default App
