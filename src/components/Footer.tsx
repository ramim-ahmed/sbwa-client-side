import React from "react";
import Wrapper from "./wrapper/Wrapper";
import { FaSearch } from "react-icons/fa";
const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <>
      <div className="bg-slate-900 py-8 text-white px-4">
        <Wrapper>
          <div className="pt-4 md:mx-0 mx-2">
            <h2>SBWA</h2>
            <p>Association - Civic, Society, Community & Nonprofit WP theme</p>
          </div>
          <hr />
          <div className="md:grid grid-cols-3 grid-flow-col gap-4 pb-4">
            <div className="my-4 md:mx-0 mx-2">
              {/* <div>
              <h2 className="text-2xl">
                Sign up for our newsletter & stay updated!
              </h2>
              <p>Don&apos;t worry! We don&apos;t spam.</p>
              <div>
                <input
                  placeholder="Your email address..."
                  type="text"
                  className="py-3 px-2"
                />
                <button className="text-white px-10 py-3 bg-orange-400">
                  Sign up
                </button>
              </div>
            </div> */}
              <div>
                <h2 className="text-2xl">Contact Information</h2>
                <ol className="text-gray-400">
                  <li>P.O. Box 458 City Of WP</li>
                  <li>1828 L St NW 12345</li>
                  <li>Email: hello@domain.com</li>
                  <li>Phone: (480) 901-6400 </li>
                  <li>Fax: (480) 901-6403</li>
                </ol>
              </div>
            </div>
            <div className="my-4 md:mx-0 mx-2">
              <h2 className="text-2xl">Recent News</h2>
              <ol className="text-gray-400">
                <li>Summer restrictions in our neighborhood Feb 21, 17</li>
                <li>
                  When and where are Civic Association meetings held? Jan 27, 17
                </li>
                <li>Youth Football Camp Jun 24, 16</li>
                <li>Traffic challenge on Summer Weekends Jun 24, 16</li>
                <li>19 Free Ways to Enjoy the Summer Jun 21, 16</li>
              </ol>
            </div>
            <div className="my-4 md:mx-0 mx-2">
              <h2 className="text-2xl">About Association theme</h2>
              <p className="text-gray-400">
                A Premium easy-to-use non-profit WordPress theme with modern
                functional design, is an ideal choice for local civic websites,
                neighborhood associations, societies or small towns and willages.
              </p>
            </div>
          </div>
        </Wrapper>


      </div>
      <hr />
      <div className="text-gray-200 bg-slate-900 text-center py-4">
        <p>
          &#169; {year} Scottish Bangladesh Welfare Association. All Rights
          Reserved.
        </p>
      </div></>
  );
};

export default Footer;
