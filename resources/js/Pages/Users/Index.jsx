import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Link, usePage } from "@inertiajs/react";

const Index = () => {
    const { users } = usePage().props;
    console.log(users);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Usuarios
                </h2>
            }
        >
            <Head title="Usuarios" />

            <div className="p-12">
                <div className="overflow-x-auto bg-white p-4 max-w-screen-xl mx-auto">
                    <div className="relative m-[2px] mb-3 mr-5 float-left">
                        <label htmlFor="inputSearch" className="sr-only">
                            Search{" "}
                        </label>
                        <input
                            id="inputSearch"
                            type="text"
                            placeholder="Search..."
                            className="block w-64 rounded-lg border py-2 pl-10 pr-4 text-sm focus:border-green-400 focus:outline-none focus:ring-1 focus:ring-blue-400"
                        />
                        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 transform">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4 text-neutral-500 dark:text-neutral-200"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                />
                            </svg>
                        </span>
                    </div>
                    <div className="relative m-[2px] mb-3 float-right hidden sm:block">
                        <button
                            className="
                                    px-4
                                    py-2
                                    rounded-full
                                    shadow
                                    bg-mainbutton
                                    "
                        >
                            +
                        </button>
                    </div>

                    <table className="min-w-full text-left text-sm whitespace-nowrap">
                        <thead className="uppercase tracking-wider border-b-2 dark:border-neutral-600">
                            <tr>
                                <th scope="col" className="px-6 py-4">
                                    #CODIGO
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    NOMBRE
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    TELEFONO
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    EMAIL
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    ROL
                                </th>
                                <th scope="col" className="px-6 py-4">
                                    ACCION
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.data.length > 0 ? (
                                users.data.map((user) => (
                                    <tr
                                        className="border-b hover:bg-neutral-50 "
                                        key={user.id}
                                    >
                                        <th scope="row" className="px-6 py-4">
                                            {user.id}
                                        </th>
                                        <td className="px-6 py-4">
                                            {user.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {user.phone}
                                        </td>
                                        <td className="px-6 py-4">
                                            {user.email}
                                        </td>
                                        <td className="px-6 py-4">
                                            {user.role.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            Editer | Eliminar
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="6"
                                        className="px-6 py-4 text-center"
                                    >
                                        No hay registros
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <nav
                        className="mt-5 flex items-center justify-between text-sm"
                        aria-label="Page navigation example"
                    >
                        {users.links.map((link, index) =>
                            link.url ? (
                                <Link
                                    key={index}
                                    href={link.url}
                                    className={`px-3 py-2 rounded-lg ${
                                        link.active
                                            ? "bg-mainbutton text-white"
                                            : "text-mainbutton"
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ) : (
                                <span
                                    key={index}
                                    href={link.url}
                                    className={`px-3 py-2 rounded-lg ${
                                        link.active
                                            ? "bg-mainbutton text-white"
                                            : "text-mainbutton"
                                    }`}
                                ></span>
                            )
                        )}
                    </nav>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
