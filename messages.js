/* ============================================================
   ALL YOUR FAREWELL MESSAGES LIVE HERE.

   How it works:
   - Each person gets one entry below, keyed by their name in
     lowercase (the key itself is just a lookup label — it doesn't
     have to match capitalization).
   - Visiting the page with ?name=Alastair looks up "alastair"
     here (matching is case-insensitive), greets them by whatever
     capitalization you typed in the URL, and plays through their
     own "messages" list.
   - If a name isn't found in this list, DEFAULT_MESSAGES is used
     instead, so the link never breaks — it just shows a generic
     farewell.

   TO ADD A NEW PERSON:
   1. Copy one of the blocks below (from the { to the },)
   2. Change the key (e.g. "sarah") and the messages
   3. Share the link yoursite.com/?name=Sarah

   The greeting bubble ("Hi Alastair!!!") is generated automatically
   from the name in the URL — you don't need to write it yourself
   unless you want a custom one (see the optional "greeting" field
   in the Alastair example below).
   ============================================================ */

const PEOPLE = {

  alastair: {
    messages: [
      "7 months really flew past, and it's honestly thanks to you! You helped me so much in settling into this new environment and made my day-to-day so much more enjoyable. I still remember the first convo we had when you brought me around the rooftop garden in our old office, and that's when I knew I could be comfortable talking to you.",
      "From us always trying to have lunch by ourselves because we were both introverts, to now laughing and joking about the most random things (suiii 😂), it's crazy how so much has changed. Some of my favourite memories from this internship weren't just the work itself, but all the conversations, jokes and random moments in between.",
      "Thank you for always being so patient with my endless questions. Whether it was about Power BI, trying to understand the supply chain processes or just needing someone to bounce ideas off, you never made me feel like I was asking too much. You were always willing to help and I honestly learned so much because of you.",
      "More than all the technical knowledge, though, I'm most grateful for your friendship. Looking back, I honestly don't think my internship would have been the same without you. I'm really thankful that I got to work alongside you, someone who makes work feel so comfortable and enjoyable.",
      "I'm sure this isn't goodbye since we'll definitely keep in touch 😆, but I just wanted to say thank you for all the guidance, patience, laughs, lunches and for simply making these past 7 months so memorable. I couldn't have asked for a better colleague and friend.",
      "Wishing you nothing but the very best, and I'll see you again soon. Thanks for everything, Alastair 🙆🏽‍♂️"
    ]
  },

  layhoon: {
    messages: [
      "Thank you so much for making this internship such a meaningful learning experience for me. I am really grateful for your patience, guidance and the trust you placed in me throughout these past 7 months.",
      "You always pushed me outside my comfort zone and encouraged me to grow. One thing that has always stuck with me was when you asked me to reconfigure the entire Power BI dashboard to pull directly from the raw data source instead of the automated reports.",
      "At that moment, it felt like I had to start from scratch, but looking back, I realised how valuable that lesson was. Moments like this make me appreciate how you always challenged me to do my best 💪🏼",
      "Beyond the technical skills, I have learned so much from watching how you lead the team. You helped me understand not just the business and supply chain, but also how to work with different stakeholders, communicate effectively and assess situations.",
      "What stood out to me most when interacting with you was your approachability and genuine care for your team. Those are qualities that I really admire and something I hope to carry with me in my own career.",
      "Thank you once again for all your guidance, encouragement and support. I have grown so much, both professionally and personally, because of this internship. It has truly been a memorable experience and I am very grateful to have had the opportunity to learn under your mentorship 😊",
      "Wishing you and the team all the very best and I hope our paths cross again in the future! Thank you for everything, Lay Hoon ❤️"
    ]
  },

  rondy: {
    messages: [
      "Thank you for making my time at MSD such a memorable one! Although we didn't get the chance to work very closely together, on the few times I have reached out to you you were very willing to help me out. I know you had plenty on your own plate, so please know that I really appreciate it 🙏🏼",
      "One thing I've really admired from watching you work is how you approach challenges with a solutions-oriented mindset. No matter the situation, you always seemed focused on finding a way forward. I was also impressed by how confidently and firmly you communicated with stakeholders while still remaining professional. That's definitely something I'll take away from this internship",
      "I have to admit, when I first joined, I found you a little intimidating to talk to 😅 But over the past few months, especially during our lunch conversations, I've really enjoyed getting to know you better and how chill you are. It completely changed my first impression and I'm glad I had the chance to work alongside you.",
      "Thank you once again for being such a welcoming and supportive colleague. Wishing you all the best, both at MSD and wherever your career takes you. I hope our paths cross again someday! Thanks Rondy 🙆🏽‍♂️"
    ]
  },

  shelly: {
    messages: [
      "Thank you for making my internship a great stay! Even though we didn't get to work very closely together and we're both introverts (hehe 😆), I really appreciated all the little conversations we had along the way.",
      "I also really admire how quickly you settled into the team and picked things up, especially knowing that you had only recently joined the team as well. It was inspiring to see how confidently you adapted to a new environment and how you were able to contribute to the team so quickly.",
      "Thank you for being such a welcoming and kind colleague. Wishing you all the best and I hope everything continues to go well for you. Take care! 🩵"
    ]
  },

  eugene: {
    messages: [
      "It still feels surreal that these 7 months have come to an end. I'm truly grateful for the opportunity and trust you placed in me by bringing me into the team. It has been an incredibly meaningful first internship and I've learnt so much because of your guidance and support.",
      "I really appreciated how patient you were at the beginning, taking the time to teach me about the different processes and helping me understand how the supply chain works.",
      "Beyond that, I learnt so much from the conversations we had about the business. One thing that has really stayed with me was when you shared how there is still so much untapped value in data and how organisations can make better decisions by leveraging it more effectively. That perspective completely changed the way I think about data and its role in a business.",
      "I also really admired how you constantly encouraged me to think about improving and streamlining processes through data, instead of simply accepting the status quo. It taught me to always ask 'Can this be done better?', a mindset that I know I'll carry with me throughout my career.",
      "Beyond work, I really enjoyed our conversations during lunch. They gave me a lot of insight into how the corporate world works and helped me better understand what it's like beyond the technical side of the job. As this was my first internship, I couldn't have asked for a better manager to learn from 😊",
      "Thank you once again for all your patience, guidance and encouragement over the past 7 months. I truly appreciate everything you've taught me and I'm grateful to have had the chance to work with you.",
      "Wishing you all the very best and I hope our paths cross again in the future! (I think we will since we live near each other 😂). Thanks Eugene 🩵"
    ]
  },

};

/* Used only if ?name= doesn't match anyone in PEOPLE above. */
const DEFAULT_MESSAGES = [
  "These past few months meant a lot to me, and you were a big part of why.",
  "Thank you for the help, the laughs, and for making the day-to-day genuinely enjoyable.",
  "I'm really going to miss working alongside you.",
  "This isn't goodbye — let's keep in touch. Thank you for everything!"
];
