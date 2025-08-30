import React from "react";
import { Box, Typography } from "@mui/material";

const PrivacyPolicy = () => {
    return (
        <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: "1200px", mx: "auto" }}>
            <Typography variant="h4" gutterBottom fontWeight="bold">
                Privacy Policy
            </Typography>

            <Typography variant="h6" gutterBottom>
                Who we are
            </Typography>
            <Typography paragraph>
                Our website address is:{" "}
                <a href="http://www.retrofixsolutions.co.uk" target="_blank" rel="noopener noreferrer">
                    http://www.retrofixsolutions.co.uk
                </a>.
            </Typography>

            <Typography variant="h6" gutterBottom>
                Comments
            </Typography>
            <Typography paragraph>
                When visitors leave comments on the site we collect the data shown in the comments form,
                and also the visitor’s IP address and browser user agent string to help spam detection.
            </Typography>
            <Typography paragraph>
                An anonymized string created from your email address (also called a hash) may be provided
                to the Gravatar service to see if you are using it. The Gravatar service privacy policy is
                available here:{" "}
                <a href="https://automattic.com/privacy/" target="_blank" rel="noopener noreferrer">
                    https://automattic.com/privacy/
                </a>
                . After approval of your comment, your profile picture is visible to the public in the
                context of your comment.
            </Typography>

            <Typography variant="h6" gutterBottom>
                Media
            </Typography>
            <Typography paragraph>
                If you upload images to the website, you should avoid uploading images with embedded
                location data (EXIF GPS) included. Visitors to the website can download and extract any
                location data from images on the website.
            </Typography>

            <Typography variant="h6" gutterBottom>
                Cookies
            </Typography>
            <Typography paragraph>
                If you leave a comment on our site you may opt-in to saving your name, email address and
                website in cookies. These are for your convenience so that you do not have to fill in your
                details again when you leave another comment. These cookies will last for one year.
            </Typography>
            <Typography paragraph>
                If you visit our login page, we will set a temporary cookie to determine if your browser
                accepts cookies. This cookie contains no personal data and is discarded when you close your
                browser.
            </Typography>
            <Typography paragraph>
                When you log in, we will also set up several cookies to save your login information and your
                screen display choices. Login cookies last for two days, and screen options cookies last for
                a year. If you select "Remember Me", your login will persist for two weeks. If you log out
                of your account, the login cookies will be removed.
            </Typography>
            <Typography paragraph>
                If you edit or publish an article, an additional cookie will be saved in your browser. This
                cookie includes no personal data and simply indicates the post ID of the article you just
                edited. It expires after 1 day.
            </Typography>

            <Typography variant="h6" gutterBottom>
                Embedded content from other websites
            </Typography>
            <Typography paragraph>
                Articles on this site may include embedded content (e.g. videos, images, articles, etc.).
                Embedded content from other websites behaves in the exact same way as if the visitor has
                visited the other website.
            </Typography>
            <Typography paragraph>
                These websites may collect data about you, use cookies, embed additional third-party
                tracking, and monitor your interaction with that embedded content, including tracking your
                interaction with the embedded content if you have an account and are logged in to that
                website.
            </Typography>

            <Typography variant="h6" gutterBottom>
                Who we share your data with
            </Typography>
            <Typography paragraph>
                If you request a password reset, your IP address will be included in the reset email.
            </Typography>

            <Typography variant="h6" gutterBottom>
                How long we retain your data
            </Typography>
            <Typography paragraph>
                If you leave a comment, the comment and its metadata are retained indefinitely. This is so
                we can recognize and approve any follow-up comments automatically instead of holding them in
                a moderation queue.
            </Typography>
            <Typography paragraph>
                For users that register on our website (if any), we also store the personal information they
                provide in their user profile. All users can see, edit, or delete their personal information
                at any time (except they cannot change their username). Website administrators can also see
                and edit that information.
            </Typography>

            <Typography variant="h6" gutterBottom>
                What rights you have over your data
            </Typography>
            <Typography paragraph>
                If you have an account on this site, or have left comments, you can request to receive an
                exported file of the personal data we hold about you, including any data you have provided
                to us. You can also request that we erase any personal data we hold about you. This does not
                include any data we are obliged to keep for administrative, legal, or security purposes.
            </Typography>

            <Typography variant="h6" gutterBottom>
                Where we send your data
            </Typography>
            <Typography paragraph>
                Visitor comments may be checked through an automated spam detection service.
            </Typography>
        </Box>
    );
};

export default PrivacyPolicy;
