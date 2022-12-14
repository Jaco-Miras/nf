import { Link } from "@mui/material";
import Head from "next/head";
import React from "react";

function account() {
  return (
    <div>
      <Head>
        <title>Account Setting - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={`bg-[#141414]`}>
        <Link href="/">
          <img
            src="https://rb.gy/ulxxee"
            width={120}
            height={120}
            className="cursor-pointer object-contain"
          />
        </Link>
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </header>

      <main className="pt-24">
        <div>
          <h1 className="text-3xl md:text-4xl">Account</h1>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default account;
