import { useState } from "react"

const EditForm = ({ user, handleOpen }) => {

    //console.log(user)


    const { email, first_name, last_name, id } = user



    const [fName, setFname] = useState(first_name)
    const [lName, setLname] = useState(last_name)
    const [userEmail, setUserEmail] = useState(email)






    const updateUser = (event) => {
        event.preventDefault()

        let item = { email: userEmail, first_name: fName, last_name: lName, }
        //console.log(item)

        fetch(`https://reqres.in/api/users/${id}`, {

            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item)

        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp)

            })
        })

        handleOpen(false);
    }



    return (

        <div className="flex justify-center ">

            <form >

                <div className="h-[347.99px] w-[422.64px] bg-[#FFFFFF] mt-[20px] rounded-[10px]">

                    <div className=" ml-[33px] pt-[20px]">
                        <label htmlFor="email">Email address</label>
                        <input
                            className="w-[356.77px] h-[43.91px] bg-[#EAEAEA] mt-[10px] rounded-[10px]"
                            type="email" id="email" placeholder="email"
                            value={userEmail} onChange={(e) => setUserEmail(e.target.value)}
                        />
                    </div>


                    <div className="ml-[33px] pt-[20px]" >
                        <label htmlFor="FirstName">First Name</label>
                        <input
                            className="w-[356.77px] h-[43.91px] bg-[#EAEAEA] mt-[10px] rounded-[10px]"
                            type="text" id="fname" placeholder="first name"

                            value={fName} onChange={(e) => setFname(e.target.value)}
                        />


                    </div>



                    <div className="ml-[33px] pt-[20px]" >
                        <label htmlFor="LastName">Last Name</label>
                        <input
                            className="w-[356.77px] h-[43.91px] bg-[#EAEAEA] mt-[10px] rounded-[10px]"
                            type="text" id="lname" placeholder="last name"
                            value={lName} onChange={(e) => setLname(e.target.value)}

                        />
                    </div>


                    <div className="ml-[33px] mt-[20px]">
                        <button className="bg-[#4285F4] w-[356.77px] h-[43.91px]
                         rounded-[10px] text-[#FFFFFF]"
                            onClick={updateUser}
                        >Save Changes</button>
                    </div>

                </div>

            </form>

        </div>
    )
}

export default EditForm