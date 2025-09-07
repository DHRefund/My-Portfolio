import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".about-text > *", // chọn tất cả phần tử con trực tiếp (h2, p, ...)
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2, // lần lượt từng dòng
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 80%", // khi phần tử gần vào màn hình
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  return (
    <div id="summary" className="min-h-screen w-full">
      <div className="w-full px-15 py-4  rounded-2xl shadow-lg text-white about-text">
        <h2 className=" font-bold mb-4 uppercase tracking-wider hero-text text-center ">Summary</h2>
        <p className=" text-white-50 md:text-xl  mb-20 px-20">
          I’m a <b>Full Stack Software Engineer</b> with 3 years of experience in Web Development, specializing in
          ReactJS NextJS for modern front-end web and NodeJS-related technologies.
          <br />
          With my knowledge of UI/UX design, I enjoy solving front-end problems and creating the best user experience
          for users. I also spend time learning new technologies and best practices to become a better engineer.
        </p>
        <h2 className="hero-text font-bold mb-4 mt-4 uppercase tracking-wider text-center ">Technical Skills</h2>
        <ul className="mb-4 list-disc list-inside space-y-2 text-white-50 md:text-xl px-20 ">
          <li>
            <b>Programming Languages:</b> JavaScript &amp; TypeScript, Java
          </li>
          <li>
            <b>Frameworks/Platforms:</b>
            <ul className="list-disc list-inside ml-6">
              <li>ReactJS, NextJS, ExpressJS, NestJS, Spring Boot</li>
              <li>Vite, Webpack/Babel</li>
              <li>TailwindCSS, Shadcn, Material-UI, GSAP</li>
              <li>Figma, Adobe Photoshop, Adobe Premiere</li>
            </ul>
          </li>
          <li>
            <b>Database Management Systems:</b> PostgreSQL, MySQL
          </li>
          <li>
            <b>Foreign Languages:</b> TOEIC: 645, JLPT: N2
          </li>
          <li>
            <b>Other:</b>
            <ul className="list-disc list-inside ml-6">
              <li>
                Understanding of OOP methodologies, SOLID principles, design patterns, DDD (Domain-Driven Design), and
                Clean Architecture.
              </li>
              <li>
                Knowledge of Cloud Computing Platforms: AWS(EC2,Elastic Beanstalk, Amplify, S3+CloudFront,...),
                Appwrite, Firebase, Cloudinary, Clerk, ...
              </li>
              <li>Experience in setting up CI/CD pipelines, using Docker</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
