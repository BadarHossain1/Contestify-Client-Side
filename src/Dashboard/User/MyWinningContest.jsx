import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { axiosSecure } from '../../Hooks/useAxiosSecure';

const MyWinningContest = () => {
    const [contests, setContest] = useState([]);







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
                contests && contests.map((detail, index) => <article key={index}  className="flex bg-white transition hover:shadow-xl">
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
        </div>
    );
};

export default MyWinningContest;