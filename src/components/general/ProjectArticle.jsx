import React from 'react'

const ProjectArticle = ({url, imgUrl, imgAlt, title}) => {
  return (
    <>
        <article>
            <div className="grid-item">
                <a href={url}>
                    <div className="item-container">
                        <div className="img-container">
                            <img src={imgUrl} loading="lazy" alt={imgAlt}/>
                        </div>
                        <h5>{title}</h5>
                    </div>
                </a>
                <button className="btn-read">Read More<i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </article>
    </>
  )
}

export default ProjectArticle