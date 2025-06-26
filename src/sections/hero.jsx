import React from "react";
import ContactList from "@/components/contact-list";
import MotionText from "@/components/motion-text";
import MotionDiv from "@/components/motion-div";
import Memoji from "@/components/memoji";
export default function hero() {
  return (
    <section className="my-8 flex flex-col items-center justify-center">
      <h1 className="mb-4 text-[1.4rem] md:text-[2rem] text-green-500 font-black">
        <MotionText delayOffset={0}>Hi, I'm Kidus Haile! 👋</MotionText>
      </h1>

      <div className="my-12 flex w-full flex-col gap-2 text-center lg:w-[50%]">
        <MotionDiv delayOffset={1.4}>
          <p>
            Hello, I’m Kidus (aka theBitsEngineer), a senior full-stack
            developer based in Addis Ababa, Ethiopia. I graduated with a
            Bachelor's degree in Software Engineering in June 2024 from AASTU,
            and I have over 8 years of programming experience, starting as a
            self-taught developer in high school. I build web apps, mobile apps,
            games, and Telegram bots and more, always with a focus on clean
            code, solid system design, and scalable architecture.
            <br />
            With strong skills in both frontend and backend development, I
            thrive on solving complex problems and delivering reliable,
            high-performance solutions.
          </p>
        </MotionDiv>
      </div>
      <h1>
        <MotionDiv delayOffset={0.8}>
          <b>Kidus Haile | The Bits Engineer</b>
        </MotionDiv>
      </h1>
      <div className="my-8">
        <ContactList delayOffset={1.45} showWhenInView={false} />
      </div>
    </section>
  );
}
