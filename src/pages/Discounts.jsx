import React from 'react'
import DashNav from './components/DashNav'
import { useState, useEffect } from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import ProductDetails from './components/ProductDetails';
import AddDiscount from './components/AddDiscount';




function Discounts() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products'));
        if (storedProducts) {
            setProducts(storedProducts);
        }
    }, []);


    
    const [open, setOpen] = React.useState(false);

    const handleClickToOpen = () => {
        setOpen(true);
    };

    const handleToClose = () => {
        setOpen(false);
    };



    return (
        <>
            <div className='bg-black h-screen text-white'>
                <DashNav></DashNav>
                {products.length > 0 ? (
                    <div className='mt-10'>
                        <h2 className='font-semibold text-[1.2rem] mb-4'>Saved Products</h2>
                        <div className='flex flex-wrap gap-4'>
                            {products.map((product, index) => (
                                <div key={index} className='border border-white p-4 w-[100%] rounded flex justify-between'>
                                    <div className='flex flex-col gap-2'>
                                        <h3 className='font-semibold'>Product title :{product.title}</h3>
                                        <p className='font-semibold'>Product description :{product.description}</p>
                                        <p className='font-semibold'>Price: {product.price}</p>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        {product.media && <img className='object-cover' width={100} height={300} src={product.media} alt="Product" />}
                                        <button className='border-2 border-white px-2' onClick={handleClickToOpen}>Add Discount</button>
                                        <Dialog open={open} fullWidth maxWidth="md" onClose={handleToClose}>
                                            <DialogContent>
                                                <DialogContentText>
                                                    <AddDiscount></AddDiscount>
                                                </DialogContentText>
                                            </DialogContent>
                                            <DialogActions>
                                                <button onClick={handleToClose}
                                                    color="primary" autoFocus>
                                                    Close
                                                </button>
                                            </DialogActions>
                                        </Dialog>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <p>No products saved yet.</p>
                )}
            </div>
        </>
    )
}

export default Discounts