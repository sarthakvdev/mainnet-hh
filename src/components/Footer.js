const Footer = () => {
  const navigation = [
    {
      name: "email us",
      href: "mailto:mainnetdao@gmail.com",
    },
    {
      name: "twitter",
      href: "https://twitter.com/mainnethh",
    },
    {
      name: "instagram",
      href: "#",
    },
    {
      name: "discord",
      href: "#",
    },
  ];

  return (
    <footer>
      <div className="max-w-7xl mx-auto py-12 px-6 sm:px-6 lg:px-20 flex flex-col sm:flex-row items-center justify-between pb-20">
        <div className="mt-8 md:mt-0">
          {/* SPACE FOR LOGO */}
          <p className="font-semibold text-xl">mainnetDAO</p>
          <p className="font-normal text-lg">
            where devs learn, buidl and ship together.
          </p>
          <p className="font-normal text-base mt-5 text-gray-500">
            Copyright © {new Date().getFullYear()} mainnetDAO. All rights
            reserved.
          </p>
        </div>
        {/* Nav Links Section */}
        <div className="mt-10 sm:mt-0">
          <ul role="list" className="grid grid-cols-2 gap-6 sm:gap-6">
            {navigation.map((item, index) => (
              <li key={index} className="col-span-1 flex">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-900 font-medium hover:text-gray-600 min-w-[100px] px-4 py-2 flex justify-center text-base truncate rounded-md transition-all duration-200 hover:ring-1 ring-gray-100 hover:shadow-lg"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
