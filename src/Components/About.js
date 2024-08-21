const About = (props) => {
    return (
        <div className="container" >
            <div class="accordion" id="accordionExample">
                <div class="accordion-item" style={props.bodyColor}>
                    <h2 class="accordion-header" >
                    <button class="accordion-button"style={props.TextFormColor} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Analyze your Text
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            TextPG is a text analyser which can be used to find the number of words, characters and sentences in a text.
                        </div>
                    </div>
                </div>
                <div class="accordion-item" style={props.bodyColor}>
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" style={props.TextFormColor} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Free to use
                    </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            TextPG is a free text analyser which can be used to find the number of words, characters and sentences in a text.
                        </div>
                    </div>
                </div>
                <div class="accordion-item" style={props.bodyColor}>
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" style={props.TextFormColor} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Browser Compatible
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            TextPG can work in any web browser such as Chrome, Firefox, Microsoft Edge, Opera, Safari, Brave, etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;