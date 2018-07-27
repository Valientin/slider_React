import React from 'react';

const Icons = (props) => {

    const renderTemplate = () => {
        let formTemplate = null;

        switch(props.icon) {
            case 'left-arrow':
                formTemplate = (
                    <svg version="1.1" id="Capa_1" x="0px" y="0px" width={props.width} height={props.height} viewBox="0 0 444.531 444.531" >
                        <path fill={props.color} d="M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978L213.13,222.409z"/>
                    </svg>
                )
                break;
            case 'right-arrow':
                formTemplate = (
                    <svg version="1.1" id="Capa_1" x="0px" y="0px" width={props.width} height={props.height} viewBox="0 0 444.819 444.819">
                        <path fill={props.color} d="M352.025,196.712L165.884,10.848C159.029,3.615,150.469,0,140.187,0c-10.282,0-18.842,3.619-25.697,10.848L92.792,32.264c-7.044,7.043-10.566,15.604-10.566,25.692c0,9.897,3.521,18.56,10.566,25.981l138.753,138.473L92.786,361.168c-7.042,7.043-10.564,15.604-10.564,25.693c0,9.896,3.521,18.562,10.564,25.98l21.7,21.413c7.043,7.043,15.612,10.564,25.697,10.564c10.089,0,18.656-3.521,25.697-10.564l186.145-185.864c7.046-7.423,10.571-16.084,10.571-25.981C362.597,212.321,359.071,203.755,352.025,196.712z"/>
                    </svg>
                )
                break;
            default:
                formTemplate = null;
        }
        return formTemplate;
   }

   return(
        <div 
            className={props.className}
            style={props.style}
            onClick={props.handleIcon ? () => props.handleIcon() : null}
        >
            {renderTemplate()}
        </div>
   )
}

export default Icons;
