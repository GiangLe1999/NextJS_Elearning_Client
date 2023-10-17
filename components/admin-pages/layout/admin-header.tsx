"use client";

import ThemeSwitcher from "@/components/layout/theme-switcher";
import {
  useGetAllNotificationsQuery,
  useUpdateNotifcationStatusMutation,
} from "@/store/notification/notification-api";
import { FC, useState, useEffect } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

interface Props {}

const AdminHeader: FC<Props> = (props): JSX.Element => {
  const [open, setOpen] = useState(false);
  const { data, refetch } = useGetAllNotificationsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const [updateNotificationStatus, { isSuccess }] =
    useUpdateNotifcationStatusMutation();

  const [notifications, setNotifications] = useState([]);

  const handleNotificationStatusChange = async (id: string) => {
    await updateNotificationStatus(id);
  };

  return (
    <div className="flex items-center justify-end fixed p-6 top-2 right-8">
      <ThemeSwitcher />
      <div
        className="relative cursor-pointer m-2"
        onClick={() => setOpen(!open)}
      >
        <IoMdNotificationsOutline className="text-2xl cursor-pointer dark:text-dark_text text-black -mt-1" />
        <span className="absolute -top-[10px] -right-2 bg-[#3ccba0] rounded-full w-5 h-5 text-xs flex items-center justify-center text-dark_text">
          {notifications.length && notifications.length}
        </span>
      </div>

      {open && (
        <div className="w-[350px] h-[450px] dark:bg-[#111C43] bg-white shadow-xl border dark:border-slate-700 absolute top-16 !z-[9999] rounded">
          <h5 className="text-center text-[20px] text-black dark:text-dark_text p-3">
            Notifications
          </h5>

          {notifications &&
            notifications.map((item: any, index: number) => (
              <div
                key={index}
                className="dark:bg-[#2d3a4ea1] bg-[#00000013] border-b dark:border-b-[#ffffff47] border-b-[#0000000f]"
              >
                <div className="w-full flex items-center justify-between p-2">
                  <p className="text-tertiary dark:text-dark_text">
                    {item.title}
                  </p>
                  <p
                    className="text-tertiary dark:text-dark_text cursor-pointer"
                    onChange={() => handleNotificationStatusChange(item._id)}
                  >
                    Mark as read
                  </p>
                </div>

                <p className="px-2 text-tertiary dark:text-dark_text text-sm">
                  {item.message}
                </p>
                <p className="p-2 text-tertiary dark:text-dark_text text-sm">
                  {timeAgo.format(new Date(item.createdAt))}
                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default AdminHeader;
