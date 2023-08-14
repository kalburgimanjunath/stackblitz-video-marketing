import { useState } from 'react';
export default function Home() {
  const EmailSub = () => {
    const [email, setEmail] = useState('');
    const handleSubmit = () => {
      fetch('https://api.airtable.com/v0/appgmQkzNpMpqrTdg/email', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: {
          fields: {
            email: email,
          },
        },
      })
        .then((response) => response.json())
        .catch((error) => {
          console.error(error);
        });
    };
    return (
      <div>
        <div>
          <input
            type="text"
            className="text-field p-2 border-2 mt-2 mb-5 w-full"
            placeholder="Enter your Email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          className="primary-button bg-violet-500 rounded-full p-2 text-white w-full"
          onClick={handleSubmit}
        >
          Send Me Lesson #1
        </button>
      </div>
    );
  };
  return (
    <div className="bg-black text-white p-5">
      <div className="flex grid grid-cols-2 ">
        <section className="bg-white text-black p-5">
          <h1 className="font-bold">
            Video Marketing Mastery: A 5-Day Email Course To Help Agencies
            Create Winning Campaigns, Retain Clients, And Scale Past $10k Months
          </h1>
          <p>
            Millions in revenue generated with the frameworks shared in this
            course!
          </p>
          <EmailSub />
        </section>
        <section className="bg-white text-black p-5">
          <ul className="list-disc text-violet-500 text-2xl">
            <li>Creative guidelines for all the major video platforms </li>
            <li>18 actionable tips to improve campaign performance</li>
            <li> Briefing templates + AI writing companion</li>
            <li> 10 award winning campaign examples</li>
            <li>
              Everything you need to become a video marketing pro, and set
              yourself apart from other agencies.
            </li>
          </ul>
          <h2 className="font-bold pt-5 pb-5">
            Ready to produce campaigns that will help you scale past $10k
            months?
          </h2>
          <p className="text-2xl">
            My name is Manjunath Kalburgi, and I have produced multiple award
            winning campaigns and spent the last 5 years at YouTube working with
            the biggest brands in the world. And now, I want to share everything
            I know with you.
          </p>
          <div>
            <h3 className="font-bold pt-5 pb-5">
              "This 5-Day Email Course is so valuable, he should have charged
              for it."
            </h3>
          </div>
        </section>
      </div>
      <section className="bg-white mt-5 mb-5 text-black p-5">
        <h1 className="font-bold font-2xlg">
          Want to make sure this free email course is “worth it” before you
          sign-up? Here's everything that's inside:
        </h1>
        <ul className="font-regular text-2xl mt-5 leading-relaxed">
          <li>
            Day 1: Rubbish In, Rubbish Out (Don’t let a bad brief ruin your
            chances of success){' '}
          </li>
          <li>
            Day 2: The Power of Creative (Use it to increase campaign
            performance by 75%){' '}
          </li>
          <li>
            Day 3: Tired of relying on guesswork for your campaign's success?
            (Use data like a pro)
          </li>
          <li>Day 4: The Forgotten Art Of Video SEO (And How To Use It) </li>
          <li>
            Day 5: Wrapping Up Campaigns (And How To Use It As A Sales
            Opportunity)
          </li>
        </ul>
        <EmailSub />
      </section>
    </div>
  );
}
