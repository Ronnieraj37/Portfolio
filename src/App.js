import { FaWhatsapp } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs"
import Skeleton from '@mui/material/Skeleton';
import { useEffect, useState } from "react";
import Project from "./components/Project"
import Experience from "./components/Experience";
function App() {
  const [text, settext] = useState('');
  const txt = "Hi, I'm a Blockchain Developer";
  const [isTextLoading, setisTextLoading] = useState(true);
  const [loadImage, setloadImage] = useState(true);
  const [val, setval] = useState(0);
  const mailLink = "mailto:ec21b1095@iiitdm.ac.in";
  const whatsappLink = "https://wa.me/8919285030";
  const githubLink = "https://github.com/Ronnieraj37?tab=repositories";
  const linkedinLink = "https://www.linkedin.com/in/roshan-singh-79709a224/";
  const resumeLink = "https://orange-confused-boar-516.mypinata.cloud/ipfs/QmVdWEtDDxzXy4ppXnLaWE9qpiNoEXpEfEqmEVQJGCffUL?_gl=1*pjfpdy*_ga*MTY2OTI0NDAzNS4xNjgzNjU2ODM2*_ga_5RMPXG14TE*MTY5MTI3MDEzOS44LjEuMTY5MTI3MDE3NS4yNC4wLjA.";
  const imageloaded = () => {
    setTimeout(() => {
      setloadImage(false);
    }, 1600);
  }
  const setDescription = () => {
    settext(txt.slice(0, val));
    if (val === txt.length) {
      setisTextLoading(false);
    } else {
      setisTextLoading(true);
    }
    setval(val + 1);
  }
  useEffect(() => {
    setTimeout(() => {
      isTextLoading && setDescription();
    }, 50)
  }, [val])
  return (
    <div className="items-center flex flex-col sm:ml-0 ml-20">
      <div className="flex-col flex min-w-full items-center justify-around  overflow-auto -mt-8  font-link text-white">
        <div className="flex flex-col sm:flex-row ml-72 mt-12 sm:mt-20 sm:ml-44">
          <div className="-ml-32 mr-8 ">
            <img onLoad={imageloaded} src="https://orange-confused-boar-516.mypinata.cloud/ipfs/QmdcE4xXBkCknQFuKftn5BoHgSp1xHRECGXUp8W5HPR7A3?_gl=1*1g0xk7f*_ga*MTY2OTI0NDAzNS4xNjgzNjU2ODM2*_ga_5RMPXG14TE*MTY5MTEyNzg5OC41LjEuMTY5MTEyNzkxOC40MC4wLjA." className="w-[230px] h-[230px] sm:flex hidden  z-0 rounded-full" loading="lazy" alt="Profile" />
            {loadImage &&
              <div className="-mt-[230px] sm:flex hidden z-10 ">
                <Skeleton animation="wave" variant="circular" sx={{ bgcolor: '#0f5575' }} width={230} height={230} />
              </div>
            }
          </div>
          <div className="flex-col mt-9 mr-12 sm:mr-16">
            <p className="text-3xl ml-8 sm:ml-0 sm:text-5xl p-2  text-cyan-300">Roshan Raj Singh</p>
            <div className="flex-row flex mt-3 w-[414px]">
              <p className="text-2xl sm:text-3xl  -mr-1 text-cyan-600">{text}</p>
              <div className="animate-pulse">
                <div class="  inline-block h-[34px] min-h-[1em] ml-2 w-0.5 self-stretch bg-cyan-600 opacity-20 dark:opacity-100"></div>
              </div>
            </div>
          </div>
          <div class="inline-block h-[0px] sm:h-[250px] min-h-[1em] -mt-0 w-0 sm:w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>
          <div className="flex flex-col w-[400px] justify-around sm:p-8 -ml-12 sm:ml-8">
            <p className="text-cyan-400 mt-8 text-xl sm:text-3xl font-semibold justify-center flex mb-4 sm:-mt-4">Contact Links</p>
            <div className="flex-row justify-around mt-6 items-center flex">
              <a href={whatsappLink} rel="noopener noreferrer" target="_blank">
                <FaWhatsapp className="  text-cyan-500 rounded-xl hover:text-cyan-300 hover:scale-105" size={45} />
              </a>
              <a href={githubLink} rel="noopener noreferrer" target="_blank">
                <VscGithub className=" text-cyan-500 rounded-xl hover:text-cyan-300 hover:scale-105" size={45} />
              </a>
              <a href={linkedinLink} rel="noopener noreferrer" target="_blank">
                <BsLinkedin className=" text-cyan-500 rounded-xl hover:text-cyan-300 hover:scale-105" size={43} />
              </a>
            </div>
            <div className="flex  justify-around flex-row">
              <a href={mailLink}>
                <button className=" mt-9 px-5 py-2 text-white rounded-3xl  text-lg sm:text-xl bg-cyan-700 hover:bg-cyan-900">Email</button>
              </a>
              <a href={resumeLink} rel="noopener noreferrer" target="_blank">
                <button className=" mt-9 text-cyan-400 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-lg sm:text-xl px-5 py-2  dark:bg-gray-800 dark:text-cyan-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Resume</button>
              </a>

            </div>
          </div>
        </div>
      </div>
      <p className="text-cyan-400 text-xl ml-36 sm:text-3xl font-semibold justify-center flex mt-12 sm:-ml-4">Projects</p>
      <div className="my-12 grid grid-cols-1 sm:grid-cols-3">
        <Project title="Vendork" description=" A Decentralized Social Media App -> IPFS, OpenAI & Web3.0" gitlink="https://github.com/Ronnieraj37/Mantle" vercel="https://mantle37.vercel.app/" imglink="https://orange-confused-boar-516.mypinata.cloud/ipfs/QmP9dFNgppAmPtktSpwbFEZt6yF7SENaNvYx5d3yL9JuuN?_gl=1*9zic66*_ga*MTY2OTI0NDAzNS4xNjgzNjU2ODM2*_ga_5RMPXG14TE*MTY5MTE3NDM1Mi42LjEuMTY5MTE3NDM3MS40MS4wLjA." />
        <Project title="G-Drive 3.0" description="A Decentralized Storage with ACL -> IPFS & Web3.0" gitlink="https://github.com/Ronnieraj37/G-Drive-3.0" vercel="vercel" imglink="https://orange-confused-boar-516.mypinata.cloud/ipfs/QmeRL1HGjRBWVqyv3uESbzVq9jEmKDqgecHz6VSmGtkMJe?_gl=1*g7p57p*_ga*MTY2OTI0NDAzNS4xNjgzNjU2ODM2*_ga_5RMPXG14TE*MTY5MTE3ODA4OC43LjAuMTY5MTE3ODA4OC42MC4wLjA." />
        <Project title="Iot-Blockchain" description="Integrating IOT with Blockchain making Channels for Secure data flow" gitlink="https://github.com/Ronnieraj37/Iot-Blockchain" imglink="https://orange-confused-boar-516.mypinata.cloud/ipfs/QmQJydyLsph6RCW3SQoc7yz9byz5PesD66LFsuiFkrYX8P?_gl=1*11ddd3n*_ga*MTY2OTI0NDAzNS4xNjgzNjU2ODM2*_ga_5RMPXG14TE*MTY5MTMzOTIyMy4xMC4wLjE2OTEzMzkyMzAuNTMuMC4w" />
      </div>
      <hr class="my-6 h-0.5 border-t-0 sm:flex hidden w-[900px] bg-neutral-100 opacity-100 dark:opacity-50" />
      <p className="text-cyan-400 text-xl ml-36 sm:text-3xl font-semibold justify-center flex mt-4 sm:-ml-4">Experience</p>
      <div className="my-12 flex flex-col justify-around">
        <Experience title="GetBoarded" description="Building an NFT/Token Gated Service using ERC1155. Exploring multiple Protocols like LivePeer, Ocean and Lens Protocol, integrating these technologies to existing apps" duration="05/2023 - Present" imglink="https://media.licdn.com/dms/image/C4D0BAQFDXGNQT2FnVw/company-logo_200_200/0/1620050620599?e=2147483647&v=beta&t=ahiy7BGdXjP2v1ewGhDTR0LOL21SV5Ng18A9XzW9oxQ" position="Blockchain Developer Intern" />
        <Experience title="IIITDM" description="Collected and Analyzed data for IoT-Blockchain modelling, Developed proficiency in Solidity and EVM's,Strengthened skills in research ethics and Private-Blockchain"
          imglink="https://orange-confused-boar-516.mypinata.cloud/ipfs/QmTi2exrBkk3rRraEwZvWbwoUo4s3oDAmp3SZbxCWJavjB?_gl=1*1ndq4pq*_ga*MTY2OTI0NDAzNS4xNjgzNjU2ODM2*_ga_5RMPXG14TE*MTY5MTI3MjMwNi45LjEuMTY5MTI3MjMwOS41Ny4wLjA."
          position="Blockchain Research Intern"
          duration="01/2023 - 03/2023" />
      </div>
      <hr class="my-4 h-0.5 sm:flex hidden border-t-0 w-[900px] bg-neutral-100 opacity-100 dark:opacity-50" />
      <div className="sm:ml-0 ml-36">
      <p className="text-cyan-400 text-xl sm:text-3xl font-semibold justify-center flex mt-4 sm:-ml-4">About Me</p>
      <p className='text-center mt-2 mb-2 font-light sm:ml-0 ml-7 p-2 overflow-auto text-lg sm:text-xl text-white w-[600px]'>8919285030 | ec21b1095@iiitdm.ac.in | Chennai, Tamil Nadu </p>
      </div>
    </div>
  );
}

export default App;
