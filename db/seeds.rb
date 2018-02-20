require 'faker'
press =Page.create({page_type: "Press"})

images = [
    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/26993366_1580711935298029_611254072946550428_n.jpg?oh=3c93af7e45f1e68c4b325bdbdc0310f8&oe=5ADA2374",
    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/21192026_1443073582395199_1062451394177389632_n.jpg?oh=4a5819fc54497e648fec595f045fc263&oe=5B09ADBC",
    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/19990496_1396625053706719_5415138348471492511_n.jpg?oh=b82854cf60033d670bd4c24b0489af49&oe=5B1DF55A",
    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/19989330_1396433117059246_6928315913900142427_n.jpg?oh=d7e294b60f022dac925416daff9c2258&oe=5B137F0C",
    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/20046280_1396093200426571_7186641344731813799_n.jpg?oh=70fe13bb1a372910e96faf161d8852cf&oe=5B243777",
    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/19895113_1394069727295585_8181690511253445445_n.jpg?oh=624fc2d4471eae24fd402d2960d77fba&oe=5B16D554",
    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/19399241_1376036785765546_4983184253044002155_n.jpg?oh=5209890d0b8704244bd8f8184320d383&oe=5B148862",
    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/15826494_1204036862965540_4945437145124178953_n.jpg?oh=c497f7818d8e1ea05344b1fdcd3769e3&oe=5ADD34BA",
    "https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/15724770_1201608249875068_2411188502480021255_o.jpg?oh=385fd41eef0918a3e784869e7bc7cd11&oe=5B112694",
    "https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/15724799_1195402847162275_5150642119146931190_o.jpg?oh=4ffbf36807b0ef3fba80ee3f31f18220&oe=5B26E345",
    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/15665427_1194337850602108_2389284949587324711_n.jpg?oh=82d61cacb16b93d0f13f1800f0ebf4b1&oe=5B0C7136",
    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/15621931_1192399300795963_4663776221609686894_n.jpg?oh=40a8642077d715deeb1b5230dedfc64f&oe=5B26E5A4",
    "https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/15440532_1182422788460281_7853164483374236869_o.jpg?oh=68a44b14178fd85d4289ec0d1ac997bd&oe=5B152C5B",
    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/15181581_1159918210710739_2565663071790198829_n.jpg?oh=87b766a2c1d2bc5b2b8ec16966e70cfb&oe=5B22FE86",
    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/15032654_1151780808191146_969915822132904178_n.jpg?oh=364deb8049bf7b9820d84c7cfbccf49e&oe=5B24C2C8",
    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/15107243_1149929788376248_820373308421641710_n.jpg?oh=dd37d53a1e9cec9155e3f89cbc1b7156&oe=5B0AF961",
    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/15037260_1149422411760319_2634800070772913681_n.jpg?oh=57cdb66ae3af8043dfa0267504a6caaf&oe=5B235651",
    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/14962582_1146174565418437_3602908948726601514_n.jpg?oh=f1e586b48787b7c157acf368178009f1&oe=5B149255",
    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/14915500_1142385669130660_6673703020753697232_n.jpg?oh=9a937884c968b32a4d7bed81729887c6&oe=5B118BB6",
    "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/14720385_1119872098048684_8356700610160871728_n.jpg?oh=3d79f9675244ba968b10d17e7dac212f&oe=5B1F5E60",

]


# 15.times do |i|

#     Blog.create({
#         content:[
#             ["title", Faker::Lorem.sentence],
#             ["title2", Faker::Lorem.sentence],
#             ["image", images[i]],
#             ["subtitle", Faker::Lorem.sentence],
#             ["text", Faker::Lorem.paragraph],
#         ]
#     })

# end

Blog.create({
    content: [
        ["title","10 Years Later..."],
        ["title2","My Top Moments From Super Bowl 42!"],
        ["image","https://i.imgur.com/uQu83S6.jpg"],
        ["subtitle","Has it been 10 years?"],
        ["text","This year marks the 10th year anniversary of the Giants historic Super Bowl 42 Championship win over the undefeated New England Patriots. I was only a young rookie on the Giants practice roster but it felt like I had 53-man roster privileges. I hung out with the big names on the team, I got a little press and publicity throughout the season and the city of New York showed me love! You all remember the on the field journey of the team that season but what a year it was off the field as well. From modeling on BET’s Rip the Runway to partying on day offs in Atlantic City for free to game nights at Reuben Droughns apartment where I met rapper Joe Budden and other celebrities, I’ll never forget the off the field adventures that season either. They made me work harder on the field because I never wanted that part of my life to end! FAST FORWARD TO THE SUPER BOWL..."],
        ["subtitle","You have arrived in Arizona…"],
        ["image","https://i.imgur.com/bfFuynb.jpg"],
        ["image","https://i.imgur.com/HUZa9Nu.jpg"],
        ["image","https://i.imgur.com/ZaYWN20.jpg"],
        ["image","https://i.imgur.com/7LdTGqF.jpg"],
        ["text","I can’t remember the name of the resort we stayed at but I remember it was so damn far from the action lol. The place was huge! The rooms were distinctly better than when we went to London earlier in the year for the Dolphins game. My roommate that week was running back K.J Harris. I remember walking through what felt like a maze to get to my room. And when I had finally arrived, there was a BIG Reebok bag full of Super Bowl gear because I was an endorsed athlete by Reebok. Christmas gifts for DAYS lol!"],
        ["subtitle","David Tyree’s week"],
        ["image","https://i.imgur.com/ZfY0b1O.jpg"],
        ["text","David Tyree was the team’s spiritual leader and ‘utility guy’. He was a special teams monster and did a lot of the dirty work. That week, Plax hurt his knee and DT had a larger role in the pass game than usual weeks. There was one practice where it felt like he was dropping everything thrown his way. Don’t try and say I’m hating saying he was dropping everything. Did you watch his special on NFL Network? "],
        ["text","Fast forward to the game where he made on the of greatest catches in Super Bowl history! I remember thinking ‘GOD is REAL’ when he made the catch!"],
        ["image","https://i.imgur.com/TvDU22I.jpg"],
        ["subtitle","All eyes on Stray!"],
        ["image","https://i.imgur.com/4LVNRUl.jpg"],
        ["text","Throughout the season, I would constantly ask Michael Strahan about how to go about building an off the field brand. I wanted football to open doors for me in terms of becoming a model and actor. I remember he would always call me, “Lil Will Smith!” Fast forward to media day! The media was all over him."],
        ["image","https://i.imgur.com/TPXPFIx.jpg"],
        ["text","Every global media outlet wanted to interview him or fan wanted a picture with him. He handled everything so smoothly. It was like he was in his element and he wasn’t bending the edge on a pass rush, he was simply vibing with ‘the people/. I remember sitting there watching him and telling myself, “That guy will be a SUPERSTAR. Follow his blueprint!”"],
        ["subtitle","Thank you Kellie Pickler!"],
        ["image","https://i.imgur.com/GVK0mff.jpg"],
        ["text","I didn’t do many interviews on media day. I mean, why would someone want to interview a Practice Squad guy who hadn’t seen live game action since the Pre-season? I was in awe the entire time. Taking everything in and saying to myself, “One day you’ll be back and you’ll be doing all the top interviews!” I was an ambitious rookie!"],
            ["image","https://i.imgur.com/Zls2Uxy.jpg"],
            ["text","Then I remember getting tapped on the shoulder by a short blonde haired woman with a slight country accent, asking to help her get an interview with the overly crowded Michael Strahan. I had NO CLUE who this woman was but she seemed fun and she had a camera crew with her, so I thought shiiiiii*t why not lol? We decided that she’d hop on my shoulders to make her taller and she’d ask Stray some questions. I didn’t think much of it until my mom called me that night and said she saw me on the Tonight Show. That short blonde haired woman was American Idol finalist Kellie Pickler doing some correspondent work for Jay Leno. TV TIME!!"],
            ["subtitle","GAME TIME!"],
            ["image","https://i.imgur.com/2eBQnl1.jpg"],
            ["image","https://i.imgur.com/05tpy2t.jpg"],
            ["image","https://i.imgur.com/n3juVVO.jpg"],
            ["image","https://i.imgur.com/GHJCXC2.jpg"],
            ["text","I remember seeing Alicia Keys and becoming a ‘fanboy’, running up to her to ask for a picture pregame and all the other guys who didn’t dress for the game jumping in the picture. I remember the energy in the tunnel as we were about to run out. Every single player on our team knew we were going to win that game. I remember Eli warming up on the sideline and having this calmness to him. It was the biggest game of this guys career and he was so poised."],
            ["image","https://i.imgur.com/JI3ycMD.jpg"],
            ["image","https://i.imgur.com/Lhg6Mci.jpg"],
            ["text","After we had won, the confetti and photographers littered the field. I was trying to sneak as close to the trophy as possible because I wanted to be seen on T.V! I specifically remember wanting to get a picture with my wide receivers coach, Mike Sullivan. About 11 months back, he drove to UMASS in the snow to work me out on my Pro Day and was the coach who called on draft day to offer me an Undrafted Free Agent contract with the Giants!"],
            ["subtitle","PARTY TIME!"],
            ["image","https://i.imgur.com/LxU9M4U.jpg"],
            ["image","https://i.imgur.com/jhfUMFT.jpg"],
            ["image","https://i.imgur.com/PNxZ28h.jpg"],
            ["image","https://i.imgur.com/Puy9J2Y.jpg"],
            ["image","https://i.imgur.com/8BZwMat.jpg"],
            ["image","https://i.imgur.com/XomcFoC.jpg"],
            ["text","I remember going back to the team hotel briefly to celebrate with the organization, friends, and family. I think we stayed there for about less than an hour and then went out to Old Scottsdale to celebrate. And when I say celebrate...boy did I have the time of my life! At the time, Browns WR Braylon Edwards was cool with a lot of guys on the team so I went out with teammates and Braylon! I remember Patron being poured in my mouth from the bottle and seeing some of the most beautiful women I’ve ever seen in my life! The entire night was crazy! I didn’t get back to the team hotel until the next morning. I had to run to my hotel room, quickly pack my bags and rush to the team bus. I almost missed the team bus back to the airport! Almost! And even if I did, I wouldn’t have cared because I was a Super Bowl Champion!"],
            ["text","All in all. Thank you once again to the game of FOOTBALL for allowing me to not only live but be apart some of my brothers dreams!"],
        ]
})


Blog.create({
    content: [
        ["title", "How did you ALL-STAR?"],
        ["title2", ""],
        ["image", "https://i.imgur.com/PEyjRax.jpg"],
        ["subtitle", ""],
        ["text", "I’m sure I was not the only person who skipped this years SUPER BOWL and its events because it was cold AF in Minneapolis! I know I’m a former NFL receiver, I’m a Giants TV personality and week of Super Bowl events would be great for my Instagram but nobody has time for 11 degree weather!"],
        ["text", "Fast forward to this past weekend. NBA ALL-STAR weekend 2018 in LA. No way I was I going to miss out on 75 degree weather, mansion parties, celebrities and beautiful women! Besides, I live here lol. Here’s the thing about All-Star weekend, depending on who you talk to, it’s not as “classy” as Super Bowl week. A lot of people think it is a RATCHET FEST, filled with gold digging women, male groupies, overpriced club entry and people going broke just to “stunt for the gram!” Trust me, I saw a lot of that but, if you do it right and take advantage the exposure to the established and upcoming brands, there are endless opportunities for you to network, party, holla and meet new people."],
        ["subtitle", "Here’s a couple pics & vids from this past weekend."],
        ["image", "https://i.imgur.com/PYtMgxdg.jpg"],
        ["image", "https://i.imgur.com/8KKqzE0.jpg"],
        ["image", "https://i.imgur.com/6EyjW0D.jpg"],
        ["image", "https://i.imgur.com/Ka3jO6f.jpg"],
        ["image", "https://lionessmagazine.com/wp-content/uploads/2018/02/Tosca-Musk-and-James-Andrews-670x447.jpg"],
        ["text", "The Summit began with the BIG LOVEFEST Valentine’s Day Women’s Networking Luncheon at the Jeremey Hotel – West Hollywood, hosted by ESPN Sportscenter Anchor, Cari Champion and sounds by DJ, television personality, and fashion model DJ KISS. The event honored women in business, sports, and entertainment including motivating speeches by Los Angeles Sparks President/COO, Christine Simmons, ESPN Sports Center Host, Cari Champion, and Baron Davis."],
        ["subtitle", "Awkward Moment:"],
        ["text", "I think it was a women's only event! I was RSVP’d for it. I even brought my friend from Australia who is an upcoming producer here in LA! So thank you Baron Davis for not kicking me out! I had some remarkable life conversations with some of entertainments brightest women!"],
        ["subtitle", "The ALLEN IVERSON Experience"],
        ["image", "https://i.imgur.com/cYQJi9s.jpg"],
        ["text", "I’ve been an A.I fan since living in Hampton, VA as a kid. I couldn’t wait for the event! This is the man who changed basketballs image during his playing days. He merged hip hop and basketball."],
        ["image", "https://i.imgur.com/n1vNcrB.jpg"],
        ["image", "https://i.imgur.com/6DDbt3x.jpg"],
        ["image", "https://i.imgur.com/N9AE2uq.jpg"],
        ["title2", "Dame Dash- ‘Honor Up’ private screening"],
        ["subtitle", "Here's the trailer"],
        ["youtube", "https://www.youtube.com/embed/aCq1srS3PiA" ],
        ["subtitle", "Mally Mal Party"],
        ["text", "This event is where I got to party like 23 year old Brandon London. I felt young, alive and invincible. Not invincible in a creepy or arrogant manner. I mean, I still conducted myself in manner that proves I have home training. But when you’re hanging out poolside at a mansion in the Hollywood Hills with rappers, models, DJs and industry people with bottles being popped and dope music, you’re having a good time and  feeling thankful. "],
        ["text", "Rae Sremmurd came through and his whole camp turned the entire party up. I can’t lie, I’m now a Raw Smeader fan just because of the way he and his entourage saved the party."],
        ["subtitle", "Oh yea, the LAPD came and shut the party down. Helicopters and all!! That’s a party!"],
        ["text", "I don’t know where next year's all star weekend is but it’s going to be hard to top 2018!"],
    ]
})



links = [
    {
        title: "Eye Opener’ closes to make room for brand-new ‘morning’ (update)",
        link: "http://www.star-telegram.com/entertainment/tv/article156700024.html",
        image: "https://i.imgur.com/ZPheA08.jpg"
    },
    {
        title: "Landon Collins' Giants charity softball game rosters announced",
        link: "http://www.nj.com/giants/index.ssf/2017/05/landon_collins_giants_charity_softball_game_roster.html",
        image: "https://i.imgur.com/on8QI8Q.jpg"
    },
    {
        title: "FootBallGamePlan - Brandon London's Event - Being Multi-Layered - May 27, 2015",
        link: "https://www.youtube.com/watch?v=DH0enkzKWJY&feature=youtu.be",
        image: "https://i.imgur.com/6vwAmWs.jpg"

    },
    {
        title: "Roster evaluation and Brandon London interview | Talk Is Cheap",
        link: "http://www.nj.com/giants/index.ssf/2016/08/listen_roster_evaluation_and_brandon_london_interv.html",
        image: "https://i.imgur.com/RSmV4Rl.jpg"
    },
    {
        title: "The Top 10 Sexiest Montreal Alouettes Players",
        link: "https://www.mtlblog.com/best-of-mtl/the-10-most-drool-worthy-players-on-the-montreal-alouettes",
        image: "https://i.imgur.com/ciJivcz.jpg"
    },
    {
        title: "Canada.com - Montreal Alouettes receiver Brandon London announces CFL retirement - June 3, 2015",
        link: "http://o.canada.com/sports/montreal-alouettes-receiver-brandon-london-announces-cfl-retirement",
        image: "https://i.imgur.com/olt5ztV.jpg"
    },
    {
        title: "L'Etage Magazine - Catches Clinic by Brandon London  - May 19, 2015",
        link: "http://www.letagemagazine.com/catches-clinic-by-brandon-london/",
        image: "https://i.imgur.com/indi584.jpg"
    },
    {
        title: "Montreal Gazette - The Snap: London's retirement caught Higgins by surprise - June 4, 2015",
        link: "http://montrealgazette.com/sports/football/cfl/montreal-alouettes/the-snap-londons-retirement-caught-higgins-by-surprise",
        image: "https://i.imgur.com/yykJn5P.jpg"
    },
]
links.each do |link|
    a = Link.create({
        title: link[:title],
        link: link[:link],
        page_id: press.id
    })
    Image.create({
        imageable_id: a.id,
        imageable_type: a.class.to_s,
        image: link[:image]
    })
end

