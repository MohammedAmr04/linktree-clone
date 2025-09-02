// app/(auth)/login/page.tsx
'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Apple } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = React.useState('');

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: integrate with backend
  }

  return (
    <div className="max-w-[480px] px-4 md:px-0 mx-auto text-center pb-4 pt-13 md:pt-26">
      <div className="pb-3 ">
        <h1 className="text-3xl font-extrabold tracking-tight pb-3">Welcome back</h1>
        <p className=" text-muted-foreground">Log in to your Linktree</p>
      </div>

      <form className="mt-9" onSubmit={onSubmit}>
        <div>
          <Input
            id="email"
            type="text"
            placeholder="Email or username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 text-base"
          />
        </div>

        <Button type="submit" className="h-12 w-full mt-2 text-base rounded-xl">
          Continue
        </Button>
      </form>

      <div className="relative py-4 m-0">
        <div className="flex justify-center items-center">
          <span className=" text-muted-foreground">OR</span>
        </div>
      </div>

      <div className=" font-bold">
        <Button variant="outline" className="h-12 w-full mb-2 rounded-xl justify-center gap-3">
          Continue with Google
        </Button>

        <Button variant="outline" className="h-12 w-full rounded-xl justify-center gap-3">
          <Apple className="h-5 w-5" />
          Continue with Apple
        </Button>
      </div>

      <div className="text-sm pt-6 font-medium">
        <div className="text-center pt-6.5 text-purple-600 ">
          <Link href="#" className="hover:underline">
            Forgot password?
          </Link>
          <span className="text-muted-foreground mx-0.5">•</span>
          <Link href="#" className="hover:underline">
            Forgot username?
          </Link>
        </div>

        <p className="text-center text-muted-foreground mt-4">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-purple-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
