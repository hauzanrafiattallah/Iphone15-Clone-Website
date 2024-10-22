import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            <a href="https://www.apple.com/id/buy/">
              <span className="hover:underline text-blue">
                Temukan Retailer{" "}
              </span>
            </a>
            <span>di dekat anda</span>
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div
          className="flex md:flex-row flex-col justify-between
        md:items-center"
        >
          <p className="font-semibold text-gray text-xs">
            Hak cipta @ 2024 Apple Inc. Seluruh hak cipta dilindungi
            undang-undang.
          </p>
          <div className="flex flex-wrap">
            {footerLinks.map((link, i) => (
              <p
                key={link.name}
                className="font-semibold text-gray text-xs mb-0 md:mb-0"
              >
                <a
                  href={link.url}
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {link.name}
                </a>
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2">|</span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
