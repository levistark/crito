import React from 'react'
import projectImage1 from '../../assets/images/Workplace/Compressed/newspaper.jpg'
import projectImage2 from '../../assets/images/Workplace/Compressed/tablet.jpg'
import projectImage3 from '../../assets/images/Workplace/Compressed/notes.jpg'
import projectImage4 from '../../assets/images/Workplace/Compressed/computer.jpg'

const HomeProjects = () => {
  return (
    <>
        <section className="projects">
            <div className="projects-container container">
                <h4>Projects & Case Studies</h4>
                <h2>Let's Look at Our Global Projects</h2>
                <div className="projects-grid-container">
                    <article>
                        <div className="grid-item">
                            <a href="#">
                                <div className="item-container">
                                    <div className="img-container">
                                        <img src={projectImage1} loading="lazy" alt="a man reading a business newspaper"/>
                                    </div>
                                    <h5>Grow your business</h5>
                                </div>
                            </a>
                            <button className="btn-read">Read More<i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </article>
                    <article>
                        <div className="grid-item">
                            <a href="">
                                <div className="item-container">
                                    <div className="img-container">
                                        <img src={projectImage2} loading="lazy" alt="image of a smart watch, pen, and a pair of glasses laying on a tablet"/>
                                    </div>
                                    <h5>Why your client needs a responsive website</h5>
                                </div>
                            </a>
                            <button className="btn-read">Read More<i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </article>
                    <article>
                        <div className="grid-item">
                            <a href="">
                                <div className="item-container">
                                    <div className="img-container">
                                        <img src={projectImage3} loading="lazy" alt="a desk with a notebook, a pen, a laptop, and a coffe cup"/>
                                    </div>
                                    <h5>Educate your employee to get better results</h5>
                                </div>
                            </a>
                            <button className="btn-read">Read More<i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </article>
                    <article>
                        <div className="grid-item">
                            <a href="">
                                <div className="item-container">
                                    <div className="img-container">
                                        <img src={projectImage4} alt="a laptop showing business stats and analytics"/>
                                    </div>
                                    <h5>Business insight is an important piece of your business</h5>
                                </div>
                            </a>
                            <button className="btn-read">Read More<i className="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </article>
                </div>
                <button className="btn-all-projects">All Recent Projects<i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </section>
    </>
  )
}

export default HomeProjects