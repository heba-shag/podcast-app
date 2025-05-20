import './sectionsStyle.css';

import img1 from '../media/2601d9e85c971bd214d4a72ba6dd0ba9a0846f85.png';
import img2 from '../media/97b39bf0216d4f2925bf4734dd51e22475db34f8.png';

export default function AdsSection(){
    return(
        <div className="ads-section section flex">
            <img src={img1} alt=""/>
            <img src={img2} alt=""/>
        </div>
    )
}