import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi';
import './Featured.css';

const Featured = () => {
    const [data, setData] = useState(null);

    // ----- Using coingecko api -----

    const url =
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en';

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // ----If there are any errors from no data -----
    if (!data) return null;

    console.log(data);

    return (
        <div className='featured'>
            <div className='container'>
                {/* ----- Left  -----  */}
                <div className='left'>
                    <h2>
                        Top Cryptocurrencies: Bitcoin, Ethereum, and Dogecoin
                    </h2>
                    <p>See All Available Assets, Including NFT's</p>
                    <button className='btn'>See More Coins</button>
                </div>
                {/* ----- Right  -----  */}
                <div className='right'>
                    <div className='card'>
                        <div className='top'>
                            <img src={data[0].image} alt='data' />
                        </div>
                        <div>
                            <h5>{data[0].name}</h5>
                            <p>${data[0].current_price.toLocaleString()}</p>
                        </div>

                        {/* ----- Display percentage change with up or down arrow ----- */}
                        {data[0].price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown />
                                {data[0].price_change_percentage_24h.toFixed(2)}
                                %
                            </span>
                        ) : (
                            <span className='green'>
                                <FiArrowUpRight />
                                {data[0].price_change_percentage_24h.toFixed(2)}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
