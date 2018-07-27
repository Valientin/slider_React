import React from 'react';
import Icons from '../Icons';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import AddSlide from '../AddSlide';
import './slider.scss';

class Slider extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            slideList: [1,2,3,4,5],
            slides: {
                1: {
                    text: 'Hello! This is slide #1',
                    url: 'https://images.designtrends.com/wp-content/uploads/2016/04/06100837/Shiny-Water-Background.jpg'
                },
                2: {
                    text: 'Hello! This is slide #2',
                    url: 'https://images.pexels.com/photos/89784/bmw-suv-all-terrain-vehicle-fog-89784.jpeg?auto=compress&cs=tinysrgb&h=350'
                },
                3: {
                    text: 'Hello! This is slide #3',
                    url: 'https://images.designtrends.com/wp-content/uploads/2015/11/07122458/Car-Backgrounds.jpg'
                },
                4: {
                    text: 'Hello! This is slide #4',
                    url: 'https://4.bp.blogspot.com/-ZEEEJK8jkxo/WkBqbx6k9iI/AAAAAAAAB3Q/P1I6kxhFpZAyZd6yTARg39cO7nMo3HmpgCLcBGAs/s1600/Cyberpunk%2BNeo%2BParis%2BLive%2BWallpaper%2BEngine.jpg'
                },
                5: {
                    text: 'Hello! This is slide #5',
                    url: 'https://i.pinimg.com/736x/ea/40/61/ea4061bf49e5c650456d57eb172fab5a.jpg'
                },
                6: {
                    text: 'Hello! This is slide #6',
                    url: 'https://images.pexels.com/photos/1020315/pexels-photo-1020315.jpeg?auto=compress&cs=tinysrgb&h=350'
                },
                7: {
                    text: 'Hello! This is slide #7!',
                    url: 'http://www.desktopwallpaperhd.net/wallpapers/20/4/beautiful-background-sprun-spring-check-208756.jpg'
                },
                
            },
            activeSlideId: 2,
            rightArrowActive: true,
            leftArrowActive: false,
            intervalId: false,
            uploadSlideUrl: ''
        }
    }

    renderMainSlide = (slides, id) => (
        slides[id] ? 
            <TransitionGroup className="slider-main__wrapper">
                <CSSTransition
                    key={id}
                    timeout={500}
                    classNames="fade"
                >
                    <div className="slider-main" style={{background: `url(${slides[id].url})`}}>
                        <div className="slider-main__text">
                            {slides[id].text}
                        </div>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        : null
    )

    setActiveSlide = (id) => {
        this.setState({
            activeSlideId: id
        })
    }

    renderAllSlide = (slidesList, slides, id) => {
        return slidesList ?
        slidesList.map((item, i) => {
                const className = (item === id) ? 'slider-slide__item active' : 'slider-slide__item';
                return(
                    <div key={i} onClick={() => this.setActiveSlide(item)} className={className} style={{background: `url(${slides[item].url})`}}></div>
                )
            }
        ) : null
    }

    handleNextSlide = (slideList, slides) => {
        let rightArrowActive;
        let newSlideList = slideList;
        if(newSlideList[newSlideList.length - 1] !== Object.keys(slides).length) {
            newSlideList.push(slideList[slideList.length - 1] + 1);
            newSlideList.splice(0, 1);
            if(newSlideList[4] === Object.keys(slides).length){
                rightArrowActive = false;
            } else {
                rightArrowActive = true;
            }
            this.setState({
                slideList: newSlideList,
                leftArrowActive: true,
                rightArrowActive
            })
        }
    }

    handlePrevSlide = (slideList) => {
        let leftArrowActive;
        let newSlideList = slideList;
        if(newSlideList[0] !== 1) {
            newSlideList.unshift(newSlideList[0] - 1);
            let deleteItem = newSlideList.length - 1;
            newSlideList.splice(deleteItem, 1);
            if(newSlideList[0] === 1){
                leftArrowActive = false;
            } else {
                leftArrowActive = true;
            }
            this.setState({
                slideList: newSlideList,
                rightArrowActive: true,
                leftArrowActive
            })
        }
    }

    handleChangeUploader = (e) => { 
        const imageObj = e.target.files[0];
        const image = URL.createObjectURL(imageObj)
        
        this.setState({
            uploadSlideUrl: image
        })
    }

    addSlide = () => {
        if(this.state.uploadSlideUrl) {
            const newSlides = {...this.state.slides}
            newSlides[Object.keys(newSlides).length + 1] = {
                url: this.state.uploadSlideUrl,
                text: 'Hello! This is my slide)'
            }
            console.log(newSlides)
            this.setState({
                slides: newSlides,
                rightArrowActive: true,
                uploadSlideUrl: ''
            })
        }
    }

    render(){
        const state = this.state;
        return(
            <div className="slider">
                <div className="container">
                    {this.renderMainSlide(state.slides, state.activeSlideId)}
                    <div className="slider-slide">
                        <Icons 
                            icon="left-arrow"
                            width="50px"
                            height="50px"
                            color="#ffab7a"
                            className={state.leftArrowActive ? "slider-slide__prev" : "slider-slide__prev disabled"}
                            handleIcon={() => this.handlePrevSlide(state.slideList)}
                        />
                        <div className="slider-slide__all">
                            {this.renderAllSlide(state.slideList, state.slides, state.activeSlideId)}
                        </div>
                        <Icons 
                            icon="right-arrow"
                            width="50px"
                            height="50px"
                            color="#ffab7a"
                            className={state.rightArrowActive ? "slider-slide__next" : "slider-slide__next disabled"}
                            handleIcon={() => this.handleNextSlide(state.slideList, state.slides)}
                        />
                    </div>
                    <AddSlide 
                        handleChangeUploader={this.handleChangeUploader}
                        previewUrl={state.uploadSlideUrl}
                        addSlide={this.addSlide}
                    />
                </div>
            </div>
        )
    }
}

export default Slider;