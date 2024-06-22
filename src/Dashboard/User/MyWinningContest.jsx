import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { axiosSecure } from '../../Hooks/useAxiosSecure';

const MyWinningContest = () => {
    const [contests, setContest] = useState([]);
    const count = contests.length;
    console.log(count);

    const itemPerPage = 10;
    const numberOfPages = Math.ceil(count / itemPerPage);

    const pages = [...Array(numberOfPages).keys()];
    console.log(pages);






    const { data, refetch } = useQuery({
        queryKey: ['MyCreatedContest'],
        queryFn: async () => {
            const response = await axiosSecure.get('/submittedContest');
            setContest(response.data);

            return response.data;
            refetch();

        }

    })
    return (
        <div>
            {
                contests && contests.map((detail, index) => <article key={index} className="flex bg-white transition hover:shadow-xl">
                    <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                        <time
                            datetime="2022-10-10"
                            className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                        >
                            {detail?.Category}
                        </time>
                    </div>

                    <div className="hidden sm:block sm:basis-56">
                        <img
                            alt=""
                            src={detail?.Image}
                            className="aspect-square h-full w-full object-cover"
                        />
                    </div>

                    <div className="flex flex-1 flex-col justify-between">
                        <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                            <a href="#">
                                <h3 className="font-bold uppercase text-gray-900">
                                    {detail?.Name}
                                </h3>
                            </a>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                                {detail?.Description}
                            </p>
                            <p className='mt-4'>Price: {detail?.Price}$</p>
                        </div>

                        <div className="sm:flex sm:items-end sm:justify-end">
                            <a
                                href="#"
                                className="block bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-gradient-to-r from-indigo-500 to-blue-600"
                            >
                                Winner
                            </a>
                        </div>
                    </div>
                </article>)
            }
            {<div class="max-w-full mx-auto mt-4 rounded-xl  bg-gradient-to-r  from-indigo-400 to-blue-400  dark:bg-gray-800">
                <div class="container flex flex-col items-center px-6 py-2 mx-auto space-y-6 sm:flex-row sm:justify-between sm:space-y-0 ">
                    <div class="-mx-2">
                        {pages.map((pata, index) => <a key={index} class="inline-flex items-center justify-center px-4 py-1 mx-2 text-gray-700 transition-colors duration-300 transform bg-gray-100 rounded-lg dark:text-white dark:bg-gray-700">
                            {parseInt(pata) + 1}
                        </a>)}


                    </div>

                    <div class="text-white dark:text-gray-400">
                        <span class="font-medium text-white dark:text-white">1 - 10</span> of {contests?.length} records
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default MyWinningContest;