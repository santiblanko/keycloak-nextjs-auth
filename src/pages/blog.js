import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
const signInUrl = `http://localhost:8080/auth/realms/master/protocol/openid-connect/auth?client_id=my-client&scope=openid%20profile%20email%20offline_access&response_type=code&blackirect_uri=http://localhost:3000/api/auth/callback`;
import { Fragment } from 'react';

const navigation = [
  { name: 'Index', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Marketplace', href: '/marketplace' },
  { name: 'Company', href: '/company' }
];

const posts = [
  {
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16'
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    description:
      'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10'
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    description:
      'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12'
  },
  {
    title: 'Writing effective landing page copy',
    href: '#',
    description:
      'Ipsum voluptates quia doloremque culpa qui eius. Id qui id officia molestias quaerat deleniti. Qui facere numquam autem libero quae cupiditate asperiores vitae cupiditate. Cumque id deleniti explicabo.',
    date: 'Jan 29, 2020',
    datetime: '2020-01-29'
  }
];

export default function Example() {
  return (
    <div>
      <Popover>
        <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
          <nav
            className="relative flex items-center justify-between sm:h-10 lg:justify-start"
            aria-label="Global"
          >
            <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
              <div className="flex w-full items-center justify-between md:w-auto">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt="Your Company"
                    className="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/mark.svg?color=black&shade=600"
                  />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black-500">
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
              {navigation.map(item =>
                <a
                  key={item.name}
                  href={item.href}
                  className="font-medium text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </a>
              )}
              <a
                href={signInUrl}
                className="font-medium text-black-600 hover:text-black-500"
              >
                Log in
              </a>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
              <div className="flex items-center justify-between px-5 pt-4">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=black&shade=600"
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black-500">
                    <span className="sr-only">Close main menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map(item =>
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                )}
              </div>
              <a
                href={signInUrl}
                className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-black-600 hover:bg-gray-100"
              >
                Log in
              </a>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <div className="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Latest Blog Posts
            </h2>
            <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:items-center lg:gap-5">
              <p className="text-xl text-gray-500">
                Get weekly articles in your inbox on how to grow your business.
              </p>
              <form className="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email-address"
                    type="email"
                    autoComplete="email"
                    requiblack
                    className="w-full appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 focus:border-black-500 focus:outline-none focus:ring-black-500 lg:max-w-xs"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mt-2 flex w-full flex-shrink-0 rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:inline-flex sm:w-auto">
                  <button
                    type="button"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-black px-4 py-2 text-base font-medium text-white hover:bg-black-700 focus:outline-none focus:ring-2 focus:ring-black-500 focus:ring-offset-2 sm:inline-flex sm:w-auto"
                  >
                    Notify me
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-6 grid gap-16 pt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {posts.map(post =>
              <div key={post.title}>
                <p className="text-sm text-gray-500">
                  <time dateTime={post.datetime}>
                    {post.date}
                  </time>
                </p>
                <a href="#" className="mt-2 block">
                  <p className="text-xl font-semibold text-gray-900">
                    {post.title}
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    {post.description}
                  </p>
                </a>
                <div className="mt-3">
                  <a
                    href={post.href}
                    className="text-base font-semibold text-black-600 hover:text-black-500"
                  >
                    Read full story
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
