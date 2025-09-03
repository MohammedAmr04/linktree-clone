'use client';

import * as React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Apple } from 'lucide-react';
import Image from 'next/image';

export default function SignupPage() {
  const [email, setEmail] = React.useState('');

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: integrate with backend
  }

  return (
    <div className="max-w-[480px] px-4 md:px-0 mx-auto text-center pb-4 pt-13 md:pt-26">
      <div className="pb-3 ">
        <h1 className="text-5xl font-extrabold tracking-tight pb-4">Join Linktree</h1>
        <p className="text-muted-foreground">Signup for free!</p>
      </div>

      <form className="mt-9 space-y-6" onSubmit={onSubmit}>
        <Input
          id="email"
          type="text"
          placeholder="Email or username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 text-base bg-auth-input border-none ring-border hover:ring-1 focus-visible:ring-1"
        />

        <Button
          type="submit"
          variant="authBtn"
          size="authBtn"
          shape="pill"
          disabled={!email}
          className="disabled:bg-ring text-[1rem] disabled:text-primary">
          Continue
        </Button>

        <p className="text-muted-foreground">
          By clicking <span className="font-medium">Create account</span>, you agree to Linktree's{' '}
          <span className="underline">privacy notice</span>, <span className="underline">T&Cs</span>{' '}
          and to receive offers, news and updates.
        </p>
      </form>

      <div className="relative py-4 m-0">
        <div className="flex justify-center items-center">
          <span className=" text-muted-foreground">OR</span>
        </div>
      </div>

      <div className=" font-bold">
        <Button
          variant="outline"
          className="h-12 w-full mb-2 justify-center gap-3 font-semibold text-[1rem]"
          shape="pill">
          <Image src="auth/google.svg" width="24" height="24" alt="Google"></Image> Sign up with
          Google
        </Button>

        <Button
          variant="outline"
          className="h-12 w-full justify-center gap-3 text-[1rem]"
          shape="pill">
          <Image src="auth/apple.svg" width="32" height="32" alt="Apple"></Image>
          Sign up with Apple
        </Button>
      </div>

      <div className="text-sm pt-8 text-muted-foreground">
        <p>
          Already have an account?{' '}
          <Link href="/login" className="text-auth-link underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
