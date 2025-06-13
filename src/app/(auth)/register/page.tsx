'use client';

import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
  const router = useRouter()
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      } else {
        router.push('/login');
      }

      toast.success(data.message || 'User created successfully!');
      setForm({ email: '', username: '', password: '' });
    } catch (error: any) {
      console.log(error);
      toast.error(error?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex gap-4 flex-col justify-center items-center">
          <p className="py-4 text-xl font-semibold">Register</p>

          <div className="flex flex-col md:w-96 w-72 gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="dark:bg-[#1E1E1E] font-semibold outline-0 bg-gray-200 px-2 py-3 rounded-lg"
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              required
              className="dark:bg-[#1E1E1E] font-semibold outline-0 bg-gray-200 px-2 py-3 rounded-lg"
            />
            <input
              type="text"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="dark:bg-[#1E1E1E] font-semibold bg-gray-200 px-2 py-3 rounded-lg outline-0"
            />
          </div>

          <div className="flex flex-col gap-3">
            <button
              type="submit"
              disabled={loading}
              className="bg-white transition-colors border border-[#D5D5D5] dark:border-[#2D2D2D] text-black py-2 md:w-96 w-72 rounded-lg font-semibold hover:bg-gray-100"
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
            <Link href="/login">
              <button className="bg-white transition-colors border border-[#D5D5D5] dark:border-[#2D2D2D] text-black py-2 md:w-96 w-72 rounded-lg font-semibold hover:bg-gray-100">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </form>
  );
};

export default RegisterPage;
