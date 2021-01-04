import React from 'react'
import {Link} from "react-router-dom";

function Article(props) {
    return (
        <>
      <li className='Article'>
        <Link className='ArticleLink' to={props.path}>
          <figure className='ArticleImgWrap' data-category={props.label}>
            <img
              className='ArticleImg'
              alt='ALT'
              src={props.src}
            />
          </figure>
          <div className='ArticleInfo'>
            <h5 className='ArticleText'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
    )
}

export default Article
