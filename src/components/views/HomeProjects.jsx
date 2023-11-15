import React from 'react'
import projectImage1 from '../../assets/images/Workplace/Compressed/newspaper.jpg'
import projectImage2 from '../../assets/images/Workplace/Compressed/tablet.jpg'
import projectImage3 from '../../assets/images/Workplace/Compressed/notes.jpg'
import projectImage4 from '../../assets/images/Workplace/Compressed/computer.jpg'
import ProjectArticle from '../general/ProjectArticle'

const HomeProjects = ({h2, h4}) => {
  return (
    <>
        <section className="projects">
            <div className="projects-container container">
                <h4>{h4}</h4>
                <h2>{h2}</h2>
                <div className="projects-grid-container">
                    <ProjectArticle 
                        url='#'
                        imgUrl={projectImage1}
                        imgAlt='A man reading a business newspaper'
                        title='Grow Your Business'
                    />
                    <ProjectArticle 
                        url='#'
                        imgUrl={projectImage2}
                        imgAlt='Image of a smart watch, pen, and a pair of glasses laying on a tablet'
                        title='Why your client needs a responsive website'
                    />
                    <ProjectArticle 
                        url='#'
                        imgUrl={projectImage3}
                        imgAlt='A desk with a notebook, a pen, a laptop, and a coffee cup'
                        title='Educate your employee to get better results'
                    />
                    <ProjectArticle 
                        url='#'
                        imgUrl={projectImage4}
                        imgAlt='A laptop showing business stats and analytics'
                        title='Business insight is an important piece of your business'
                    />
                </div>
                <button className="btn-all-projects">All Recent Projects<i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </section>
    </>
  )
}

export default HomeProjects