import { Modal, useMantineTheme } from '@mantine/core';
import css from '../styles/OrderModel.module.css'
import { useState } from 'react';
import { createOrder } from "../lib/orderHandler"
import toast, {Toaster}  from 'react-hot-toast';
import { useStore } from '../store/store';
import {useRouter} from 'next/router'


const OrderModel = ({opened, setOpened, paymentMethod}) => {
  const theme = useMantineTheme();
  const router = useRouter();
  const [formData, setFormData] = useState({})
  
    const resetCart = useStore((state)=>state.resetCart)

  const handleInput = (e) =>{
    setFormData({...formData,[e.target.name]: e.target.value})
  }

  const handleSubmit = async(e) =>{
    
    e.preventDefault();
    const id = await createOrder({...formData, total, paymentMethod})
    toast.success('Order Placed')
    resetCart()
    {
        typeof window!== 'undefined' && localStorage.setItem("order", id)
    }
    router.push(`/order/${id}`)
  }

  const total = typeof window!== 'undefined' && localStorage.getItem('total')
  return (
    <Modal
        opened = {opened}
        onClose = {()=>setOpened(null)}
        overlayColor={ theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
          overlayOpacity={0.55}
          overlayBlur={3}
      >
        <form onSubmit={handleSubmit} className={css.formContainer}>
            <input onChange ={handleInput} type="text" name='name' required placeholder='Name'></input>
            <input onChange ={handleInput} type="text" name='phone' required placeholder='Phone Number'></input>
            <textarea onChange ={handleInput} name='address' placeholder='Address' rows={3}></textarea>
            <span>
                You will pay <span>$ {total} </span>on delivery
            </span>

            <button type='submit'className='btn'>Place Order</button>
        </form>
        <Toaster/>
      </Modal>

  )
}

export default OrderModel