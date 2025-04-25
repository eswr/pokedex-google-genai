import { Outlet } from 'react-router';
import '../styles/hotel.css';

export const HotelLayout = () => {
  return (
    <>
      <header>
        <div className="container header-container">
          <img
            src="https://placehold.co/200x40?text=Zen+Pacific+Orlando"
            alt="Zen Pacific Orlando"
            className="logo"
          />
          <div className="user-menu">
            <div className="language-selector">
              <span>English</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Close icon</title>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
            <div className="avatar">JS</div>
          </div>
        </div>
      </header>

      <main>
        {/* This is where the page content will render */}
        <Outlet />
      </main>
    </>
  );
};
