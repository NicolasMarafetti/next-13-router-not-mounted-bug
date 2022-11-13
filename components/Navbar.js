'use client';

import Link from 'next/link';
import React, { useState } from 'react'

export default function Navbar() {
  return (
    <nav>
      <div>
        <div id="navbar-sticky">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/accounts">Accounts (page with bug)</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}
