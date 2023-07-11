import React from 'react'
import Item from './Item'
import {IoMdSettings} from 'react-icons/io'
import {BsQuestionCircleFill} from 'react-icons/bs'
import {FaMoon} from 'react-icons/fa'
import {BiSolidMessageError} from 'react-icons/bi'
import {ImExit} from 'react-icons/im'
import { useSession, signOut } from 'next-auth/react';
import axios from "axios";

export default function Index() {

    const { data: session } = useSession();

    const { image } = session?.user;

    const handleLogout = async () => {
        console.log(session);
        await axios.post('/api/user/logout', session)
          .then((res) => {
            signOut();
          });
      }

    return (
        <div className='px-3 mt-0'>
            <Item Icon={IoMdSettings} title="Settings & privacy" isRight={true} />
            <Item Icon={BsQuestionCircleFill} title="Help & support" isRight={true} />
            <Item Icon={FaMoon} title="Display & accessibility" isRight={true} />
            <Item Icon={BiSolidMessageError} title="Give feedback" isRight={false} />
            <Item Icon={ImExit} title="Log Out" isRight={false} action={handleLogout}/>
        </div>
    )
}
