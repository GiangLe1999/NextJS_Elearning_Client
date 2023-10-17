"use client";

import { useRouter } from "next/navigation";
import { FC, FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiSearch } from "react-icons/bi";

interface Props {}

const SearchBar: FC<Props> = (props): JSX.Element => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const searchHandler = (e: FormEvent) => {
    e.preventDefault();

    if (query.trim().length > 0) {
      router.push(`/search/${query}`);
    } else {
      toast.error("Please enter at least one character!");
      return;
    }
  };

  return (
    <form className="flex items-center h-[50px] mt-3" onSubmit={searchHandler}>
      <input
        type="search"
        placeholder="Search Courses..."
        className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-l-[5px] px-2 h-full flex-1 outline-none font-josefin"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="w-[50px] main-gradient rounded-r-[5px] text-dark_text grid place-items-center h-full"
      >
        <BiSearch size={30} />
      </button>
    </form>
  );
};

export default SearchBar;
