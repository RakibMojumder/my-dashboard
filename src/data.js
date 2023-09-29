import { MdOutlineDashboard, MdEmail } from "react-icons/md";
import { IoSettingsSharp } from 'react-icons/io5';
import { IoIosChatboxes } from 'react-icons/io'
import { AiFillContacts } from 'react-icons/ai';
import { SlCalender } from 'react-icons/sl';
import { BiSolidVideos } from 'react-icons/bi';
import { GiShop } from 'react-icons/gi';
import { FaFileInvoiceDollar } from 'react-icons/fa';

export const links = [
    {
        id: 101,
        label: 'Dashboard',
        href: '/',
        icon: MdOutlineDashboard
    },
    {
        id: 102,
        label: 'Email',
        href: '/email',
        icon: MdEmail
    },
    {
        id: 103,
        label: 'Chat',
        href: '/chat',
        icon: IoIosChatboxes
    },
    {
        id: 104,
        label: 'Contact',
        href: '/contact',
        icon: AiFillContacts
    },
    {
        id: 105,
        label: 'Calender',
        href: '/calender',
        icon: SlCalender
    },
    {
        id: 106,
        label: 'Courses',
        href: '/courses',
        icon: BiSolidVideos
    },
    {
        id: 107,
        label: 'Shop',
        href: '/shop',
        icon: GiShop
    },
    {
        id: 108,
        label: 'Invoices',
        href: '/invoices',
        icon: FaFileInvoiceDollar
    },
    {
        id: 109,
        label: 'Settings',
        href: '/settings',
        icon: IoSettingsSharp
    },
]