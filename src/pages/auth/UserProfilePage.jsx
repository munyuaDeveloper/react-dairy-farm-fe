import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import profileImage from '../../assets/peter.jpg'
import Breadcrumb from '../../components/Breadcrumb';

const UserProfilePage = () => {
  const { userDetails } = useAuth();
  const { profile } = userDetails;
  
  return (
    <>
      <Breadcrumb activePage="User Profile"/>
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow flex p-5">
      <div className="flex flex-col items-center pb-10 w-full">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg object-cover" src={profileImage} alt="user image" />
        <h5 className="mb-1 text-xl font-medium text-gray-900">{profile.first_name} {profile.last_name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{profile.role}</span>
      </div>


      <form class="mx-auto w-full">
        <h3 className="text-xl mb-3">Update Account Details</h3>
        <div class="mb-5">
          <label forHTML="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
          <input disabled type="email" value={profile.email} class="shadow-sm bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-900 focus:border-sky-900 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-sky-900 dark:focus:border-sky-900 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
        </div>
        <div class="mb-5">
          <label forHTML="password" class="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
          <input type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-900 focus:border-sky-900 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-sky-900 dark:focus:border-sky-900 dark:shadow-sm-light" required />
        </div>
        <div class="mb-5">
          <label forHTML="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 ">Repeat password</label>
          <input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-900 focus:border-sky-900 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-sky-900 dark:focus:border-sky-900 dark:shadow-sm-light" required />
        </div>

        <button type="submit" class="w-full text-white bg-sky-800 hover:bg-sky-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-800 dark:hover:bg-sky-900 dark:focus:ring-syk-800">Update Account Details</button>
      </form>

    </div>
    </>
 
  );
};

export default UserProfilePage;