//links
import Link from "next/link";

//icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiGithubFill,
  RiTelegramFill,
  RiLinkedinLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://www.youtube.com/channel/UCNobOlc48C5l-17l4hacM_w"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiYoutubeLine />
      </Link>
      <Link
        href={"https://www.instagram.com/aiakosxiii/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://github.com/Aiakos13"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubFill />
      </Link>
      <Link
        href={"https://t.me/sinahoorasfand"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiTelegramFill />
      </Link>

      <Link
        href={"https://www.linkedin.com/in/sina-hooresfand-2bb168233/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
    </div>
  );
};

export default Socials;
