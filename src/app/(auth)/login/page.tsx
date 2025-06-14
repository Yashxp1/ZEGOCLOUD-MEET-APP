'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const page = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const signInData = await signIn('credentials', {
       redirect: false,
      email: form.email,
      password: form.password,
    });
    console.log(signInData);
    if (signInData?.error) {
      toast.error(signInData.error);
    } else {
      toast.success('Logged in successfully');
      router.push('/home');
    }

    setLoading(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex gap-4 flex-col justify-center items-center">
          <div>
            <p className="py-4 text-xl font-semibold">
              Login in with your email{' '}
            </p>
          </div>
          <div className="flex flex-col md:w-96 w-72 gap-4">
            <input
              placeholder="Email"
              type="email"
              name='email'
              value={form.email}
              onChange={handleChange}
              required
              className="dark:bg-[#1E1E1E] font-semibold outline-0 bg-gray-200 px-2 py-3 rounded-lg"
            />

            <input
              placeholder="Password"
              name='password'
              type="password"
              value={form.password}
              required
              onChange={handleChange}
              className="dark:bg-[#1E1E1E] font-semibold bg-gray-200 px-2 py-3 rounded-lg outline-0"
            />
          </div>
          <div className="flex flex-col gap-3">
            <button
              type="submit"
              className=" bg-white transition-colors border border-[#D5D5D5] dark:border-[#2D2D2D] text-black py-2 md:w-96 w-72 rounded-lg font-semibold hover:bg-gray-100"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
            <Link href={'/register'}>
              <button className=" bg-white transition-colors border border-[#D5D5D5] dark:border-[#2D2D2D] text-black py-2 md:w-96 w-72 rounded-lg font-semibold hover:bg-gray-100">
                Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default page;
