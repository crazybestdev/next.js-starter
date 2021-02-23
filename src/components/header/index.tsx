import { tw, css } from 'twind/css';
import Button from '@/components/button';
import Netlify from '@/constants/icons/netlify.svg';
import Nike from '@/constants/icons/nike.svg';
import Figma from '@/constants/icons/figma.svg';
import Aws from '@/constants/icons/aws.svg';

const headerStyle = css`
  background-color: #ffffff;
  height: calc(100vh - 6rem);
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-5xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h1
        className={tw(
          `font-sans font-bold text-4xl lg:text-8xl text-center leading-snug text-gray-800`,
        )}
      >
        Your website, beyond expectations
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p
          className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}
        >
          Make your website wonderful and build beyond your expectations.
        </p>
      </div>
      <div
        className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}
      >
        <Button primary>Get started</Button>
        <span className={tw(`mx-2`)}>or</span>
        <Button>Contact us</Button>
      </div>
    </div>
    <div className={tw(`flex justify-center w-full`)}>
      <div className={tw(`mt-4 w-full`)}>
        <p
          className={tw(
            `font-mono uppercase text-center font-medium text-sm text-gray-600`,
          )}
        >
          Powering exceptional digital experiences everywhere
        </p>
        <div
          className={tw(
            `flex items-center justify-center mx-auto flex-wrap my-2`,
          )}
        >
          <div className={tw(`w-36 m-12`)}>
            <Netlify />
          </div>
          <div className={tw(`w-36 m-12`)}>
            <Nike />
          </div>
          <div className={tw(`w-24 m-12`)}>
            <Aws />
          </div>
          <div className={tw(`w-36 m-12`)}>
            <Figma />
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
