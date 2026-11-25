
export const siteConfig = {
    name: "Elora Healthcare Australia",
    shortName: "EHA",
    description: "Professional dental care in Australia",

    navigation: [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "About Us",
            href: "/about",
        },
        {
            label: "Our Services",
            href: "/services",
        },
        {
            label: "Contact Us",
            href: "/contact",
        },
    ],

    actions: {
        login: {
            label: "Login",
            href: "/login",
        },
        register: {
            label: "Register",
            href: "/register",
        },
        appointment: {
            label: "Book Appointment",
            href: "/appointments/book",
        },
    },
} as const;
