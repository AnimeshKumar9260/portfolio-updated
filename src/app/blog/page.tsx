"use client";

import { blogDat } from "@/data/blogData";
import { useState } from "react";
import BlogCard from "@/components/blog/BlogCard";

export default function BlogPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="py-8">
      <h1 className="text-5xl text-[var(--foreground)] font-semibold mb-8">
        My <span className="text-[var(--accent)]">blog</span>.
      </h1>
      <form className="flex items-center justify-between gap-4 mb-12">
        <input
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          type="text"
          className="bg-[var(--background)] border-2 border-[var(--foreground)]/10 flex-1 rounded-md py-2 px-4 text-sm"
          placeholder="Start typing to search..."
        />
        <button
          type="reset"
          onClick={() => setSearch("")}
          className="flex justify-center text-[var(--foreground)] group/action items-center cust-anim-1 hov-blu gap-3 border-2 border-[var(--foreground)]/10 px-4 py-1 rounded-md cursor-pointer"
        >
          Clear
        </button>
      </form>
      <div className="grid grid-cols-1 gap-4">
        {blogDat
          .filter((item) =>
            item.head.toLowerCase().replace(/ /g, "").includes(search),
          )
          .map((item, index) => {
            return <BlogCard big={false} key={index} {...item} />;
          })}
      </div>
    </div>
  );
}
