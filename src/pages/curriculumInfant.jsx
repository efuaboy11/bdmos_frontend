import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/style.css"
import { Navbar } from "../component/navbar";
import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "../component/footer";
import principalPicture from "../img/principal.jpg"
import pic from "../img/pexels-andrea-piacquadio-762041 (2).jpg"

export const CurriculumInfant = () =>{
	const location = useLocation();
	const isActive = (path) =>{
		return location.pathname === path

	}
	return(
		<div>
			<Navbar />
      <section id="curriculum">
        <section id="heading" className="light-background2 mt-5 mb-5">
          <div className="container-lg">
            <div className="d-md-flex d-inline justify-content-between">
              <div>
                <h1 className="ml-text fw-bold dark-font">Curriculum <span className="text-secondary1">Infant</span></h1>
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
              <div className="col-md-10">
                <h5 className="text-center">INFANT SCHOOL VISION</h5>
                <p>Our aim is to nurture godly, creative children who excel in communication, learn with confidence, and exhibit great sportsmanship. <br />

                  We believe in personalizing education, which means tailoring learning experiences to each child’s unique needs, interests, and abilities. This approach enhances progress, achievement, and participation. It requires active commitment from pupils, responsiveness from teachers, and engagement from parents. <br />

                  As Maria Montessori, an Italian physician and educator of young children stated: <br /> <br />

                  "Free the child's potential, and you will transform him into the world." <br /> <br />

                  Montessori emphasized the importance of creating an environment that allows young children to explore, learn, and develop at their own pace, fostering their innate potential and abilities. This aligns with the idea of personalizing learning to suit each child's unique needs and interests. <br /> <br />

                  At our Infant School, we embrace the philosophy of lifelong learning, recognizing that both adults and children discover new things every day. We strive to create conditions for effective learning and work closely with parents to foster a rewarding home-school partnership.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-5 mt-5 container-lg curr-infant-charateristic-conatiner">
          <div className="">
            <div>
              <h5 className="text-center">Characteristics of Effective Learning</h5>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-xxl-12">
              <div className="row g-3">
                <div className="col-md-6 col-xxl-4">
                  <div className="boxing-shadow p-3 curr-boxes">
                    <h4>1.  Playing and Exploring (Engagement)</h4>
                    <ul>
                      <li><span className="font-bold">Finding out and exploring:</span>  
                        <ul>
                          <li>Curiosity: Babies and young children are naturally curious about their surroundings.</li>
                          <li>Sensory exploration: Infants use their senses to explore objects and people around them.</li>
                          <li>Active exploration: Toddlers and preschoolers actively investigate their environment through play and hands-on activities.</li>
                        </ul>
                      </li>
                    </ul>

                    <ul>
                      <li><span className="font-bold">Playing with what they know:</span>
                        <ul>
                          <li>Role play: Children imitate actions and roles they observe in everyday life, such as playing house or pretending to be a doctor</li>
                          <li>Familiar activities: Engaging in activities and games they have done before to deepen understanding and build confidence.</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-6 col-xxl-4 ">
                  <div className="boxing-shadow p-3 curr-boxes  ">
                    <div className="curr-infant-characteristic-box-2">                
                      <h4>2.  Active Learning (Motivation)</h4>
                      <ul>
                        <li><span className="font-bold">Being involved and concentrating:</span>  
                          <ul>
                            <li>Focus: Staying engaged with an activity for an extended period.</li>
                            <li>Attention span: Developing the ability to concentrate on tasks.</li>
                          </ul>
                        </li>
                      </ul>

                      <ul>
                        <li><span className="font-bold">Enjoying achieving what they set out to do:</span>
                          <ul>
                            <li>Satisfaction: Feeling proud of accomplishments and enjoying the process of achieving goals.</li>
                            <li>Intrinsic motivation: Being motivated by the pleasure of the activity itself rather than external rewards.</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-xxl-4">
                  <div className="boxing-shadow p-3 curr-boxes">
                    <div className="curr-infant-characteristic-box-3">
                      <h4>3.  Creating and Thinking Critically (Thinking)</h4>
                      <ul>
                        <li><span className="font-bold">Having their own ideas:</span>  
                          <ul>
                            <li>Creativity: Coming up with new ideas during play and problem-solving.</li>
                            <li>Imagination: Using imagination to explore possibilities and create scenarios.</li>
                          </ul>
                        </li>
                      </ul>

                      <ul>
                        <li><span className="font-bold">Making links:</span>
                          <ul>
                            <li>Connection: Making connections between different experiences and ideas.</li>
                            <li>Understanding: Developing an understanding of how things work and relate to each other.</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-lg curr-infant-age-conatiner py-5 my-5">
          <div>
            <h5 className="text-center">Developmental Examples by Age Group</h5>
          </div>

          <div className="row">
            <div className="col-xxl-12">
              <div className="row g-3">
                <div className="col-xl-4 col-md-6">
                  <div  className="light-background2 p-2">
                    <ul>
                      <li><span className="font-bold">3 to 12 months:</span>
                        <ul>
                          <li>Playing and Exploring: Reaching for and grasping objects, mouthing toys to explore textures, turning towards sounds.</li>
                          <li>Active Learning: Repeating actions that bring pleasure, like shaking a rattle.</li>
                          <li>Creating and Thinking Critically: Looking intently at new faces and objects, showing curiosity by moving towards interesting things.</li>
                        </ul>

                      
                      
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-xl-4 col-md-6">
                  <div className="light-background2 p-2">
                    <ul>
                      <li><span className="font-bold">1 to 2 years:</span>
                        <ul>
                          <li>Playing and Exploring: Engaging in simple pretend play, such as talking on a toy phone.</li>
                          <li>Active Learning: Showing determination to complete simple tasks like fitting shapes into a sorter.</li>
                          <li>Creating and Thinking Critically: Experimenting with different ways to stack blocks, noticing cause and effect relationships.</li>
                        </ul>

                      
                      
                      </li>
                    </ul>
                  </div>
                </div>

                
                <div className="col-xl-4 col-md-6">
                  <div  className="light-background2 p-1" >
                    <ul>
                      <li><span className="font-bold">3 to 5 years:</span>
                        <ul>
                          <li>Playing and Exploring: Engaging in more complex pretend play, exploring different roles and scenarios.</li>
                          <li>Active Learning: Concentrating for longer periods, showing persistence in completing puzzles or building projects.</li>
                          <li>Creating and Thinking Critically: Asking questions, planning play scenarios, trying out different ways to solve problems.</li>
                        </ul>

                      
                      
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

        </section>

        <section className="container-lg">
          <div>
            <h5 className="text-center">Areas of Learning and Development</h5>
          </div>

          <div className="row">
            <div className="col-xxl-12">
              <div className="row g-3">
                <div className="col-md-6 col-xxl-4">
                  <div className="boxing-shadow curr-boxes  p-3 ">
                    <div className="curr-infant-development-box-1">          
                      <h4>1.  Communication and Language</h4>
                      <ul>
                        <li><span className="font-bold">Listening and Attention:</span>
                          <ul>
                            <li>Encouraging children to listen to sounds and words in their environment.</li>
                            <li>Engaging in interactive activities that require focused attention, such as listening to stories and songs.</li>
                          </ul> 
                        </li>
                      </ul>

                      <ul>
                        <li><span className="font-bold">Understanding:</span>
                          <ul>
                            <li>Using simple language and gestures to communicate with children.</li>
                            <li>Providing opportunities for children to follow simple instructions and respond to questions.</li>
                          </ul> 
                        </li>
                      </ul>

                      <ul>
                        <li><span className="font-bold">Speaking:</span>
                          <ul>
                            <li>Creating a language-rich environment where children are encouraged to vocalize and communicate.</li>
                            <li>Modeling speech patterns and encouraging children to express themselves through words and sounds.</li>
                          </ul> 
                        </li>
                      </ul>
                      </div>
                  </div>
                </div>

                <div className="col-md-6 col-xxl-4">
                  <div className="boxing-shadow curr-boxes p-3 ">
                    <h4>2.  Physical Development:</h4>
                    <ul>
                      <li><span className="font-bold">Gross Motor Skills:</span>
                        <ul>
                          <li>Providing safe spaces for children to crawl, walk, and explore their physical abilities.</li>
                          <li>Engaging in interactive activities that require focused attention, such as listening to stories and songs.</li>
                        </ul> 
                      </li>
                    </ul>

                    <ul>
                      <li><span className="font-bold">Fine Motor Skills:</span>
                        <ul>
                          <li>Providing activities that promote hand-eye coordination, such as stacking blocks and using small toys.</li>
                          <li>Offering materials for children to manipulate with their fingers, like playdough or finger painting..</li>
                        </ul> 
                      </li>
                    </ul>
                  </div>

                  <div className="my-3 curr-boxes boxing-shadow p-3">
                    <h4>3. Understanding of the World:</h4>
                    <ul>
                      <li><span className="font-bold">Exploring the Environment:</span>
                        <ul>
                          <li>Providing opportunities for sensory exploration, such as playing with sand, water, or natural materials.</li>
                          <li>Taking walks outside and pointing out different objects and features in the environment.</li>
                        </ul> 
                      </li>
                    </ul>

                  </div>
                </div>

                <div className="col-md-6 col-xxl-4">
                  <div className="boxing-shadow curr-boxes p-3 ">
                    <h4>4. Personal, Social and Emotional Development:</h4>
                    <ul>
                      <li><span className="font-bold">Self-Confidence and Self-Awareness:</span>
                        <ul>
                          <li>Providing praise and encouragement to build children's confidence in their abilities.</li>
                          <li>Creating a supportive environment where children feel comfortable expressing themselves.</li>
                        </ul> 
                      </li>
                    </ul>
                  </div>

                  <div className="my-3 curr-boxes boxing-shadow p-3">
                    <h4>5. Expressive Arts and Design:</h4>
                    <ul>
                      <li><span className="font-bold">Creating with Materials:</span>
                        <ul>
                          <li>Providing a variety of art materials for children to explore, such as paint, clay, and collage materials.</li>
                          <li>Allowing children to experiment with different textures and techniques to create their own artwork.</li>
                        </ul> 
                      </li>
                    </ul>

                    <ul>
                      <li><span className="font-bold">Imaginative Play:</span>
                        <ul>
                          <li>Encouraging storytelling and dramatic play to foster creativity and expression.</li>
                          <li>Providing props and costumes to inspire imaginative play, such as dress-up clothes and pretend kitchen sets.</li>
                        </ul> 
                      </li>
                    </ul>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-lg py-5 my-5 overflow-hidden">
          <div>
            <h5 className="text-center">Infant School Leaders</h5>
          </div>

          <div className="row">
            <div className="col-xxl-12">
              <div className="row g-3 justify-content-center">
                <div className="col-xl-2  col-6 col-sm-4 col-md-3">
                  <div>
                    <img src={pic} alt="" />
                    <div>
                      <h3>Mrs Joy</h3>
                      <p>Head of Infant School</p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-2  col-6 col-sm-4 col-md-3">
                  <div>
                    <img src={pic} alt="" />
                    <div>
                      <h3>Mrs Joy</h3>
                      <p>Deputy Head of Infant School</p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-2  col-6 col-sm-4 col-md-3">
                  <div>
                    <img src={pic} alt="" />
                    <div>
                      <h3>Mrs Joy</h3>
                      <p>Head of Creche</p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-2  col-6 col-sm-4 col-md-3">
                  <div>
                    <img src={pic} alt="" />
                    <div>
                      <h3>Mrs Joy</h3>
                      <p>Head of  LDC (Learning Development Class)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
        
        <Footer />
      </section>

		</div>
			
  )
}