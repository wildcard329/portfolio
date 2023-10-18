import { BiLogoReact, BiLogoAws, BiLogoNodejs, BiLogoHtml5, BiLogoCss3, BiLogoGithub } from 'react-icons/bi';
import { CgWebsite } from 'react-icons/cg';

const IconParser = ({ label }) => {
  switch (label) {
    case 'react':
      return <BiLogoReact size={30} />;
    case 'aws':
      return <BiLogoAws size={30} />;
    case 'node':
      return <BiLogoNodejs size={30} />;
    case 'css':
      return <BiLogoCss3 size={30} />;
    case 'html':
      return <BiLogoHtml5 size={30} />;
    case 'github':
      return <BiLogoGithub size={30} />;
    case 'site':
      return <CgWebsite size={30} />;
    default: null;
  };
};

export default IconParser;
