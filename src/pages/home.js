import React, {Component} from "react";
import "../index.css";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <main className="xl:max-w-6xl mx-auto pt-11 pb-8 lg:py-16 px-4 lg:max-w-4xl xl:px-0">
        <section className="flex flex-col items-center gap-6 mb-14 relative">
          <img
            src="/avatar.jpg"
            id="profile__img"
            alt="Tella Boluwatife"
            className="w-[88px] h-[88px] rounded-full align- object-cover"
          ></img>
          <h1 className="font-bold text-xl">Tella Boluwatife</h1>
          <button className="hidden h-10 w-10 sm:flex items-center justify-center rounded-[20px] border border-gray-300 border-dashed absolute top-2 right-40">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.3261 10.5062C17.5296 10.3318 17.6313 10.2446 17.6686 10.1409C17.7013 10.0498 17.7013 9.9502 17.6686 9.85914C17.6313 9.75539 17.5296 9.6682 17.3261 9.49383L10.2672 3.44331C9.917 3.14315 9.74191 2.99306 9.59367 2.98939C9.46483 2.98619 9.34177 3.04279 9.26035 3.14269C9.16667 3.25764 9.16667 3.48825 9.16667 3.94948V7.52886C7.38777 7.84007 5.75966 8.74146 4.54976 10.0949C3.23069 11.5704 2.50103 13.48 2.5 15.4591V15.9691C3.37445 14.9157 4.46626 14.0638 5.70063 13.4716C6.78891 12.9495 7.96535 12.6403 9.16667 12.5588V16.0505C9.16667 16.5117 9.16667 16.7424 9.26035 16.8573C9.34177 16.9572 9.46483 17.0138 9.59367 17.0106C9.74191 17.0069 9.917 16.8569 10.2672 16.5567L17.3261 10.5062Z"
                stroke="#98A2B3"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button className="flex h-10 w-10 sm:hidden items-center justify-center rounded-[20px] border border-gray-300 border-dashed absolute top-2 right-10">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99998 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 9.99999C10.8333 9.53975 10.4602 9.16666 9.99998 9.16666C9.53974 9.16666 9.16665 9.53975 9.16665 9.99999C9.16665 10.4602 9.53974 10.8333 9.99998 10.8333Z"
                stroke="#98A2B3"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.8333 10.8333C16.2935 10.8333 16.6666 10.4602 16.6666 9.99999C16.6666 9.53975 16.2935 9.16666 15.8333 9.16666C15.3731 9.16666 15 9.53975 15 9.99999C15 10.4602 15.3731 10.8333 15.8333 10.8333Z"
                stroke="#98A2B3"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4.16665 10.8333C4.62688 10.8333 4.99998 10.4602 4.99998 9.99999C4.99998 9.53975 4.62688 9.16666 4.16665 9.16666C3.70641 9.16666 3.33331 9.53975 3.33331 9.99999C3.33331 10.4602 3.70641 10.8333 4.16665 10.8333Z"
                stroke="#98A2B3"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </section>

        <section className="space-y-6">
          <a
            href="https://twitter.com/codeReaper01"
            type="button"
            id="twitter"
            target="_blank"
            className="text-lg font-medium w-full bg-[#EAECF0] border border-[#EAECF0] py-6 text-center rounded-lg"
          >
            Twitter Link
          </a>

          <a
            href="#"
            type="button"
            id="slack"
            target="_blank"
            className="hidden text-lg font-medium w-full bg-[#EAECF0] border border-[#EAECF0] py-6 text-center rounded-lg"
          >
            Slack username: CodeReaper0
          </a>

          <a
            href="https://training.zuri.team/"
            type="button"
            id="btn_zuri"
            target="_blank"
            className="text-lg font-medium w-full bg-[#EAECF0] border border-[#EAECF0] py-6 text-center rounded-lg"
          >
            Zuri Team
          </a>

          <a
            href="http://books.zuri.team/"
            type="button"
            id="books"
            target="_blank"
            title="This is where you find books about design and coding"
            className="text-lg font-medium w-full bg-[#EAECF0] border border-[#EAECF0] py-6 text-center rounded-lg"
          >
            Zuri Books
          </a>

          <a
            href="https://books.zuri.team/python-for-beginners?ref_id=CodeReaper0"
            type="button"
            id="book__python"
            target="_blank"
            title="where you feature the book as if you were selling it.The reference id must be unique and will give you royalties if any sales of the book come"
            className="text-lg font-medium w-full bg-[#EAECF0] border border-[#EAECF0] py-6 text-center rounded-lg"
          >
            Python Books
          </a>

          <a
            href="https://background.zuri.team/"
            type="button"
            id="pitch"
            target="_blank"
            title="where you pitch a service for doing background checks on coders. Use a good, selling sentence."
            className="text-lg font-medium w-full bg-[#EAECF0] border border-[#EAECF0] py-6 text-center rounded-lg"
          >
            Background Check for Coders
          </a>

          <a
            href="https://books.zuri.team/design-rules"
            type="button"
            id="book__design"
            target="_blank"
            title="where you pitch the free design book offered by Zuri."
            className="text-lg font-medium w-full bg-[#EAECF0] border border-[#EAECF0] py-6 text-center rounded-lg"
          >
            Design Books
          </a>

          <Link
            to="/contact"
            type="button"
            id="contact"
            className="text-lg font-medium w-full bg-[#EAECF0] border border-[#EAECF0] py-6 text-center rounded-lg"
          >
            Contact Me
          </Link>
        </section>

        <section className="flex justify-center gap-6 py-6 mt-6">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.8752 11.2498C20.9106 11.2498 21.75 10.4104 21.75 9.37496C21.75 8.33952 20.9105 7.50012 19.8751 7.50012C18.8395 7.50012 18 8.33959 18 9.37512V11.2498H19.8752ZM14.625 11.2498C15.6605 11.2498 16.5 10.4103 16.5 9.3748V4.12512C16.5 3.08959 15.6605 2.25012 14.625 2.25012C13.5895 2.25012 12.75 3.08959 12.75 4.12512V9.3748C12.75 10.4103 13.5895 11.2498 14.625 11.2498Z"
                fill="#2EB67D"
              />
              <path
                d="M4.12484 12.7502C3.08939 12.7502 2.25 13.5896 2.25 14.625C2.25 15.6605 3.08947 16.4999 4.12492 16.4999C5.16045 16.4999 6 15.6604 6 14.6249V12.7502H4.12484ZM9.375 12.7502C8.33947 12.7502 7.5 13.5897 7.5 14.6252V19.8749C7.5 20.9104 8.33947 21.7499 9.375 21.7499C10.4105 21.7499 11.25 20.9104 11.25 19.8749V14.6252C11.25 13.5897 10.4105 12.7502 9.375 12.7502Z"
                fill="#E01E5A"
              />
              <path
                d="M12.7501 19.8752C12.7501 20.9106 13.5895 21.75 14.625 21.75C15.6604 21.75 16.4998 20.9105 16.4998 19.8751C16.4998 18.8395 15.6603 18 14.6248 18L12.7501 18L12.7501 19.8752ZM12.7501 14.625C12.7501 15.6605 13.5896 16.5 14.6251 16.5L19.8748 16.5C20.9103 16.5 21.7498 15.6605 21.7498 14.625C21.7498 13.5895 20.9104 12.75 19.8748 12.75L14.6251 12.75C13.5896 12.75 12.7501 13.5895 12.7501 14.625Z"
                fill="#ECB22E"
              />
              <path
                d="M11.2498 4.12484C11.2498 3.08939 10.4104 2.25 9.37496 2.25C8.33952 2.25 7.50012 3.08947 7.50012 4.12492C7.50012 5.16045 8.33959 6 9.37512 6L11.2498 6L11.2498 4.12484ZM11.2498 9.375C11.2498 8.33947 10.4103 7.5 9.3748 7.5L4.12512 7.5C3.08959 7.5 2.25012 8.33947 2.25012 9.375C2.25012 10.4105 3.08959 11.25 4.12512 11.25L9.3748 11.25C10.4103 11.25 11.2498 10.4105 11.2498 9.375Z"
                fill="#36C5F0"
              />
            </svg>
          </div>

          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_4627_392534)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 0C5.3724 0 0 5.3808 0 12.0204C0 17.3304 3.438 21.8364 8.2068 23.4252C8.8068 23.5356 9.0252 23.1648 9.0252 22.8456C9.0252 22.5612 9.0156 21.804 9.0096 20.802C5.6712 21.528 4.9668 19.1904 4.9668 19.1904C4.422 17.8008 3.6348 17.4312 3.6348 17.4312C2.5452 16.6872 3.7176 16.7016 3.7176 16.7016C4.9212 16.7856 5.5548 17.94 5.5548 17.94C6.6252 19.776 8.364 19.2456 9.0468 18.9384C9.1572 18.162 9.4668 17.6328 9.81 17.3328C7.146 17.0292 4.344 15.9972 4.344 11.3916C4.344 10.08 4.812 9.006 5.5788 8.166C5.4552 7.8624 5.0436 6.6396 5.6964 4.986C5.6964 4.986 6.7044 4.662 8.9964 6.2172C9.97532 5.95022 10.9853 5.81423 12 5.8128C13.02 5.8176 14.046 5.9508 15.0048 6.2172C17.2956 4.662 18.3012 4.9848 18.3012 4.9848C18.9564 6.6396 18.5436 7.8624 18.4212 8.166C19.1892 9.006 19.6548 10.08 19.6548 11.3916C19.6548 16.0092 16.848 17.0256 14.1756 17.3232C14.6064 17.694 14.9892 18.4272 14.9892 19.5492C14.9892 21.1548 14.9748 22.452 14.9748 22.8456C14.9748 23.1672 15.1908 23.5416 15.8004 23.424C18.19 22.6225 20.2672 21.0904 21.7386 19.0441C23.2099 16.9977 24.001 14.5408 24 12.0204C24 5.3808 18.6264 0 12 0Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_4627_392534">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </section>
      </main>
      <footer className="pt-8 lg:pt-12 pb-2 xl:pb-12 px-4 xl:px-0">
        <section className="flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between md:items-center py-8 max-w-7xl mx-auto border-t border-t-gray-200">
          <img
            src="/Zuri_Logo.png"
            className="max-w-[138px] lg:max-w-[186px]"
          />
          <p className="text-gray-500">HNG Internship 9 Frontend Task</p>
          <img src="/I4G.png" className="max-w-[99px] lg:max-w-[132px]" />
        </section>
      </footer>
    </React.Fragment>
  );
};

export default Home;
