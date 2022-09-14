/* eslint-disable jsx-a11y/anchor-is-valid */
import avatarAnisa from './assets/images/avatar-anisha.png'
import avatarRichard from './assets/images/avatar-richard.png'
import avatarShanai from './assets/images/avatar-shanai.png'
import facebook from './assets/images/icon-facebook.svg'
import instagram from './assets/images/icon-instagram.svg'
import pinterest from './assets/images/icon-pinterest.svg'
import twitter from './assets/images/icon-twitter.svg'
import intro from './assets/images/illustration-intro.svg'
import logoWhite from './assets/images/logo-white.svg'
import logo from './assets/images/logo.svg'

function App() {
  return (
    <>
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          <div class="pt-2">
            <img src={logo} alt="React Logo" />
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#" class="hover:text-darkGrayishBlue">
              Pricing
            </a>
            <a href="#" class="hover:text-darkGrayishBlue">
              About us
            </a>
            <a href="#" class="hover:text-darkGrayishBlue">
              Careers
            </a>
            <a href="#" class="hover:text-darkGrayishBlue">
              Community
            </a>
            <a href="#" class="hover:text-darkGrayishBlue">
              Product
            </a>
          </div>
          <a
            href=""
            className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
          >
            Get started
          </a>
          {/* Hamburger Icon */}
          <button
            id="menu-btn"
            className="block hamburger md:hidden focus:outline-none"
            onClick={() => this.classList.toggle("open")}
          >
            <span class="hamburger-top"></span>
            <span class="hamburger-middle"></span>
            <span class="hamburger-bottom"></span>
          </button>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden">
          <div
            id="menu"
            class="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 
            font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
            onClick={() => {
              this.classList.toggle("hidden")
              this.classList.toggle("flex")
            }}
          >
            <a href="#">Pricing</a>
            <a href="#">Product</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Community</a>
          </div>
        </div>
      </nav>

      <secion id="hero">
        <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
              Bring everyone together to build better products
            </h1>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in views.
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href=""
                className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
              >
                Get started
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src={intro} alt="intro" />
          </div>
        </div>
      </secion>
      <section id="features">
        {/* flex container */}
        <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
          {/* what different */}
          <div className="flex flex-col space-y-12 md:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
              What's different about Manage?
            </h2>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Anim labore dolor in pariatur. Aute ex cupidatat labore pariatur.
              Magna ut officia irure ex proident. Do commodo nisi officia cillum
              consectetur proident culpa mollit commodo veniam aliqua.
            </p>
          </div>
          {/* numbered list */}
          <div className="flex flex-col space-y-8 md:w-1/2">
            {/* list item 1 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* Heading */}
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    01
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Track company-wide progress
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Track company-wide progress
                </h3>
                <p3 className="text-darkGrayishBlue">
                  See how your day-to-day tasks fit into the wider vision. Go
                  from tracking progress at the milestone level all the way down
                  to the smallest of details. Never lose sight of the bigger
                  picture again.
                </p3>
              </div>
            </div>
            {/* list item 2 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* Heading */}
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    02
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Advanced built-in reports
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Advanced built-in reports
                </h3>
                <p3 className="text-darkGrayishBlue">
                  Set internal delivery estimates and track progress toward
                  company goals. Our customisable dashboard helps you build out
                  the reports you need to keep key stakeholders informed.
                </p3>
              </div>
            </div>
            {/* list item 3 */}
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              {/* Heading */}
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    03
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Everything you need in one place
                  </h3>
                </div>
              </div>
              <div>
                <h3 className="hidden mb-4 text-lg font-bold md:block">
                  Everything you need in one place
                </h3>
                <p3 className="text-darkGrayishBlue">
                  Stop jumping from one service to another to communicate, store
                  files, track tasks and share documents. Manage offers an
                  all-in-one team productivity solution.
                </p3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testiomonials */}
      <section id="testiomonials">
        {/* container to heading and teams blocks */}
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-center">
            What's Different About Manage?
          </h2>
          {/* Testimonials Container */}
          <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
            {/* Testimonial 1 */}
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img src={avatarAnisa} alt="" className="w-16 -mt-14" />
              <h5 className="text-lg font-bold">Anisha Li</h5>
              <p className="text-sm text-darkGrayishBlue">
                “Manage has supercharged our team’s workflow. The ability to
                maintain visibility on larger milestones at all times keeps
                everyone motivated.”
              </p>
            </div>
            {/* Testimonial 2 */}
            <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
              <img src={avatarRichard} alt="" className="w-16 -mt-14" />
              <h5 className="text-lg font-bold">Lalisa Monoban</h5>
              <p className="text-sm text-darkGrayishBlue">
                “We have been able to cancel so many other subscriptions since
                using Manage. There is no more cross-channel confusion and
                everyone is much more focused.”
              </p>
            </div>
            {/* Testimonial 3 */}
            <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
              <img src={avatarShanai} alt="" className="w-16 -mt-14" />
              <h5 className="text-lg font-bold">Ali Bravo</h5>
              <p className="text-sm text-darkGrayishBlue">
                “Sit amet aute irure officia consectetur mollit qui. Nulla
                labore eiusmod exercitation culpa enim deserunt do quis ea Lorem
                minim. Magna qui elit adipisicing occaecat deserunt.”
              </p>
            </div>
          </div>
          <div className="my-16">
            <a
              href=""
              className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            >
              Get started
            </a>
          </div>
        </div>
      </section>
      <section id="cta" className="bg-brightRed">
        {/* flex container */}
        <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
          {/* heading */}
          <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
            Simplify how your team works today
          </h2>
          {/* button */}
          <div>
            <a
              href=""
              className="p-3 px-6 pt-2 text-brightRed bg-white rounded-full baseline hover:bg-gray-300 shadow-2xl"
            >
              Get started
            </a>
          </div>
        </div>
      </section>
      {/* footer */}
      <footer className="bg-veryDarkBlue">
        {/* flex container */}
        <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          {/* logo and social links container */}
          <div class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div class="mx-auto my-6 text-center text-white md:hidden">
              Copyright &copy; 2022, All Rights Reserved
            </div>
            {/* logo */}
            <div>
              <img src={logoWhite} alt="" />
            </div>
            {/* social links container */}
            <div className="flex justify-center space-x-4">
              <a href="#">
                <img src={facebook} alt="" className="h-8" />
              </a>
              <a href="#">
                <img src={twitter} alt="" className="h-8" />
              </a>
              <a href="#">
                <img src={instagram} alt="" className="h-8" />
              </a>
              <a href="#">
                <img src={pinterest} alt="" className="h-8" />
              </a>
            </div>
          </div>
          {/* List Container */}
          <div class="flex justify-around space-x-32">
            <div class="flex flex-col space-y-3 text-white">
              <a href="#" class="hover:text-brightRed">
                Home
              </a>
              <a href="#" class="hover:text-brightRed">
                Pricing
              </a>
              <a href="#" class="hover:text-brightRed">
                Products
              </a>
              <a href="#" class="hover:text-brightRed">
                About
              </a>
            </div>
            <div class="flex flex-col space-y-3 text-white">
              <a href="#" class="hover:text-brightRed">
                Careers
              </a>
              <a href="#" class="hover:text-brightRed">
                Community
              </a>
              <a href="#" class="hover:text-brightRed">
                Privacy Policy
              </a>
            </div>
          </div>
          {/* Input Container */}
          <div class="flex flex-col justify-between">
            <form>
              <div class="flex space-x-3">
                <input
                  type="text"
                  class="flex-1 px-4 rounded-full focus:outline-none"
                  placeholder="Updated in your inbox"
                />
                <button class="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                  Go
                </button>
              </div>
            </form>
            <div class="hidden text-white md:block">
              Copyright &copy; 2022, All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
