import {BiTrash} from 'react-icons/bi'

export default function AddInfo({info,onDelete}){
    return(
        <li>
            <dl>
                <dt>{info.petName}</dt>
                <dd> 
                    <dfn>예약자명</dfn>
                        {info.ownerName}
                </dd>
                <dd>{info.aptNotes}</dd>
                <dd>{info.aptDate}</dd>
            </dl>
            <button type="button" 
                    onClick={()=>{onDelete(info.id)}}>
              <BiTrash />
            </button>
        </li>
    )
}