import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { register } from '../axios';

const SignUp = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullname: "",
        password: "",
        phoneNumber: "",
        email: "",
    });
    return (
        <div class="flex items-center h-screen w-full">
            <div class="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
                <span class="block w-full text-xl uppercase font-bold mb-4">Login</span>
                <form onSubmit={(e) => {
                    e.preventDefault();

                    register(formData)
                        .then((res) => {
                            navigate("/signin");
                        })
                        .catch((err) => console.log(err));
                }} class="mb-4" action="/" method="post">
                    <div class="mb-4 md:w-full">
                        <label for="email" class="block text-xs mb-1">Username</label>
                        <input onChange={(e) => setFormData({ ...formData, fullname : e.target.value })} class="w-full border rounded p-2 outline-none focus:shadow-outline" type="name" name="text" id="text" placeholder="Username " />
                    </div>
                    <div class="mb-4 md:w-full">
                        <label for="email" class="block text-xs mb-1"> Email</label>
                        <input onChange={(e) => setFormData({ ...formData, email: e.target.value })} class="w-full border rounded p-2 outline-none focus:shadow-outline" type="email" name="email" id="email" placeholder="Email" />
                    </div>
                    <div class="mb-4 md:w-full">
                        <label for="email" class="block text-xs mb-1"> phoneNumber</label>
                        <input onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} class="w-full border rounded p-2 outline-none focus:shadow-outline" type="text" name="text" id="text" placeholder="Phone Number" />
                    </div>
                    <div class="mb-6 md:w-full">
                        <label for="password" class="block text-xs mb-1">Password</label>
                        <input onChange={(e) => setFormData({ ...formData, password: e.target.value })} class="w-full border rounded p-2 outline-none focus:shadow-outline" type="password" name="password" id="password" placeholder="Password" />
                    </div>
                   

                    <button type='submit' class="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">Login</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp