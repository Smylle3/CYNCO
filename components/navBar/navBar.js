import { IconButton, Link } from "@chakra-ui/react";
import styles from "../../styles/Home.module.css";
import { SiGithub } from "react-icons/si";
import { TiInfoLarge } from "react-icons/ti";

export default function NavBar() {
  return (
    <footer className={styles.navBar}>
      <Link><SiGithub size={25} /></Link>
      <IconButton variant='unstyled' icon={<TiInfoLarge size={25} />} />
    </footer>
  );
}
