import React from "react";
import { Stack, IconButton } from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Twitter,
  Email,
  Facebook,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: GitHub, url: "https://github.com/ErwinLambujon", label: "GitHub" },
  {
    icon: LinkedIn,
    url: "https://www.linkedin.com/in/erwin-lambujon-950a39254/?originalSubdomain=ph",
    label: "LinkedIn",
  },
  {
    icon: Facebook,
    url: "https://www.facebook.com/erwin.lambujon/",
    label: "Facebook",
  },
  { icon: Email, url: "mailto:eradehanjake@gmail.com", label: "Email" },
];

const SocialLinks = () => {
  return (
    <Stack direction="row" spacing={2} justifyContent="center">
      {socialLinks.map(({ icon: Icon, url, label }) => (
        <IconButton
          key={label}
          component={motion.a}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          color="primary"
        >
          <Icon />
        </IconButton>
      ))}
    </Stack>
  );
};

export default SocialLinks;
