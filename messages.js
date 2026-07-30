/* ============================================================
   ALL YOUR FAREWELL MESSAGES LIVE HERE.

   BASICS
   - Each person gets one entry below, keyed by whatever you want
     to appear after ?name= in their link.
   - Matching is now case-insensitive and ignores extra spaces, so
     "Alastair", "alastair" and "ALASTAIR" in the URL all find the
     same entry — capitalize the key however you like.
   - If a name in the URL isn't found in this list, DEFAULT_MESSAGES
     is used instead, so a broken/typo'd link never crashes — it
     just shows a generic farewell.

   TWO-WORD NAMES (e.g. "Ala Stair")
   - Wrap the key in quotes when it has a space in it:
       "Ala Stair": { messages: [ ... ] }
     (Without quotes, `Ala Stair:` is invalid JavaScript and the
     whole file will fail to load — always quote multi-word keys.)
   - Share the link with the space encoded as %20 or +, e.g.
       yoursite.com/?name=Ala%20Stair
     Browsers usually do this automatically if you paste a name
     with a space into the address bar.

   TO ADD A NEW PERSON
   1. Copy one of the blocks below (from the { to the },)
   2. Change the key and the messages
   3. Share the link yoursite.com/?name=WhateverKeyYouUsed

   KEEPING A LINK PRIVATE-ISH (see displayName below)
   - Anyone can still edit the address bar on any website — there's
     no way for a webpage to hide or lock its own URL. What you CAN
     do is make the link non-obvious to guess or hand-edit: instead
     of a real name, use a short random code as the key, and set
     "displayName" to the real name so the greeting still shows it
     correctly. For example:
       "q7x2p": { displayName: "Alastair", messages: [ ... ] }
     Link you'd share: yoursite.com/?name=q7x2p
     Someone editing that to "?name=alastair" (or guessing another
     colleague's actual name) won't match anything, since the real
     lookup key is the random code, not the name itself.
   ============================================================ */

const PEOPLE = {

"q7x2p": {
    displayName: "Alastair",
    messages: [
      "7 months really flew past, and it's honestly thanks to you! You helped me so much in settling into this new environment and made my day-to-day so much more enjoyable. I still remember the first convo we had when you brought me around the rooftop garden in our old office, and that's when I knew I could be comfortable talking to you.",
      "From us always trying to have lunch by ourselves because we were both introverts, to now laughing and joking about the most random things (suiii 😂), it's crazy how so much has changed. Some of my favourite memories from this internship weren't just the work itself, but all the conversations, jokes and random moments in between.",
      "Thank you for always being so patient with my endless questions. Whether it was about Power BI, trying to understand the supply chain processes or just needing someone to bounce ideas off, you never made me feel like I was asking too much. You were always willing to help and I honestly learned so much because of you.",
      "More than all of that though, I'm most grateful for our friendship. Looking back, I honestly don't think my internship would have been the same without you. I'm really thankful that I got to work alongside you, someone who made work feel so comfortable and enjoyable.",
      "I'm sure this isn't goodbye since we'll definitely keep in touch 😆, but I just wanted to say thank you for all the guidance, patience, laughs, lunches and for simply making these past 7 months so memorable. I couldn't have asked for a better colleague and friend.",
      "Wishing you nothing but the very best, and I'll see you again soon. Thanks for everything, Alastair 🙆🏽‍♂️"
    ]
  },

"g21x32r": {
    displayName: "Lay Hoon",
    messages: [
      "Thank you so much for making this internship such a meaningful learning experience for me. I am really grateful for your patience, guidance and the trust you placed in me throughout these past 7 months.",
      "You always pushed me outside my comfort zone and encouraged me to grow. One thing that has always stuck with me was when you asked me to reconfigure the entire Power BI dashboard to pull directly from the raw data source instead of the automated reports 😅",
      "At that moment, it felt like I had to start from scratch, but looking back, I realised how valuable that lesson was. Moments like this make me appreciate how you always challenged me to do my best 💪🏼",
      "Beyond the technical skills, I have learned so much from watching how you lead the team. You helped me understand not just the business and supply chain, but also how to work with different stakeholders, communicate effectively and assess situations.",
      "What stood out to me most when interacting with you was your approachability and genuine care for the team. Those are qualities that I really admire and something I hope to carry with me in my own career.",
      "Thank you once again for all your guidance, encouragement and support. I have grown so much, both professionally and personally, because of this internship. It has truly been a memorable experience and I am very grateful to have had the opportunity to learn under your mentorship 😊",
      "Wishing you and the team all the very best and I hope our paths cross again in the future! Thank you for everything, Lay Hoon ❤️"
    ]
  },

  "f7w3cs": {
    displayName: "Rondy",
    messages: [
      "Thank you for making my time at MSD such a memorable one! Although we didn't get the chance to work very closely together, on the few times I have reached out to you, you were very willing to help me out. I know you had plenty on your own plate, so please know that I really appreciate it 🙏🏼",
      "One thing I've really admired from watching you work is how you approach challenges with a solutions-oriented mindset. No matter the situation, you always seemed focused on finding a way forward. I was also impressed by how confidently and firmly you communicated with stakeholders while still remaining professional. That's definitely something I'll take away from this internship",
      "I have to admit, when I first joined, I found you a little intimidating to talk to 😅 But over the past few months, especially during our lunch conversations, I've really enjoyed getting to know you better and how chill you are. It completely changed my first impression and I'm glad I had the chance to work alongside you.",
      "Thank you once again for being such a welcoming and supportive colleague. Wishing you all the best, both at MSD and wherever your career takes you. I hope our paths cross again someday! Thanks Rondy 🙆🏽‍♂️"
    ]
  },

  "h8y4dt": {
    displayName: "Shelly",
    messages: [
      "Thank you for making my internship a great stay! Even though we didn't get to work very closely together and we're both introverts (hehe 😆), I really appreciated all the little conversations we had along the way.",
      "I also really admire how quickly you settled into the team and picked things up, especially knowing that you had only recently joined the team as well. It was inspiring to see how confidently you adapted to a new environment and how you were able to contribute to the team so quickly.",
      "Thank you for being such a welcoming and kind colleague. Wishing you all the best and I hope everything continues to go well for you. Take care! 🩵"
    ]
  },

  "i9z5eu": {
    displayName: "Eugene",
    messages: [
      "It still feels surreal that these 7 months have come to an end. I'm truly grateful for the opportunity and trust you placed in me by bringing me into the team. It has been an incredibly meaningful first internship and I've learnt so much because of your guidance and support.",
      "I really appreciated how patient you were at the beginning, taking the time to teach me about the different processes and helping me understand how the supply chain works.",
      "Beyond that, I learnt so much on how the corporate world works from the conversations we had. One thing that has really stayed with me was when you shared how there is still so much untapped value in data and how organisations can make better decisions by leveraging it more effectively.",
      "That perspective changed the way I think about data and its role in a business. As this was my first internship, I couldn't have asked for a better manager to learn from 😊",
      "I also really liked how you constantly encouraged me to think about improving and streamlining processes through data, instead of simply accepting the status quo. It taught me to always ask 'Can this be done better?', a mindset that I know I'll carry with me throughout my career.",
      "Beyond work, I really enjoyed our conversations during lunch. They gave me the chance to get to know you more on a personal level and I liked hearing about your experiences and perspectives",
      "Thank you once again for all your patience, guidance and encouragement over the past 7 months. I truly appreciate everything you've taught me and I'm grateful to have had the chance to work with you.",
      "Wishing you all the very best and I hope our paths cross again in the future! (I think we will since we live near each other 😂). Thanks Eugene 🩵"
    ]
  },

  "j0a6fv": {
    displayName: "Xin Huan",
    messages: [
      "Thank you for being such a warm and welcoming colleague throughout my internship.",
      "I still remember the first time we really talked in the old office, when it was just the two of us and Riley sitting at our desks and getting to know each other. It was such a simple conversation but I think that was when I started feeling comfortable around you. (Maybe it helped that you're around my sister's age too haha 😆)",
      "Over the past 7 months, I've really enjoyed all the conversations we've had, especially during lunch. It was always nice chatting with you, whether we were talking about work or just life in general. Thank you for always being so kind, approachable and encouraging. It really made my internship experience that much more enjoyable.",
      "Wishing you all the best, and I hope everything goes well for you and your two little ones! 😊 (if I do get any tickets for kids shows in MBS, I will hit you up!)",
      "Thank you once again for all the kindness you've shown me. Take care!"
      ]
  },

  "k1b7gw": {
    displayName: "Wei Min",
    messages: [
      "Thank you for being such a welcoming colleague throughout my internship!",
      "Even though we didn't get the chance to work very closely together, I really enjoyed all the little conversations we have on the way to MBR meetings and over lunch. Those small moments really made my days at work much more enjoyable.",
      "I think one memory that will always stick with me is our first trip to Hajah Maimunah, where I somehow ended up paying $1 more than you just because I decided to get the quail eggs 😂 It's such a random memory, but it's one of those little moments that I'll always remember.",
      "Thank you once again for your kindness and for making me feel so welcome over the past 7 months. Wishing you all the very best and take care!",
      ]
  },

  "l2c8hx": {
    displayName: "Rosaline",
    messages: [
      "Thank you for making these past 7 months so fun and enjoyable! One of the things I always looked forward to was having lunch with you. You always had the funniest and most interesting stories to share, and they never failed to make our lunch breaks more entertaining 😂",
      "From the very beginning, you made me feel so comfortable and welcomed, and I'm really grateful for your kindness. It's the little moments and conversations like these that made my internship such a memorable experience.",
      "I'll definitely miss hearing all your stories during lunch! 😄 Thank you once again for all the laughs and for making my time here so enjoyable. Wishing you all the very best! Take care, and I hope our paths cross again someday!",
      ]
  },

  "m3d9iy": {
    displayName: "Jing Wen",
    messages: [
      "The time has finally come... you're taking over me muahaha 😂 All the best!!",
      "But on a serious note, I'm really happy that you're the one taking over. From the very first day, I could already tell how driven and motivated you are and I have no doubt you'll do an amazing job 💪🏼",
      "I've tried my best to teach you everything you'll need to know and I hope I've done a decent job hahaha 😆 But don't worry if you don't remember everything, there's always something new to learn and you'll pick things up as you go.",
      "If I could give you one piece of advice, it'd be this: don't be afraid to make mistakes. Everyone starts somewhere and that's how you'll learn the fastest. Lay Hoon and Eugene are incredibly supportive, so don't hesitate to ask questions or seek help whenever you need it. They genuinely want you to succeed!",
      "Another tip: get to know everyone in the office! Don't spend all your time with Jovee🤣 go on those Tues runs with the team, chat with the other interns and make the most of your time here. The people are honestly one of the best parts of this internship.",
      "I'm sure we'll meet again in the future, so I'll keep this short. Wishing you an amazing internship at MSD!!! I hope you enjoy it as much as I did. All the best, and see you around! 😊",
      ]
  },

  "n4e0jz": {
    displayName: "Jovee",
    messages: [
      "Horoscope girl!!! 🤣🤣🤣",
      "It's been nice getting to know you over the past 2 months! You know I actually spotted you before you even came into the office on your first day 😂 Your blonde hair kind of gave it away, I saw you waiting at the information counter and immediately thought, 'That must be the new intern.'",
      "I've really enjoyed all the conversations we've had. Idky but talking to you always felt so easy and comfortable. One of my favourite memories has to be our Tuesday run together and the deep conversation we had during the run... although I only realised now that I probably told you more about my love life than you told me about yours 🤔😂",
      "I really hope you'll enjoy this internship as much as I did. Make sure you keep going for those Tues runs and get to know everyone in the office! The people here are legit one of the best parts of this internship.",
      "Also, keep me updated on all the projects you'll be working on, especially that AI Reader project you have to do by November (as requested by LO 😂) I'm genuinely interested to see how it turns out",
      "All the best for the rest of your internship!!! I'm sure you'll do great and let's meet again in the future. See you around!",
      "(I still think it's really cool that you have an identical twin sister 😂)",
    ]
  },

  "o5f1ka": {
    displayName: "Yeok Lin aka Riley",
    messages: [
      "7 months of internship together??? And somehow I still barely saw you in the office... SLACKER! 😂😂😂",
      "But honestly, it's been so nice having you around these past 7 months. You definitely made office life so much more fun whenever you were actually in 😤 I'll definitely miss our random trips upstairs to play pool/table soccer, hiding in a pod to slack and all the random conversations in between. Those moments are definitely core memories from this internship.",
      "I genuinely enjoyed spending time with you and I'm really glad this internship gave us the chance to become friends. Thanks for always making work feel a little less like work 😊",
      "All the best for Y4! Even when we're both drowning in school work, let's still find time to meet up once in a while with Celest. Hopefully we'll also get to watch each other graduate in a year's time. Until then, I hope you get your good christian MAN with indian features and a big back on hinge quickly 😂😂"
    ]
  },

  "p6g2lb": {
    displayName: "Celest",
    messages: [
      "To the real intern that actually did the internship with me... (Yeok Lin is basically a fake intern at this point 🤣)",
      "Thank you for being my intern buddy throughout these past 7 months. I don't think anyone else could understand the internship struggles quite like you did. Whether it was complaining about work or your bosses, slacking in a pod or just talking nonsense together, you definitely made every workday so much more fun.",
      "I'll definitely miss all the random conversations we had and all the little moments in between. Looking back, those are honestly the core memories I'll have from this internship.",
      "We'll definitely meet up again with Riley soon enough. But before that, I just wanted to say thank you. I'm really grateful that this internship gave us the chance to become friends, and I couldn't have asked for a better intern buddy",
      "All the best for final year! Let's see each other in graduation gowns in a year's time! Take care and see you again soon! 😊",
      ]
  },
  // Example: a two-word name — note the quotes around the key.
  // "Jane Doe": {
  //   messages: [
  //     "Message one...",
  //     "Message two..."
  //   ]
  // },

  // Example: an opaque link token, so the shared URL doesn't reveal
  // (or invite editing to) a real colleague's name.
  // "q7x2p": {
  //   displayName: "Jane",
  //   messages: [
  //     "Message one...",
  //     "Message two..."
  //   ]
  // },

};

/* Used only if ?name= doesn't match anyone in PEOPLE above. */
const DEFAULT_MESSAGES = [
  "These past few months meant a lot to me, and you were a big part of why.",
  "Thank you for the help, the laughs, and for making the day-to-day genuinely enjoyable.",
  "I'm really going to miss working alongside you.",
  "This isn't goodbye — let's keep in touch. Thank you for everything!"
];
