import React, { useContext } from 'react'
import { Store } from '../../store/index'
import SideListItem from '../SideListItem/SideListItem'
import Style from './SideList.module.scss'

const SideList = () => {
    const { globalState } = useContext(Store)

    return (
        <div className={Style.sideNav}>
            {
                globalState.related && globalState.related.map((related) => {
                    if(related.snippet){
                        return (
                            <SideListItem
                                id={related.id.videoId}
                                key={related.id.videoId}
                                src={related.snippet.thumbnails.medium.url}
                                title={related.snippet.title} 
                             />
                        )    
                    }else{
                        return (
                            <div id={related.id.videoId}></div>
                        )
                    }
                })
            }
        </div>
    )
}

export default SideList
