function Link({href, children}: {href: string, children: React.ReactNode}) {
    return <a href={href} target="blank" rel="noopener noreferrer" className="font-medium text-gray-700 dark:text-gray-300 border-b-blue-200 dark:border-b-blue-500 border-b hover:border-b-blue-500 dark:hover:border-b-blue-200">{children}</a>;
}

export default Link;