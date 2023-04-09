import React from 'react'
import Card from './card.component'
import { ReactComponent as RevenueIcon } from "../assets/revenue_icon.svg";
import { ReactComponent as TransactionIcon } from "../assets/transactions_icon.svg";
import { ReactComponent as LikeIcon } from "../assets/like_icon.svg";
import { ReactComponent as UsersIcon } from "../assets/users_icon.svg";

function CardContainer() {
  return (
    <div className='flex flex-wrap justify-center md:justify-around ml-8 mr-8 xl:mr-16 mt-12'>
        <Card color={'#DDEFE0'} icon={<RevenueIcon/>} query={'Revenues'} data={'$2,129,430'}/>
        <Card color={'#F4ECDD'} icon={<TransactionIcon/>} query={'Transactions'} data={'1,520'}/>
        <Card color={'#EFDADA'} icon={<LikeIcon/>} query={'Likes'} data={'9,721'}/>
        <Card color={'#DEE0EF'} icon={<UsersIcon/>} query={'Users'} data={'892'}/>
    </div>
  )
}

export default CardContainer