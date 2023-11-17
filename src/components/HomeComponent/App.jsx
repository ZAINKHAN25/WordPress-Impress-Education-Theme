import './App.css';

import personUsingImage from '../../assestsTwo/Person Using Phone png.png'

function App() {
    return (
        <div className="homeComponent">
            <div className="firstLineHome">
                <button className="welcomeHomeComponent">Welcome To learnzoomy</button>
                <h2>
                    Embark on your learning journey with our online courses
                </h2>
                <p>
                    🚀 Excel in both education and freelancing! Join now for expert-led online tuition and step-by-step freelancing guidance. Your success story begins here! 📚💼
                </p>
                <div className="btnAreaOfHomeCompnnt">
                    <button>Get Started</button>
                    <button>About Us</button>
                </div>
                <div className="satisfyDivHome">
                    <div>
                        {/* image will be come here */}
                        <img src="https://img.freepik.com/free-photo/cheerful-student-writing-holding-books_1098-3439.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699920000&semt=ais" alt="" />
                        <img src="https://cdn.create.vista.com/api/media/small/363269564/stock-photo-young-girl-kid-student-touching-glasses-looking-camera-wearing-degree" alt="" />
                        <img src="https://img.freepik.com/premium-photo/portrait-asian-school-boy-born-blue-background_466494-3280.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699401600&semt=ais" alt="" />
                        <img src="https://img.freepik.com/premium-photo/schoolchild-teenage-student-girl-with-school-bag-backpack-hold-book-yellow-isolated-studio-background-children-school-education-concept-shocked-surprised-teenager-girl_545934-26019.jpg" alt="" />
                    </div>
                    <div>
                        1000+ Satisfied students
                    </div>
                </div>
            </div>
            <div className="secondLineHome position-relative">
                <div className="homeSecondLineFirstDiv"></div>
                <div className="homeSecondLineThirdDiv">
                    <div className="homeSecondLineSecondDiv"></div>
                    <div className='divofhomemainimage'>
                        <img src={personUsingImage} alt="" className='personUsingImageHome' />
                    </div>
                </div>
                <div className="homeSecondLineStudentsDiv py-2 px-5">
                    {/* <img src="" alt="" /> */}
                    <div className='d-flex'>
                        <h4 className='me-2'>1000+</h4>
                        <p>students</p>
                    </div>
                </div>
                <div className="homeSecondLineCoursesDiv py-2 px-5">
                    {/* <img src="" alt="" /> */}
                    <div className='d-flex'>
                        <h4 className='me-2'>100+</h4>
                        <p>courses</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;