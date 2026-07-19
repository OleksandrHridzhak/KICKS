import styles from "./Footer.module.scss";
import Wrapper from "@/shared/components/Wrapper/Wrapper";
import Logo from "@/shared/components/Logo/Logo";
import Heading from "@/shared/components/Heading/Heading";
import Text from "@/shared/components/Text/Text";
import Link from "@/shared/components/Link/Link";
import { Square } from "lucide-react";
import clsx from "clsx";

const linkProps = {
  color: "inverse",
  fontSize:"fs16-fs20",
  fontWeight: "semiBold"
} as const;

type FooterSectionProps = { 
  title: string;
  children: React.ReactNode;
  className?: string;
};

function FooterSection({ title, children, className }: FooterSectionProps) {
  return (
    <div className={clsx(styles.footerSection, className)}>
      <Heading tag="h3" className={styles.sectionHeading} fontSize="fs20">
        {title}
      </Heading>
      <div className={styles.linksContainer}>{children}</div>
    </div>
  );
}

function Footer() {
  return (
    <Wrapper>
      <footer className={styles.footer}>
        <Heading tag="h2" fontSize="fs24" uppercase={false} srOnly>
          Footer
        </Heading>

        <div className={styles.container}>
          <div className={styles.aboutWrapper}>
            <FooterSection title="About us">
              <Text tag="p" fontSize="fs16-fs20" className={styles.aboutUs}>
                We are the biggest hyperstore in the universe. We got you all cover
                with our exclusive collections and latest drops.
              </Text>
            </FooterSection>
          </div>

          <div className={styles.linksWrapper}>
            <FooterSection title="Categories">
              <div><Link to="/runners" {...linkProps}>Runners</Link></div>
              <div><Link to="/sneakers" {...linkProps}>Sneakers</Link></div>
              <div><Link to="/basketball" {...linkProps}>Basketball</Link></div>
              <div><Link to="/outdoor" {...linkProps}>Outdoor</Link></div>
              <div><Link to="/golf" {...linkProps}>Golf</Link></div>
              <div><Link to="/hiking" {...linkProps}>Hiking</Link></div>
            </FooterSection>

            <FooterSection title="Company">
              <div><Link to="/about" {...linkProps}>About</Link></div>
              <div><Link to="/contact" {...linkProps}>Contact</Link></div>
              <div><Link to="/blogs" {...linkProps}>Blogs</Link></div>
            </FooterSection>

            <FooterSection title="Follow us" className={styles.followUs}>
              <Link to="https://instagram.com" {...linkProps}><Square size={24} /></Link>
              <Link to="https://facebook.com" {...linkProps}><Square size={24} /></Link>
              <Link to="https://twitter.com" {...linkProps}><Square size={24} /></Link>
              <Link to="https://telegram.org" {...linkProps}><Square size={24} /></Link>
            </FooterSection>
          </div>
        </div>

        <div className={styles.wideLogo}>
          <Logo size="full" color="light" />
        </div>
      </footer>
    </Wrapper>
  );
}

export default Footer;
