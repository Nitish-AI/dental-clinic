
import { siteConfig } from "@/config/site";

export const homepageData = {
    hero: {
        eyebrow: "PERSONALISED DENTAL CARE",

        title: {
            primary: "A healthier smile",
            secondary: "starts here.",
        },

        description:
            "Thoughtful dental care for you and your family, in a comfortable and welcoming environment.",

        media: {
            video: "/videos/dental-hero.mp4",
            videoType: "video/mp4",
            poster: null,
        },

        primaryAction: siteConfig.actions.appointment,

        secondaryAction: {
            label: "Explore Our Services",
            href: "/services",
        },

        accessibility: {
            playLabel: "Play background video",
            pauseLabel: "Pause background video",
        },
    },
} as const;
