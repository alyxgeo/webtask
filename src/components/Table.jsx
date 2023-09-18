import { useEffect, useState } from "react"
import { getUser } from "../services/apiUser"
import EditForm from "./EditForm";
import Search from "./Search";



const Table = () => {

    const [isOpen, setIsOpen] = useState(false)

    const [search, setSearch] = useState('')
    //console.log(search)

    const [users, setUsers] = useState([]);

    const [editUser, setEditUser] = useState('')





    useEffect(() => {

        async function loader() {
            const data = await getUser();
            //console.log(data)

            setUsers(data)

        }

        loader();

    }, [])




    const handleSearch = (inputText) => {
        setSearch(inputText);
    }




    const handleEdit = (user) => {
        setIsOpen(true)
        setEditUser(user)
    }


    const handleOpen = (val) => {
        setIsOpen(val)
    }




    return (

        <>
            {!isOpen ? (

                <div>
                    <Search handleSearch={handleSearch} />
                    <div className="mt-7 flex " >
                        <table className="w-[100%]" >
                            <thead >
                                <tr className="border border-stone-950 ">
                                    <th className="w-[50px] bg-lime-300">No</th>
                                    <th className="w-[500px] bg-lime-600">Email</th>
                                    <th className="w-[300px] bg-teal-400">Name</th>
                                    <th className="w-[200px] bg-violet-400">operations</th>
                                </tr>
                            </thead>

                            <tbody>

                                {users.filter((user) => {

                                    return search.toLowerCase() === '' ? user :
                                        user.first_name.toLowerCase().includes(search)
                                })

                                    .map((user, i) => (

                                        <tr key={i}>
                                            <td className="text-center">{i + 1}</td>
                                            <td className="text-center">{user.email}</td>
                                            <td className="text-center">{user.first_name}</td>

                                            <td className="text-center">
                                                <button className=" text-white bg-red-500 w-[60px]
                                                 h-[35px] rounded-[10px]"
                                                    onClick={() => handleEdit(user)}
                                                >edit</button>
                                            </td>
                                        </tr>

                                    ))}

                            </tbody>
                        </table>
                    </div>

                </div>
            )

                : <EditForm user={editUser} handleOpen={handleOpen} />


            }
        </>
    )
}

export default Table