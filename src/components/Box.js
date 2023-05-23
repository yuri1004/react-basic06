import {BiCheckSquare} from "react-icons/bi"

export default function Box({sortBy,onSortChange}){
    // console.log(sortBy,onSortChange)
    return(
        <div id="box">
          <ul>
           <li onClick={()=>onSortChange('petName')}>
            애기이름 
            {(sortBy === 'petName') && <BiCheckSquare/>}  
           </li>
           <li onClick={()=>onSortChange('ownerName')}>
            예약자명 
            {(sortBy === 'ownerName') && <BiCheckSquare/>}
           </li>
           <li onClick={()=>onSortChange('aptDate')}>
            날짜 
            {(sortBy === 'aptDate') && <BiCheckSquare/>}
            </li>
          </ul>
        </div>
    )
}