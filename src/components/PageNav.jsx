import { NavLink } from "react-router-dom"


const PageNav = () => {


    return (
        <nav className=" bg-orange-400" >

            <ul className="flex items-center justify-end gap-[3rem] mr-[50px]  h-[40px] ">
                <li>
                    <NavLink to='/home'>Home</NavLink>
                </li>

                <li>
                    <NavLink to='/customer'>Customer</NavLink>
                </li>


            </ul>

        </nav>
    )
}

export default PageNav