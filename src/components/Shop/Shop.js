import React from 'react';

const Shop = () => {
    return (
        <div className='mx-auto grid grid-cols-12 gap-5'>
            <div className='lg:col-span-9 col-span-12 mx-auto mt-10'>

                <div className='lg:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>

                    <div className="card bg-info shadow-xl">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Product Name
                            </h2>
                            <h3 className='text-left text-xl text-primary font-semibold'>
                                Price: $<span>190</span>
                            </h3>

                            <p className='text-left font-bold'>
                                Manufacturer :
                                <span className="badge badge-accent ml-2 font-normal"> Addidas</span>
                            </p>
                            <p className='text-left font-bold'>
                                Rating :
                                <span className="badge badge-accent ml-2 font-normal"> 3 star</span>
                            </p>
                            <div className="card-actions justify-end">
                                <button className='btn btn-sm btn-warning'>Add to Cart</button>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-info shadow-xl">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Product Name
                            </h2>
                            <h3 className='text-left text-lg text-primary font-semibold'>
                                Price: $<span>190</span>
                            </h3>

                            <p className='text-left font-bold'>
                                Manufacturer :
                                <span className="badge badge-accent ml-2 font-normal"> Addidas</span>
                            </p>
                            <p className='text-left font-bold'>
                                Rating :
                                <span className="badge badge-accent ml-2 font-normal"> 3 star</span>
                            </p>
                            <div className="card-actions justify-end">
                                <button className='btn btn-sm btn-warning'>Add to Cart</button>
                            </div>
                        </div>
                    </div>


                    <div className="card bg-info shadow-xl">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Product Name
                            </h2>
                            <h3 className='text-left text-lg text-primary font-semibold'>
                                Price: $<span>190</span>
                            </h3>

                            <p className='text-left font-bold'>
                                Manufacturer :
                                <span className="badge badge-accent ml-2 font-normal"> Addidas</span>
                            </p>
                            <p className='text-left font-bold'>
                                Rating :
                                <span className="badge badge-accent ml-2 font-normal"> 3 star</span>
                            </p>
                            <div className="card-actions justify-end">
                                <button className='btn btn-sm btn-warning'>Add to Cart</button>
                            </div>
                        </div>
                    </div>



                </div>

            </div>
            <div className='lg:col-span-3 col-span-12 bg-info h-screen'>
                <h2 className='font-bold text-2xl mt-10'>
                    <span className='relative'>
                        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 bg-primary" aria-hidden="true">
                            <span className='relative text-white px-10'>
                                Order Summary
                            </span>
                        </span>
                    </span>
                </h2>

                <div className='mt-10 text-left px-10'>
                    <h4 className='font-bold text-lg my-3'>Selected Items: <span>6</span></h4>
                    <h4 className='font-bold text-lg my-3'>Total Price: $<span>116</span></h4>
                    <h4 className='font-bold text-lg my-3'>Total Shipping Charge: $<span>10</span></h4>
                    <h3 className='font-bold text-2xl my-8'>Grand Total: $<span>126</span></h3>
                    <button className='btn btn-sm btn-error mr-6'>Clear Cart</button>
                    <button className='btn btn-sm btn-warning'>Review Order</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;