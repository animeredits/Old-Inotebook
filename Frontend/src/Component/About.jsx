import React, { useContext, useEffect } from "react";
import NoteContext from "../Context/Notes/NoteContext";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigat = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigat("/Login")
    }
  }, [])
  return (
    <>
      <h2>About INoteBook</h2>
      <p>Welcome to ImoteBook  your go to destination for seamless note-taking and efficient task management. We believe in simplifying your life by providing a user friendly platform that empowers you to stay organized, productive, and inspired.</p>
      <div class="accordion" id="accordionExample" style={{ background: "black" }}>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Intuitive Design</button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              At InoteBook, our mission is to revolutionize the way you capture ideas, manage tasks, and bring your to-do lists to life. We understand the challenges of balancing a busy schedule, and we're here to help you navigate through it effortlessly.Our app is designed with simplicity in mind. We prioritize a clean, intuitive interface, ensuring that you can focus on your tasks without any unnecessary distractions. Whether you're a seasoned planner or new to task management, [Your App Name] is designed to cater to your needs.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Versatile Functionality
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              From quick notes to detailed project plans, InoteBook offers a range of features to suit your diverse needs. Enjoy the flexibility to organize your thoughts, set priorities, and collaborate seamlessly, all within one powerful platform.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Seamless Synchronization
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Never miss a beat. With our seamless synchronization across devices, your notes and to-dos are accessible anytime, anywhere. Whether you're on your computer, tablet, or smartphone, InoteBook keeps you connected to your tasks in real-time.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              Our Team
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Behind InoteBook is a passionate team dedicated to creating a product that enhances your daily life. We are driven by innovation, and our commitment to excellence reflects in every aspect of our app.
            </div>
          </div>
        </div>
      </div>
      <p className="my-3">Thank you for choosing InoteBook. Here's to a more organized and productive you!</p>
    </>
  );
};

export default About;
