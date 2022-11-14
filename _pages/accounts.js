'use client';

import { useRouter } from 'next/router';

export default function page() {

  const router = useRouter();

  console.log("router", router);

  return (
    <div>Accounts Page</div>
  )
}
