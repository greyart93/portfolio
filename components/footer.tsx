import Social_Links from "@/constants/Social_Links";

function Footer() {
    return (
        <footer className="w-full pt-14 text-center text-sm text-gray-500 dark:text-gray-400">
           {/* Social Links */}
              <div className="mb-2">
                {Social_Links.map(({ url, name }, index) => (
                  <a 
                    key={index}
                    href={url}
                    className="mx-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
                  >
                    {name}
                  </a>
                ))}
              </div>
                <div>
                    Made with ❤️ by Saud Mullaji.
                </div>
        </footer>
    );
}
export default Footer;