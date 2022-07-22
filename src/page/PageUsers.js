import React from 'react'
import MenuColapse from '../component/MenuColapse'
import TableUsers from '../component/TableUsers'
import { useCheckToken } from '../hook/CheckToken';

export default function 
() {
  useCheckToken();
  return (
    <div>
        <MenuColapse>




    </MenuColapse>
    <TableUsers>

    </TableUsers>
    </div>
  )
}
