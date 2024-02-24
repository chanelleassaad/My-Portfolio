import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import './App.css'
import Home from "./components/Home";
import navigation from "./data/NavigationData";
import Contact from "./components/Contact";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import About from "./components/About";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
   
    <div>
      <header className="sticky inset-x-0 top-0 z-50 bg-purple-700">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <h2 className="title-style">My Portfolio - Chanelle Assaad</h2>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <p>My Portfolio</p>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="px-0 lg:px-8 sections py-2">
        <main>
          <section id="home">
            <Home></Home>
          </section>
          <section id="about">
            <About></About>
          </section>
          <section id="projects">
            <h1>Projects</h1>
          </section>
          <section id="contact">
            <Contact></Contact>
          </section>
        </main>
      </div>

      <footer className="bg-purple-700 text-white py-4 text-center">
            <p>&copy; 2024 My Portfolio. All Rights Reserved.</p>
            <ul className="flex justify-center space-x-4 mt-4">
                <li>
                    <a href="https://www.linkedin.com/in/chanelle-assaad" target="_blank" rel="noopener noreferrer" className="text-white">
                        <FaLinkedin size={24} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/chanelleassaad" target="_blank" rel="noopener noreferrer" className="text-white">
                        <FaGithub size={24} />
                    </a>
                </li>
            </ul>
        </footer>
    </div>

    
  );
}
