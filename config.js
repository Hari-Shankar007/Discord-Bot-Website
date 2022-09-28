import { BsFacebook, BsYoutube } from "react-icons/bs";
import { CgCrown } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { MdAddModerator } from "react-icons/md";
import { SiProbot } from "react-icons/si";
import { TbMessage2Code } from "react-icons/tb";
const config = {
  name: "Chaos Bot",
  //BotName
  inviteLink:
    "https://discord.com/oauth2/authorize?client_id=1021832086228840509&scope=bot%20applications.commands&permissions=2146958847",
  //BotInvite Link
  Features: [
    {
      name: "Moderation",
      description:
        "Moderation is the process of eliminating or lessening extremes.",
      logo: <MdAddModerator className="h-10 w-10" />,
    },
    {
      name: "Chat System",
      description:
        "You can talk with Chaos Boi which will help you makes your dsicord community active.",
      logo: <SiProbot className="h-10 w-10" />,
    },
    {
      name: "Fun Commands",
      description:
        "Chaos Boi has a wide range of fun commands including image apis.",
      logo: <TbMessage2Code className="h-10 w-10" />,
    },
    {
      name: "Economy System",
      description:
        "Has a wide range of economic commands like daily, beg etc ",
      logo: <CgCrown className="h-10 w-10" />,
    },
    // You can added more features if need add
  ],
  //Bot Features
  serverCount: 30, //-  - Your
  memberCount: 700, //--   - Bot
  executedCommand: 2700, //--  - Stats
  availableCommand: 70, //---   - Here
  //Do not change if you don't know about them
  faceBookLogo: (
    <BsFacebook className="h-10 w-10 text-[#4267B2] hover:scale-125 easeIn cursor-pointer" />
  ),
  discordLogo: (
    <FaDiscord className="h-10 w-10 text-[#738adb] hover:scale-125 easeIn cursor-pointer" />
  ),
  youTubeLogo: (
    <BsYoutube className="h-10 w-10 text-[#FF0000] hover:scale-125 easeIn cursor-pointer" />
  ),
  //----------------------------------------------------------------
  // Your social handle links
  githubLink: "https://github.com",
  twitterLink: "https://twitter.com",
  mediumLink: "https://medium.com/",
  facebookLink: "https://facebook.com",
  discordLink: "https://discord.gg/zGfSFdxyVd",
  youtubeLink: "https://www.youtube.com",
};

export default config;
