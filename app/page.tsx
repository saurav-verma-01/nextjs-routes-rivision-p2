// import React from 'react'

import Link from "next/link";

const page = () => {
  return (
    <main>
      <h1>Home Page</h1>

      <Link href="/projects/list">
        <h2>See Projects</h2>
      </Link>
    </main>
  );
};

export default page;
