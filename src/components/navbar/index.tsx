import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { cx } from "class-variance-authority";
import { useRouter } from "next/router";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Criar eventos", href: "/new-event", current: false },
  // { name: "Projects", href: "#", current: false },
  // { name: "Calendar", href: "#", current: false },
];
const userNavigation = [
  { name: "Perfil", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

export default function Navbar() {
  const {pathname} = useRouter();

  const verifyCurrent = (href: string) => {
    return pathname === href;
  }
   
  

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="border-b border-border bg-background">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                  <div className="flex">
                    <div className="flex flex-shrink-0 items-center">
                      <img
                        className="block h-8 w-auto lg:hidden "
                        src="/logo/logo.png"
                      />
                      <img
                        className="hidden h-8 w-auto lg:block scale-150"
                        src="/logo/logo.png"
                      />
                    </div>
                    <div className="hidden sm:-my-px sm:ml-20 sm:flex sm:space-x-8">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={cx(
                            verifyCurrent(item.href)
                              ? "border-primary text-foreground"
                              : "border-transparent text-foreground hover:border-border hover:text-foreground",
                            "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium",
                          )}
                          // aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={user.imageUrl}
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-background py-1 shadow-lg ring-1 ring-foreground ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={cx(
                                    active ? "bg-background" : "",
                                    "block px-4 py-2 text-sm text-muted-foreground",
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                  <div className="-mr-2 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-background p-2 text-foreground hover:bg-gray-100 hover:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-transparent focus:ring-offset-2">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 pb-3 pt-2">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={cx(
                        verifyCurrent(item.href)
                          ? "border-primary bg-background text-primary/80"
                          : "border-transparent text-muted-foreground hover:border-border hover:bg-background hover:text-foreground",
                        "block border-l-4 py-2 pl-3 pr-4 text-base font-medium",
                      )}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                {/* <div className="border-t border-border pb-3 pt-4">
                  <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-foreground">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium text-muted-foreground">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-background p-1 text-muted-foreground hover:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-transparent focus:ring-offset-2"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-4 py-2 text-base font-medium text-foreground hover:bg-primary-foreground hover:text-muted-foreground"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div> */}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className="py-10">
          <header></header>
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              {/* Your content */}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
