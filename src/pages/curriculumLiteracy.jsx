import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/style.css"
import { Navbar } from "../component/navbar";
import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../component/footer";
import principalPicture from "../img/principal.jpg"

export const Literacy = () =>{
	const location = useLocation();
	const isActive = (path) =>{
		return location.pathname === path

	}
	return(
		<div>
			<Navbar />
      <section>
        <section id="heading" className="light-background2 mt-5 mb-5">
          <div className="container-lg">
            <div className="d-md-flex d-inline justify-content-between">
              <div>
                <h1 className="ml-text fw-bold dark-font"><span className="text-secondary1">Literacy</span></h1>
              </div>

              <div className="d-lg-flex justify-content-between texts">
                <a href="./index.html" className="px-4">Home</a>
                <p className="text-secondary1 px-4 d-none d-md-block">curriculum</p>
                
              </div>
            </div>      
          </div>

        </section>

        <section>
          <div className="container-lg">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <section>
                  <h5 className="text-center">LITERACY VISION</h5>
                  <p>Literacy development in children aged 6 to 11 is a critical phase where they transition from learning to read and write to reading and writing to learn. This period is marked by significant growth in various literacy skills, including reading, speaking, listening, and writing
                    <br /> Here At BDOMS we try to ensure our children reach their abilities in this areas.
                  </p>
                </section>


                <section className="py-5">
                  <div>
                    <div>
                      <h6>Reading</h6>
                      <p>During this age range, children's reading abilities evolve considerably. By age 7, most children have moved past the initial stages of decoding words and are beginning to read more fluently. They start to recognize more complex words and understand the basics of sentence structure and punctuation.</p>
                    </div>
                  </div>

                  <div className="ps-4 pt-2">
                    <p>1. <span className="h6">Fluency: </span>  As children grow, their reading fluency improves. They can read aloud with appropriate speed, accuracy, and expression. This fluency allows them to better understand and enjoy the text.</p>
                    <p>2. <span className="h6">Comprehension:</span>By the ages of 8 to 9, children start to grasp more complex narratives and can discuss the plot, characters, and settings of the stories they read. By age 11, they can infer meaning from context, predict outcomes, and summarize content.</p>
                    <p>3. <span className="h6">Vocabulary:</span>  Exposure to a variety of texts helps expand their vocabulary. They learn new words through reading and can use context clues to understand unfamiliar terms.</p>
                    <p>4. <span className="h6">Critical Thinking:</span>As they approach age 11, children begin to analyze texts more deeply. They can compare and contrast different stories, identify themes, and evaluate the author's purpose and point of view.</p>
                  </div>
                </section>

                <section className="pb-5">
                  <div>
                    <h6>Speaking</h6>
                    <p>Oral language skills continue to develop rapidly between ages 7 and 11. This period sees improvements in both expressive (speaking) and receptive (listening) language skills.</p>
                  </div>

                  <div className="ps-4 pt-2">
                    <p>1. <span className="h6">Vocabulary and Grammar:</span>Children's spoken vocabulary becomes more sophisticated, and they start to use more complex sentence structures. They learn to use conjunctions, prepositions, and descriptive language effectively. </p>
                    <p>2. <span className="h6">Narrative Skills:</span>By age 7, children can recount events in a logical sequence. As they grow, they become better at telling more detailed and coherent stories, including descriptions of characters, settings, and plots. </p>
                    <p>3. <span className="h6">Discussion and Debate:</span>  Children learn to express their opinions and ideas more clearly. They can participate in discussions, ask questions, and provide reasoned arguments. By age 11, they can engage in more formal debates, presenting their viewpoints and considering others' perspectives.</p>
                    <p>4. <span className="h6">Public Speaking: </span> Confidence in public speaking grows as they practice presenting projects and participating in class discussions. They learn to modulate their voice, use appropriate gestures, and maintain eye contact. </p>
                  </div>
                </section>

                <section className="pb-5">
                  <div>
                    <h6>Listening</h6>
                    <p>Listening skills are fundamental to literacy development and are closely tied to both reading and speaking abilities.</p>
                  </div>

                  <div className="ps-4 pt-2">
                    <p>1. <span className="h6">Active Listening:</span>Children learn to pay attention, understand, and remember what they hear. This includes following multi-step instructions and comprehending spoken narratives and explanations.</p>
                    <p>2. <span className="h6">Critical Listening:</span>By age 9, children begin to listen critically, identifying the main ideas and supporting details in spoken messages. They learn to discern between fact and opinion and evaluate the credibility of the information.</p>
                    <p>3. <span className="h6">Interactive Listening:</span>Interactive listening involves responding appropriately to what others say. Children practice turn-taking in conversations, asking clarifying questions, and providing relevant feedback.</p>
                    <p>4. <span className="h6">Auditory Discrimination:</span>his skill, important for phonemic awareness, helps children distinguish between different sounds in language, which is crucial for reading and spelling.</p>

                  </div>
                </section>

                <section className="pb-5 mb-5">
                  <div>
                    <h6>Writing</h6>
                    <p>Writing skills develop significantly from ages 6 to 11, moving from basic sentence construction to more complex compositions.</p>
                  </div>

                  <div className="ps-4 pt-2">
                    <p>1. <span className="h6">Handwriting and Spelling:</span>By age 7, children should have a basic grasp of handwriting and spelling. As they progress, their handwriting becomes more legible and their spelling more accurate, often incorporating rules and patterns they have learned.</p>
                    <p>2. <span className="h6">Sentence Structure: </span>Children learn to write more complex sentences, using conjunctions to link ideas and varying sentence types for effect.</p>
                    <p>3. <span className="h6">Paragraph Writing:</span>By age 9, children start to write coherent paragraphs with a clear main idea and supporting details. They learn to use topic sentences and concluding sentences effectively.</p>
                    <p>4. <span className="h6">Narrative and Expository Writing:</span>Children practice different types of writing, including narratives, reports, and persuasive essays. They learn to organize their thoughts logically, use descriptive language, and support their arguments with evidence.</p>
                    <p>5. <span className="h6">Editing and Revising:</span> As they approach age 11, children become more adept at revising and editing their work. They learn to identify and correct errors, improve word choice, and enhance the overall clarity and coherence of their writing.</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </section>

		</div>
			
  )
}