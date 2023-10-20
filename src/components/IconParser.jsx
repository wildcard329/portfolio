import { BiLogoReact, BiLogoJavascript, BiLogoSass, BiLogoRedux, BiLogoHeroku, BiLogoPostgresql, BiLogoAws, BiLogoNodejs, BiLogoHtml5, BiLogoCss3, BiLogoGithub } from 'react-icons/bi';
import { CgWebsite } from 'react-icons/cg';
import { TbSql } from 'react-icons/tb';
import { AiOutlineMail, AiFillLinkedin, AiOutlineMobile } from 'react-icons/ai';

const IconParser = ({ label }) => {
  switch (label) {
    case 'react':
      return <BiLogoReact size={30} />;
    case 'javascript':
      return <BiLogoJavascript size={30} />;
    case 'aws':
      return <BiLogoAws size={30} />;
    case 'node':
      return <BiLogoNodejs size={30} />;
    case 'css':
      return <BiLogoCss3 size={30} />;
    case 'scss':
      return <BiLogoSass size={30} />;
    case 'html':
      return <BiLogoHtml5 size={30} />;
    case 'postgres':
      return <BiLogoPostgresql size={30} />;
    case 'sql':
      return <TbSql size={30} />;
    case 'redux':
      return <BiLogoRedux size={30} />;
    case 'heroku':
      return <BiLogoHeroku size={30} />;
    case 'email':
      return <AiOutlineMail size={30} />
    case 'linkedin':
      return <AiFillLinkedin size={30} />;
    case 'mobile':
      return <AiOutlineMobile size={30} />;
    case 'github':
      return <BiLogoGithub size={30} />;
    case 'site':
      return <CgWebsite size={30} />;
    default: null;
  };
};

export default IconParser;
