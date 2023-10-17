import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { profileItemsData } from "@/data/profile-items";
import { signOut } from "next-auth/react";
import LoggedinUserAvatar from "../loggedin-user-avatar";
import useIsAdmin from "@/hooks/useIsAdmin";
import Link from "next/link";
import { useLogoutMutation } from "@/store/auth/auth-api";
import { useRouter } from "next/navigation";

interface Props {
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
}

const common =
  "flex items-center py-4 pl-4 max-[800px]:pl-[18px] max-[600px]:pl-4 cursor-pointer gap-2 text-[20px] max-[600px]:text-base";

const ProfileSidebar: FC<Props> = ({ active, setActive }): JSX.Element => {
  const isAdmin = useIsAdmin();
  const router = useRouter();

  const [logout] = useLogoutMutation();

  const logoutHandler = async () => {
    await signOut({ redirect: false });
    await logout({});
    router.push("/");
  };

  return (
    <div className="w-[310px] max-[800px]:w-[60px] max-[600px]:w-[50px] block-wrapper h-fit pb-2 overflow-hidden">
      <div
        className={`w-full py-4 flex items-center gap-x-2 px-3 rounded-t-[5px] cursor-pointer ${
          active === 1
            ? "bg-slate-600 dark:bg-tertiary text-dark_text"
            : "bg-transparent"
        }`}
        onClick={() => setActive(1)}
      >
        <div className="w-8 aspect-square relative rounded-full overflow-hidden border">
          <LoggedinUserAvatar />
        </div>

        <h1 className="max-[800px]:hidden">My Account</h1>
      </div>

      {profileItemsData.map((item, index) => {
        if (isAdmin && index === 2)
          return (
            <Link
              href="/admin"
              className={`${common} ${
                active === 4
                  ? "bg-slate-600 dark:bg-tertiary text-dark_text"
                  : "bg-transparent"
              }`}
              key={2}
              onClick={() => {
                setActive(4);
              }}
            >
              {item.icon({})}
              <span className="max-[800px]:hidden text-base">{item.title}</span>
            </Link>
          );

        return (
          <div
            className={`${common} ${
              active === index + 2
                ? "bg-slate-600 dark:bg-tertiary text-dark_text"
                : "bg-transparent"
            }`}
            key={index}
            onClick={() => {
              !item.isLogout ? setActive(index + 2) : logoutHandler();
            }}
          >
            {item.icon({})}
            <span className="max-[800px]:hidden text-base">{item.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileSidebar;
