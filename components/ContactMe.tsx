function ContactMe() {
    return (
        <div className="w-full max-w-4xl mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">Feel free to reach out to me:</p>
            <ul className="space-y-2">
                <li>
                    <a href="mailto:saudmullaji05@gmail.com" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200">Email: saudmullaji05@gmail.com</a>
                </li>
            </ul>
        </div>
    );
}
export default ContactMe;