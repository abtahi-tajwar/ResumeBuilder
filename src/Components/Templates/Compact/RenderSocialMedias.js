import React from 'react';
import { List } from '../ThemeStyles.style';
function RenderSocialMedias({ items }) {
  return (
    <List>
        { (items.email && items.email !== "") && <li><span><i class="fas fa-envelope"></i></span> { items.email }</li> }
        { (items.website && items.website !== "") && <li><span><i class="fas fa-globe"></i></span> { items.website }</li> }
        { (items.linkedin && items.linkedin !== "") && <li><span><i class="fab fa-linkedin"></i></span> { items.linkedin }</li> }
        { (items.facebook && items.facebook !== "") && <li><span><i class="fab fa-facebook"></i></span> { items.facebook }</li> }
        { (items.instagram && items.instagram !== "") && <li><span><i class="fab fa-instagram"></i></span> { items.instagram }</li> }
        { (items.twitter && items.twitter !== "") && <li><span><i class="fab fa-twitter"></i></span> { items.twitter }</li> }
        { (items.pinterest && items.pinterest !== "") && <li><span><i class="fab fa-pinterest"></i></span> { items.pinterest }</li> }
        { (items.skype && items.skype !== "") && <li><span><i class="fab fa-skype"></i></span> { items.skype }</li> }
    </List>
  );
}

export default RenderSocialMedias;
