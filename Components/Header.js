import HeaderItems from "./HeaderItems";
import {
    HomeIcon,
    AtSymbolIcon,
    LibraryIcon,
    BriefcaseIcon,
    AnnotationIcon,
    DeviceMobileIcon
} from '@heroicons/react/outline'
import Image from "next/image";


function Header() {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto
        '>
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                <HeaderItems title='HOME' Icon={HomeIcon}/>   {/*Icon with capital I as it is a react component*/}
                <HeaderItems title='ABOUT' Icon={AtSymbolIcon}/>
                <HeaderItems title='RESUME' Icon={LibraryIcon}/>
                <HeaderItems title='PORTFOLIO' Icon={BriefcaseIcon}/>
                <HeaderItems title='TESTIMONIALS' Icon={AnnotationIcon}/>
                <HeaderItems title='CONTACT' Icon={DeviceMobileIcon}/>
            </div>

             <Image 
             className='object-contain'
             src="/neha.jpg" alt=" " width={213.5} height={76}  />

             <div>
                 <h1 className='responsive-headline '>
                     I am Neha Patel</h1>
             </div>
           
        </header>
    )
}

export default Header
