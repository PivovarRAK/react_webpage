import React from 'react'
import Article from "./Article.js";
import "./Articles.css";
import picture1 from "./../assets/pictureSection_1.jpg";
import picture2 from "./../assets/pictureSection_2.jpg";
import picture3 from "./../assets/pictureSection_3.jpg";
import picture4 from "./../assets/pictureSection_4.jpg";

function Articles() {
    return (
        <div className='Articles'>
      <h1>Meine Angebote</h1>
      <div className='ArticlesContainer'>
        <div className='ArticlesWrapper'>
          <ul className='ArticlesList'>
            <Article
              src={picture1}
              text='Beispieltext'
              label='Ernährungsplan'
              path='/about'
            />
            <Article
              src={picture2}
              text='Beispieltext'
              label='Functional Training'
              path='/offers'
            />
            <Article
              src={picture3}
              text='Beispieltext'
              label='Fitnessboxen'
              path='/about'
            />
            <Article
              src={picture4}
              text='Beispieltext'
              label='Lifestyle'
              path='/about'
            />
          
          </ul>
        </div>
      </div>
    </div>
    )
}

export default Articles
