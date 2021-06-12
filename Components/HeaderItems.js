function HeaderItems({title, Icon}) {       //this will take 2 props from the Header.js page
    return (
        <div className='flex flex-col items-center cursor-pointer group
        w-12 sm:w-20 hover:text-pink-200'> 
        {/* adding className group  so when hovering over either Icon or text means the title appears */}
            <Icon className='h-8 mb-1 group-hover:animate-bounce'/>
            <p className=' opacity-0 group-hover:opacity-100 tracking-widest'>{ title }</p>
        </div>
    )
}

export default HeaderItems
