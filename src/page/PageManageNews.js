import React from 'react'
import ManageNews from '../component/ManageNews'
import MenuColapse from '../component/MenuColapse'
import { useCheckToken } from '../hook/CheckToken'

export default function PageManageNews() {
    useCheckToken()
    return (
        <div>
            <MenuColapse>

            </MenuColapse>
            <ManageNews>

            </ManageNews>
        </div>
    )
}
