import React from 'react';
import { List } from '../ThemeStyles.style';
import Icon from '../../Icons/Icon';
function RenderSocialMedias({ items, light=true, omitted=[] }) {

  // This option is for omitting some specific items for themeing
  // omitted.forEach(name => {
  //   items[name] = ""
  // })
  
  return (
    <List>
        { (items.email && items.email !== "") && <li><span><Icon icon="email" light={light} /></span> { items.email }</li> }
        { (items.website && items.website !== "") && <li><span><Icon icon="web" light={light} /></span> { items.website }</li> }
        { (items.linkedin && items.linkedin !== "") && <li><span><Icon icon="linkedin" light={light} /></span> { items.linkedin }</li> }
        { (items.github && items.github !== "") && <li><span><Icon icon="github" light={light} /></span> { items.github }</li> }
        { (items.facebook && items.facebook !== "") && <li><span><Icon icon="facebook" light={light} /></span> { items.facebook }</li> }
        { (items.instagram && items.instagram !== "") && <li><span><Icon icon="instagram" light={light} /></span> { items.instagram }</li> }
        { (items.twitter && items.twitter !== "") && <li><span><Icon icon="twitter" light={light} /></span> { items.twitter }</li> }
        { (items.pinterest && items.pinterest !== "") && <li><span><Icon icon="pinterest" light={light} /></span> { items.pinterest }</li> }
        { (items.skype && items.skype !== "") && <li><span><Icon icon="skype" light={light} /></span> { items.skype }</li> }
    </List>
  );
}

export default RenderSocialMedias;
